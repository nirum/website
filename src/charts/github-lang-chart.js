import React, { useEffect, useRef, useState } from 'react'
import useResizeObserver from './resize-observer'
import * as d3 from 'd3'


export default ({ data }) => {
    const svgNode = useRef();
    const wrapperNode = useRef();
    const dims = useResizeObserver(wrapperNode);
    const defaultLabel = "Hover to see languages"
    const numLangs = 10;
    const [label, setLabel] = useState(defaultLabel);

    useEffect(() => {
        const svg = d3.select(svgNode.current)
        const margin = 10

        if (!dims) return;
        if (!data) return;

        svg.attr("preserveAspectRatio", "xMinYMin meet")
        svg.attr("viewBox", `0 0 ${dims.width} ${dims.height}`)

        const radius = Math.min(dims.width, dims.height) / 2
        const counts = d3.nest()
            .key(d => d).rollup(d => d.length).entries(data)
            .sort((a, b) => b.value - a.value)
            .slice(0, numLangs);
        const pie_data = d3.pie().value(d => d.value)(counts);

        const arc = d3.arc().innerRadius(0).outerRadius(radius - 1)
        svg.selectAll("path")
            .data(pie_data)
            .join("path")
            .attr("fill", (d, i) => d3.schemeCategory10[i])
            .attr("d", arc)
            .on("mouseover", (d, i) => setLabel(counts[i].key))
            .on("mouseleave", () => setLabel(defaultLabel))
            .style("transform", `translate(${dims.width / 2}px,${dims.height / 2}px)`)
        
        svg.select(".legend")
            .attr("fill", "currentColor")
            .style("font-size", 18)
            .attr("x", dims.width / 2)
            .attr("y", -margin)
            .style("text-anchor", "middle")
            .text(label)

    }, [data, dims, label]);

    return (
        <div className="mt-12 mb-4 md:mb-0 chart" ref={wrapperNode}>
            <svg className="w-full h-full overflow-visible" ref={svgNode}>
                <text className="legend" />
            </svg>
        </div>
    )
}