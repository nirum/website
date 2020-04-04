import React from 'react'
import * as V from 'victory'
import theme from "../charts/theme"

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];

console.log(V.VictoryTheme.material)

export default () => (
    <div className="w-full h-full bg-gray-900">
        <V.VictoryChart theme={theme} domainPadding={20}>
            <V.VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={["Q1", "Q2", "Q3", "Q4"]} />
            <V.VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
            <V.VictoryBar data={data} x="quarter" y="earnings" />
        </V.VictoryChart>
    </div>
)

// import React, { useEffect, useInterval, useRef, useState } from 'react'
// import * as d3 from 'd3'

// const generateData = () => (
//     Array(10).fill(0).map(() => ([
//         Math.random() * 80 + 10,
//         Math.random() * 35 + 10,
//     ]))
// )

// const Circles = () => {
//     const [data, setData] = useState(generateData())
//     const ref = useRef()

//     useEffect(() => {
//         const svg = d3.select(ref.current)
//             .selectAll("circle")
//             .data(data)
//             .join("circle")
//                 .attr("cx", d => d[0])
//                 .attr("cy", d => d[1])
//                 .attr("r", 3)
//     }, [data])

//     // useInterval(() => {
//     //     setData(generateData())
//     // }, 2000);

//     return (
//         <svg viewBox="0 0 100 50" ref={ref}></svg>
//     )
// }

// const Chart = ({ data }) => {
//     d3.select()
//     return (
//         <div>foo</div>
//     )
// }

// const data = [60, 64, 67, 70, 72, 71, 68, 67, 65, 63, 61];
// export default () => (
//     <div className="w-3/4 h-64 bg-gray-800">
//         <div className="px-4 border-b border-gray-200">
//             <h2>Hello world</h2>
//             <Circles />
//         </div>
//         <Chart className="w-full h-full" data={data} />
//     </div>
// )






// // import React, { useRef, useState, useEffect } from "react"

// // import { select } from "d3-selection"
// // import { scaleBand, scaleLinear } from "d3-scale"
// // import { range, max } from "d3-array"
// // import { axisBottom, axisLeft } from "d3-axis"

// // import { xml } from "d3";

// // const ReactNode = withContext(({dims, data}) => {
// //     const domNode = useRef(null);

// //     useEffect(() => {
// //         const x = scaleBand()
// //             .domain(range(data.length))
// //             .range([0, dims.width])
// //             .padding(0.1)
        
// //         const y = scaleLinear()
// //             .domain([0, max(data)]).nice()
// //             .range([dims.height, 0])
        
// //         const xAxis = g => g
// //             .attr("transform", `translate(0,${dims.height})`)
// //             .call(axisBottom(x).tickFormat(i => i).tickSizeOuter(0))
        
// //         const yAxis = g => g
// //             .attr("transform", `translate(0,0)`)
// //             .call(axisLeft(y).ticks(null, data.format))
// //             .call(g => g.select(".domain").remove())
// //             .call(g => g.append("text")
// //                 .attr("x", 0)
// //                 .attr("y", 10)
// //                 .attr("fill", "currentColor")
// //                 .attr("text-anchor", "start")
// //                 .text(data.y))

// //         const svg = select(domNode.current)
// //             .append("svg")
// //             .attr("viewBox", [0, 0, dims.width, dims.height])
        
// //         svg.append("g")
// //             .attr("fill", "steelblue")
// //             .selectAll("rect")
// //             .data(data)
// //             .join("rect")
// //                 .attr("x", (d, i) => x(i))
// //                 .attr("y", (d, i) => y(d))
// //                 .attr("height", d => y(0) - y(d))
// //                 .attr("width", x.bandwidth());
        
// //         svg.append("g").call(xAxis);
// //         svg.append("g").call(yAxis);
// //     }, []);

// //     return (
// //         <div ref={domNode} className="h-full bg-gray-800">
// //             <h2>{dims.width} x {dims.height}</h2>
// //         </div>
// //     )
// // });

// // const data = [4, 3, 7, 2, 2, 2, 2, 7, 3, 4];
// // export default () => (
// //     <div className="w-3/4 h-64">
// //         <Provider>
// //             <ReactNode data={data} />
// //         </Provider>
// //     </div>
// // )