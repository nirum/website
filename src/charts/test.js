import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

const margin = {
    top: 0,
    right: 0,
    bottom: 60,
    left: 60
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

    useEffect(() => {
        const svg = d3.select(svgNode.current)

        if (!dims) return;
        if (!data) return;

        const x = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, dims.width])
        
        const y = d3.scaleLinear()
            .domain([0, 150])
            .range([dims.height, 0])

        const xAxis = d3.axisBottom(x)
            .ticks(data.length)
            .tickFormat(i => i + 1)
        svg.select(".x-axis")
            .style("transform", `translateY(${dims.height}px)`)
            .call(xAxis)

        const yAxis = d3.axisLeft(y)
        svg.select(".y-axis").call(yAxis)

        const line = d3.line()
            .x((d, i) => x(i))
            .y(d => y(d.y) - dims.height)
            .curve(d3.curveNatural)
        
        svg.selectAll("path")
            .data([data])
            .join("path")
            .attr("d", d => line(d))
            .attr("fill", "none")
            .attr("stroke", "blue")
        
        // svg.selectAll("circle").data(data)
        //     .join("circle")
        //     .attr("r", d => d["y"])
        //     .attr("cx", d => d["y"])
        //     .attr("cy", d => d["y"])
        //     .attr("stroke", "red")
    }, [data, dims]);

    return (
        <div className="chart-wrapper ml-8 mb-8 mt-2" ref={wrapperNode}>
            <svg className="w-full h-full bg-gray-200 overflow-visible" ref={svgNode}>
                <g className="axis x-axis" />
                <g className="axis y-axis" />
            </svg>
        </div>
    )

    // useEffect(() => {

    //     console.log(data)
    //     const x = d3.scaleBand()
    //         .domain(d3.range(data.length))
    //         .range([margin.left, width - margin.right])
    //         .padding(0.4)

    //     const y = d3.scaleLinear()
    //         .domain([0, d3.max(data, d => d.y)]).nice()
    //         .range([height - margin.bottom, margin.top])

    //     const xAxis = g => g
    //         .attr("transform", `translate(0,${height - margin.bottom})`)
    //         .call(d3.axisBottom(x)
    //             .tickFormat(i => data[i].x)
    //             .tickSizeOuter(0))
    //         .call(g => g.append("text")
    //             .attr("y", 0.8 * margin.bottom)
    //             .attr("x", 0.5 * width + 0.5 * margin.left)
    //             .attr("class", "label")
    //             .attr("text-anchor", "middle")
    //             .attr("fill", "currentColor")
    //             .text("GitHub Repository"))

    //     const yAxis = g => g
    //         .attr("transform", `translate(${margin.left},0)`)
    //         .call(d3.axisLeft(y)
    //             .ticks(5))
    //         .call(g => g.append("text")
    //             .attr("x", - 0.5 * height + 0.5 * margin.bottom)
    //             .attr("y", -0.7 * margin.left)
    //             .attr("text-anchor", "middle")
    //             .attr("class", "label")
    //             .attr("fill", "currentColor")
    //             .attr("transform", "rotate(-90)")
    //             .text("Number of stars"))

    //     const svg = d3.select(node.current)
    //         .attr("viewBox", [0, 0, width, height]);

    //     svg.append("g")
    //         .attr("fill", "currentColor")
    //       .selectAll("rect")
    //       .data(data)
    //       .join("rect")
    //         .attr("x", (d, i) => x(i))
    //         .attr("y", d => y(d.y))
    //         .attr("height", d => y(0) - y(d.y))
    //         .attr("width", x.bandwidth());
      
    //     svg.append("g")
    //             .attr("class", "axis")
    //             .call(xAxis);
      
    //     svg.append("g")
    //         .attr("class", "axis")
    //         .call(yAxis);
    // }, [])
    // return (
    //     <svg className="chart" ref={node} />
    // )
}