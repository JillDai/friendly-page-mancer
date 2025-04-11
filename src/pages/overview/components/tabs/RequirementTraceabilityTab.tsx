
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import RequirementTraceabilityTable from '@/components/RequirementTraceabilityTable';
import { useFilterContext } from '../../context/FilterContext';

const RequirementTraceabilityTab: React.FC = () => {
  const { appliedFilters } = useFilterContext();
  
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-0">
        <RequirementTraceabilityTable 
          filteredRequirements={appliedFilters.requirements}
          filteredTestCases={appliedFilters.testCases}
        />
      </CardContent>
    </Card>
  );
};

export default RequirementTraceabilityTab;
