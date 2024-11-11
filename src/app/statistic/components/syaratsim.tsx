"use client"

import { Bar, BarChart, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Tanpa Persyaratan",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#4A90E2",  // Blue
  },
  {
    name: "Tanpa Jamkesnas",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#F5A623",
  },
  
]

export function SyaratSim() {
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
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-current"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
