import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Income",
    value: 70000,
    max: 90000,
  },
  {
    name: "Expenditure",
    value: 50000,
    max: 90000,
  },
];

const BarGraph = () => {
  return (
    <BarChart width={320} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[10000, 90000]} />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="value"
        name="Value"
        fill="#05AF6D"
        barSize={40}
        barGap={10}
        barCategoryGap={10}
      >
        <LabelList dataKey="value" position="top" />
      </Bar>
    </BarChart>
  );
};

export default BarGraph;
