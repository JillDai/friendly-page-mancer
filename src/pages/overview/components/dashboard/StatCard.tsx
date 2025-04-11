
import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  color?: string;
  children?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color = "custom-teal", children }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className={`bg-${color}/10 p-4 border-b border-${color}/20`}>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      </div>
      <div className="p-5 flex justify-center items-center">
        {children || <div className="text-4xl font-bold text-center">{value}</div>}
      </div>
    </div>
  );
};

export default StatCard;
