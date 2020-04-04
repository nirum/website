import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const margin = {
    top: 0,
    right: 0,
    bottom: 60,
    left: 60
}

export default ({ data, width, height }) => {
    const node = useRef(null);

    useEffect(() => {

        console.log(data)
        const x = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, width - margin.right])
            .padding(0.4)

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y)]).nice()
            .range([height - margin.bottom, margin.top])

        const xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x)
                .tickFormat(i => data[i].x)
                .tickSizeOuter(0))
            .call(g => g.append("text")
                .attr("y", 0.8 * margin.bottom)
                .attr("x", 0.5 * width + 0.5 * margin.left)
                .attr("class", "label")
                .attr("text-anchor", "middle")
                .attr("fill", "currentColor")
                .text("GitHub Repository"))

        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y)
                .ticks(5))
            .call(g => g.append("text")
                .attr("x", - 0.5 * height + 0.5 * margin.bottom)
                .attr("y", -0.7 * margin.left)
                .attr("text-anchor", "middle")
                .attr("class", "label")
                .attr("fill", "currentColor")
                .attr("transform", "rotate(-90)")
                .text("Number of stars"))

        const svg = d3.select(node.current)
            .attr("viewBox", [0, 0, width, height]);

        svg.append("g")
            .attr("fill", "currentColor")
          .selectAll("rect")
          .data(data)
          .join("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(d.y))
            .attr("height", d => y(0) - y(d.y))
            .attr("width", x.bandwidth());
      
        svg.append("g")
                .attr("class", "axis")
                .call(xAxis);
      
        svg.append("g")
            .attr("class", "axis")
            .call(yAxis);
    }, [])
    return (
        <svg className="chart" ref={node} />
    )
}