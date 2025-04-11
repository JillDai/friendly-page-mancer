
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import TestPlanTable from '@/components/TestPlanTable';
import { useFilterContext } from '../../context/FilterContext';

const OverviewTab: React.FC = () => {
  const { appliedFilters } = useFilterContext();
  
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-0">
        <TestPlanTable 
          filteredReleases={appliedFilters.releases} 
          filteredCycles={appliedFilters.cycles}
          filteredAssignees={appliedFilters.assignees}
        />
      </CardContent>
    </Card>
  );
};

export default OverviewTab;
