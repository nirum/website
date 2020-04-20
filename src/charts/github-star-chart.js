import React, { useEffect, useRef, useState } from 'react'
import { theme } from "../../tailwind.config"
import * as d3 from 'd3'

const margin = {
    top: 0,
    right: 0,
    bottom: 15,
    left: 40
}

const useResizeObserver = ref => {
    const [dims, setDims] = useState(null);
    useEffect(() => {
        const target = ref.current;
        const observer = new ResizeObserver(entries =>  {
            entries.forEach(d => {
                setDims(d.contentRect);
            })
        })
        observer.observe(target)
        return () => {observer.unobserve(target)};
    }, [ref]);
    return dims;
};

export default ({ data }) => {
    const svgNode = useRef();
    const wrapperNode = useRef();
    const dims = useResizeObserver(wrapperNode);
    const [hoverIdx, setHoverIdx] = useState(-1);
    const [label, setLabel] = useState("");

    useEffect(() => {
        const svg = d3.select(svgNode.current)

        if (!dims) return;
        if (!data) return;

        svg.attr("preserveAspectRatio", "xMinYMin meet")
        svg.attr("viewBox", `0 0 ${dims.width} ${dims.height}`)

        const x = d3.scaleBand()
            .domain(data.map((d, i) => i))
            .range([margin.left, dims.width - margin.right])
            .padding(0.3);
        
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y)]).nice()
            .range([dims.height - margin.bottom, margin.top])

        const xAxis = d3.axisBottom(x)
            .ticks(data.length)
            .tickFormat("");
        svg.select(".x-axis")
            .style("font-size", 14)
            .style("transform", `translateY(${dims.height - margin.bottom}px)`)
            .call(xAxis)
        
        svg.selectAll(".x-label")
            .attr("fill", "currentColor")
            .style("font-size", 18)
            .attr("x", dims.width / 2 + margin.left / 2)
            .attr("y", dims.height + margin.bottom)
            .style("text-anchor", "middle")
            .text("Repository")

        const yAxis = d3.axisLeft(y)
            .ticks(4)
        svg.select(".y-axis")
            .style("font-size", 14)
            .style("transform", `translateX(${margin.left}px)`)
            .call(yAxis)
        svg.selectAll(".y-label")
            .attr("fill", "currentColor")
            .style("font-size", 18)
            .attr("x", - dims.height / 2)
            .attr("y", 0)
            .attr("transform", "rotate(-90)")
            .style("text-anchor", "middle")
            .text("Stars")
        
        svg.selectAll(".legend")
            .attr("fill", "currentColor")
            .style("font-size", 18)
            .attr("x", dims.width - 20)
            .attr("y", 20)
            .style("text-anchor", "end")
            .text(label)

        svg.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .style("transform", "scale(1, -1)")
            .attr("x", (d, i) => x(i))
            .attr("y", margin.bottom-dims.height)
            .attr("fill", (d, i) => i === hoverIdx ? theme.colors.brand.default : theme.colors.brand.secondary)
            .attr("width", x.bandwidth())
            .on("mouseover", (d, i) => {
                setHoverIdx(i);
                setLabel(d.x);
                svg.selectAll(".tooltip")
                    .data([d])
                    .join("text")
                    .attr("class", "tooltip")
                    .text(d.y)
                    .attr("fill", "currentColor")
                    .attr("x", x(i) + x.bandwidth() / 2)
                    .attr("y", y(d.y) - 4)
                    .attr("text-anchor", "middle")
                    .transition()
                    .duration(100)
                    .attr("y", y(d.y) - 8)
                    .attr("opacity", 1);
            })
            .on("mouseleave", (d, i) => {
                setHoverIdx(-1)
                setLabel("")
                svg.select(".tooltip")
                    .transition()
                    .duration(100)
                    .attr("opacity", 0)
                    .remove()
            })
            .transition()
            .delay(100)
            .duration(500)
            .attr("height", d => dims.height - margin.bottom - y(d.y))

    }, [data, dims, hoverIdx, label]);

    return (
        <div className="p-8 chart" ref={wrapperNode}>
            <svg className="w-full h-full overflow-visible" ref={svgNode}>
                <g className="axis x-axis" />
                <text className="axis x-label" />
                <g className="axis y-axis" />
                <text className="axis y-label" />
                <text className="legend" />
            </svg>
        </div>
    )
}
