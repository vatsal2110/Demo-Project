import React from "react";
import { AreaChart, Area, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    Amount: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    Amount: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    Amount: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    Amount: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    Amount: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    Amount: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    Amount: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Page H",
    Amount: 2500,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page I",
    Amount: 4000,
    pv: 1398,
    amt: 2210
  }
];

function Graph() {
  return (
    <AreaChart
      width={430}
      height={304}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <Tooltip
      wrapperStyle={{ backgroundColor: "#0047AB",height: "60px",width: "130px" }}
      labelStyle={{display: "none"}}
      itemStyle={{ color: "#002244" ,fontSize: "15px"}}
       />
      <Area dataKey="Amount" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}

export default Graph;
