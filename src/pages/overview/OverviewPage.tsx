
import React, { useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import AreaSelector from './components/AreaSelector';
import TabNavigation from './components/TabNavigation';
import FilterSection from './components/FilterSection';
import TestPlanTable from '@/components/TestPlanTable';
import RequirementTraceabilityTable from '@/components/RequirementTraceabilityTable';
import TestCoverageTable from '@/components/TestCoverageTable';
import DashboardOngoing from './components/dashboard/DashboardOngoing';

const OverviewPage = () => {
  const [activeArea, setActiveArea] = useState("01");
  const [activeTab, setActiveTab] = useState("overview");
  
  // Filter options
  const releaseOptions = [
    { value: 'Release 01', label: 'Release 01' },
    { value: 'Release 02', label: 'Release 02' },
    { value: 'Release 03', label: 'Release 03' },
  ];
  
  const cycleOptions = [
    { value: 'cycle01-01', label: 'Cycle 01-01' },
    { value: 'cycle01-02', label: 'Cycle 01-02' },
    { value: 'cycle02-01', label: 'Cycle 02-01' },
    { value: 'cycle02-02', label: 'Cycle 02-02' },
    { value: 'cycle03-01', label: 'Cycle 03-01' },
    { value: 'cycle03-02', label: 'Cycle 03-02' },
  ];
  
  const assignedToOptions = [
    { value: 'john_doe', label: 'John Doe' },
    { value: 'emma_wilson', label: 'Emma Wilson' },
    { value: 'michael_chen', label: 'Michael Chen' },
  ];

  const requirementOptions = [
    { value: 'TCTF-607', label: 'TCTF-607: Pre-SIT(Global契約)_Story_1' },
    { value: 'TCTF-159', label: 'TCTF-159: 定存解約' },
    { value: 'TCTF-158', label: 'TCTF-158: 定存盤戶-聯別(其他)' },
  ];
  
  const testCaseOptions = [
    { value: 'TCTF-625', label: 'TCTF-625' },
    { value: 'TCTF-627', label: 'TCTF-627' },
    { value: 'TCTF-619', label: 'TCTF-619' },
    { value: 'TCTF-495', label: 'TCTF-495' },
    { value: 'TCTF-461', label: 'TCTF-461' },
    { value: 'TCTF-531', label: 'TCTF-531' },
  ];
  
  // Filter states
  const [selectedReleases, setSelectedReleases] = useState<string[]>([]);
  const [selectedCycles, setSelectedCycles] = useState<string[]>([]);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);
  const [selectedRequirements, setSelectedRequirements] = useState<string[]>([]);
  const [selectedTestCases, setSelectedTestCases] = useState<string[]>([]);
  const [selectedTestCoverageReleases, setSelectedTestCoverageReleases] = useState<string[]>([]);
  
  // Applied filters state
  const [appliedFilters, setAppliedFilters] = useState<{
    releases: string[];
    cycles: string[];
    assignees: string[];
    requirements: string[];
    testCases: string[];
    testCoverageReleases: string[];
  }>({
    releases: [],
    cycles: [],
    assignees: [],
    requirements: [],
    testCases: [],
    testCoverageReleases: []
  });
  
  // Handle search based on active tab
  const handleSearch = () => {
    if (activeTab === "overview") {
      console.log('Searching with Overview filters:', {
        releases: selectedReleases,
        cycles: selectedCycles,
        assignees: selectedAssignees
      });
      
      setAppliedFilters({
        ...appliedFilters,
        releases: [...selectedReleases],
        cycles: [...selectedCycles],
        assignees: [...selectedAssignees]
      });
    } else if (activeTab === "requirement-traceability") {
      console.log('Searching with Requirement Traceability filters:', {
        requirements: selectedRequirements,
        testCases: selectedTestCases
      });
      
      setAppliedFilters({
        ...appliedFilters,
        requirements: [...selectedRequirements],
        testCases: [...selectedTestCases]
      });
    } else if (activeTab === "test-coverage") {
      console.log('Searching with Test Coverage filters:', {
        testCoverageReleases: selectedTestCoverageReleases
      });
      
      setAppliedFilters({
        ...appliedFilters,
        testCoverageReleases: [...selectedTestCoverageReleases]
      });
    }
  };
  
  // Filter configurations for each tab
  const filterConfigs = {
    overview: [
      {
        label: "Release",
        options: releaseOptions,
        selected: selectedReleases,
        onChange: setSelectedReleases
      },
      {
        label: "Cycle",
        options: cycleOptions,
        selected: selectedCycles,
        onChange: setSelectedCycles
      },
      {
        label: "Assigned To",
        options: assignedToOptions,
        selected: selectedAssignees,
        onChange: setSelectedAssignees
      }
    ],
    requirementTraceability: [
      {
        label: "Requirement",
        options: requirementOptions,
        selected: selectedRequirements,
        onChange: setSelectedRequirements
      },
      {
        label: "Test Case",
        options: testCaseOptions,
        selected: selectedTestCases,
        onChange: setSelectedTestCases
      }
    ],
    testCoverage: [
      {
        label: "Release",
        options: releaseOptions,
        selected: selectedTestCoverageReleases,
        onChange: setSelectedTestCoverageReleases
      }
    ]
  };
  
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
          onSearch={handleSearch} 
        />
      )}
      
      <Tabs value={activeTab} className="mb-8" onValueChange={setActiveTab}>
        <TabsContent value="overview" className="mt-4 p-0">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-0">
              <TestPlanTable 
                filteredReleases={appliedFilters.releases} 
                filteredCycles={appliedFilters.cycles}
                filteredAssignees={appliedFilters.assignees}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="requirement-traceability" className="mt-4 p-0">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-0">
              <RequirementTraceabilityTable 
                filteredRequirements={appliedFilters.requirements}
                filteredTestCases={appliedFilters.testCases}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="test-coverage" className="mt-4 p-0">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-0">
              <TestCoverageTable 
                filteredReleases={appliedFilters.testCoverageReleases}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dashboard-ongoing" className="mt-4 p-0">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-0">
              <DashboardOngoing />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dashboard-complete" className="mt-4 p-0">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-0">
              <div className="py-8 text-center text-gray-500">
                Dashboard Complete content goes here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OverviewPage;
