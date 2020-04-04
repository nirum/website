import React from 'react'
import { VictoryChart, VictoryPie, VictoryAxis } from 'victory'
import theme from "./theme"

export default ({ data }) => (
    <div className="w-full h-full bg-gray-900">
        {/* <VictoryChart theme={theme} domainPadding={20}> */}
        <VictoryPie data={data} theme={theme} />
        {/* </VictoryChart> */}
    </div>
)