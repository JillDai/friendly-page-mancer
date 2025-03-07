
import React from 'react';

interface CoverageSummaryProps {
  totalRequirements: number;
  coveredRequirements: number;
  coveragePercentage: number;
}

const CoverageSummary: React.FC<CoverageSummaryProps> = ({
  totalRequirements,
  coveredRequirements,
  coveragePercentage,
}) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-md shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-custom-dark-teal mb-4">Summary</h3>
      
      <div className="flex gap-12 mb-6">
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">{totalRequirements}</div>
          <div className="text-sm text-gray-600">Requirements</div>
        </div>
        
        <div className="text-center">
          <div className="text-5xl font-bold mb-2 text-green-700">{coveredRequirements}</div>
          <div className="text-sm text-gray-600">Covered</div>
        </div>
      </div>
      
      <div className="mb-2">
        <span className="font-medium">Coverage level - </span>
        <span className="text-green-700">{coveragePercentage}% covered</span>
      </div>
      
      <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
          style={{ width: `${coveragePercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-end text-xs text-green-700">
        {coveragePercentage}%
      </div>
    </div>
  );
};

export default CoverageSummary;
