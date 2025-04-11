
import React, { useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import AreaSelector from './components/AreaSelector';
import TabNavigation from './components/TabNavigation';
import FilterSection from './components/FilterSection';
import { FilterProvider, useFilterContext } from './context/FilterContext';
import OverviewTab from './components/tabs/OverviewTab';
import RequirementTraceabilityTab from './components/tabs/RequirementTraceabilityTab';
import TestCoverageTab from './components/tabs/TestCoverageTab';
import DashboardOngoingTab from './components/tabs/DashboardOngoingTab';
import DashboardCompleteTab from './components/tabs/DashboardCompleteTab';
import { useFilterConfig } from './components/FilterConfig';

const OverviewPageContent: React.FC = () => {
  const [activeArea, setActiveArea] = useState("01");
  const [activeTab, setActiveTab] = useState("overview");
  
  const { handleSearch } = useFilterContext();
  const filterConfigs = useFilterConfig(activeTab);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-custom-dark-teal">Overview</h1>
        <AreaSelector activeArea={activeArea} onAreaChange={setActiveArea} />
      </div>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab !== "dashboard-ongoing" && activeTab !== "dashboard-complete" && (
        <FilterSection 
          activeTab={activeTab} 
          filterConfigs={filterConfigs} 
          onSearch={() => handleSearch(activeTab)} 
        />
      )}
      
      <Tabs value={activeTab} className="mb-8" onValueChange={setActiveTab}>
        <TabsContent value="overview" className="mt-4 p-0">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="requirement-traceability" className="mt-4 p-0">
          <RequirementTraceabilityTab />
        </TabsContent>
        <TabsContent value="test-coverage" className="mt-4 p-0">
          <TestCoverageTab />
        </TabsContent>
        <TabsContent value="dashboard-ongoing" className="mt-4 p-0">
          <DashboardOngoingTab />
        </TabsContent>
        <TabsContent value="dashboard-complete" className="mt-4 p-0">
          <DashboardCompleteTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const OverviewPage: React.FC = () => {
  return (
    <FilterProvider>
      <OverviewPageContent />
    </FilterProvider>
  );
};

export default OverviewPage;
