
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import TestCoverageTable from '@/components/TestCoverageTable';
import { useFilterContext } from '../../context/FilterContext';

const TestCoverageTab: React.FC = () => {
  const { appliedFilters } = useFilterContext();
  
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-0">
        <TestCoverageTable 
          filteredReleases={appliedFilters.testCoverageReleases}
        />
      </CardContent>
    </Card>
  );
};

export default TestCoverageTab;
