import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "6", unit: "月", dataLine1: 90, dataLine2: 90 },
  { name: "7", unit: "月", dataLine1: 78, dataLine2: 88 },
  { name: "8", unit: "月", dataLine1: 60, dataLine2: 70 },
  { name: "9", unit: "月", dataLine1: 73, dataLine2: 58 },
  { name: "10", unit: "月", dataLine1: 66, dataLine2: 60 },
  { name: "11", unit: "月", dataLine1: 63, dataLine2: 67 },
  { name: "12", unit: "月", dataLine1: 71, dataLine2: 60 },
  { name: "1", unit: "月", dataLine1: 50, dataLine2: 34 },
  { name: "2", unit: "月", dataLine1: 67, dataLine2: 89 },
  { name: "3", unit: "月", dataLine1: 30, dataLine2: 23 },
  { name: "4", unit: "月", dataLine1: 33, dataLine2: 45 },
  { name: "5", unit: "月", dataLine1: 10, dataLine2: 8 },
];

const CustomizedAxisTick = (props) => {
  const { x, y, unit, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#fff"
        transform=""
        fontSize={12}
      >
        {payload.value}
      </text>
      <text
        x={10}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#fff"
        transform=""
        fontSize={8}
      >
        {unit}
      </text>
    </g>
  );
};

const LineChartComponent = ({height}) => {
  return (
    <ResponsiveContainer width={"100%"} height={height ?? 210}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, bottom: 20, left: 33 }}
      >
        <CartesianGrid
          horizontal={false}
          strokeDasharray="0"
          width={1}
          fill="#777777"
          color="#777777"
        />
        <XAxis
          dataKey="name"
          height={22}
          tick={<CustomizedAxisTick unit={"月"} />}
          axisLine={{ stroke: "transparent" }}
          tickLine={{ strokeWidth: 0 }}
        />
        <Line
          type="linear"
          dataKey="dataLine1"
          fill="#FFCC21"
          stroke="#FFCC21"
          strokeWidth={3}
        />
        <Line
          type="linear"
          dataKey="dataLine2"
          fill="#8FE9D0"
          stroke="#8FE9D0"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
