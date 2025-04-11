
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface DonutChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  title: string;
  centerText: string | number;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, title, centerText }) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <div className="h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              formatter={(value, entry, index) => {
                const item = data[index];
                const percentage = Math.round((item.value / total) * 100);
                return (
                  <span className="text-xs">
                    {`${value} (${percentage}%)`}
                  </span>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-bold">{centerText}</div>
          <div className="text-xs text-gray-500">Total</div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
