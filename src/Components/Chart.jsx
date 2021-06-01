import React from "react";
import { BarChart, Bar, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    Users: 2780,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    Users: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    Users: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    Users: 4000,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    Users: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    Users: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    Users: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Page H",
    Users: 2879,
    pv: 4300,
    amt: 2100
  }
];

function Chart() {
  return (
    <BarChart width={550} height={120} data={data} margin={{
      top: 5, right: 30, left: 20, bottom: 5,
    }}>
      <Tooltip
      wrapperStyle={{ backgroundColor: "#0047AB",height: "60px",width: "110px" }}
      labelStyle={{display: "none"}}
      itemStyle={{ color: "#002244" ,fontSize: "15px"}}
       />
      <Bar dataKey="Users" fill="aquamarine" background={{ fill: "#f0f8ff" }} />
    </BarChart>
  );
}

export default Chart;
