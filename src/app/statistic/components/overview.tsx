"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface DataItem {
  name: string;
  nosk: number;
  nojs: number;
  total: number;
}

const data: DataItem[] = [
  {
    name: "SIM A",
    nosk: Math.floor(Math.random() * 5000) + 1000,
    nojs: Math.floor(Math.random() * 5000) + 1000,
    total: 0, // Initializing total
  },
  {
    name: "SIM B1",
    nosk: Math.floor(Math.random() * 5000) + 1000,
    nojs: Math.floor(Math.random() * 5000) + 1000,
    total: 0, // Initializing total
  },
  {
    name: "SIM B2",
    nosk: Math.floor(Math.random() * 5000) + 1000,
    nojs: Math.floor(Math.random() * 5000) + 1000,
    total: 0, // Initializing total
  },
  {
    name: "SIM C1",
    nosk: Math.floor(Math.random() * 5000) + 1000,
    nojs: Math.floor(Math.random() * 5000) + 1000,
    total: 0, // Initializing total
  },
  {
    name: "SIM C2",
    nosk: Math.floor(Math.random() * 5000) + 1000,
    nojs: Math.floor(Math.random() * 5000) + 1000,
    total: 0, // Initializing total
  },
  {
    name: "SIM D",
    nosk: Math.floor(Math.random() * 5000) + 1000,
    nojs: Math.floor(Math.random() * 5000) + 1000,
    total: 0, // Initializing total
  },
];

// Calculate the `total` after defining `nosk` and `nojs`
data.forEach(item => {
  item.total = item.nosk + item.nojs;
});

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="nosk"
          fill="#4A90E2" // Blue color for "nosk"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="nojs"
          fill="#F5A623" // Orange color for "nojs"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="total"
          fill="#50E3C2" // Green color for "total"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
