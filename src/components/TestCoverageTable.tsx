
import React from 'react';
import CoverageSummary from './test-coverage/CoverageSummary';
import RequirementsTable from './test-coverage/RequirementsTable';
import { requirementsData } from './test-coverage/types';

interface TestCoverageTableProps {
  filteredReleases?: string[];
}

const TestCoverageTable: React.FC<TestCoverageTableProps> = ({ 
  filteredReleases = [] 
}) => {
  
  const filteredData = requirementsData.filter(item => {
    if (filteredReleases.length === 0) {
      return true;
    }
    
    return item.release && filteredReleases.includes(item.release);
  });

  const totalRequirements = filteredData.length;
  const coveredRequirements = filteredData.filter(item => item.testCaseTemplates.length > 0).length;
  const coveragePercentage = totalRequirements > 0 ? Math.round((coveredRequirements / totalRequirements) * 100) : 0;

  if (filteredData.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No matching records found. Please adjust your filter criteria.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <CoverageSummary 
        totalRequirements={totalRequirements}
        coveredRequirements={coveredRequirements}
        coveragePercentage={coveragePercentage}
      />
      
      <RequirementsTable filteredData={filteredData} />
    </div>
  );
};

export default TestCoverageTable;
