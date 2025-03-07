
import React, { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TestPlanTable from '@/components/TestPlanTable';
import { ChevronDown, Search, Filter, Check, X } from 'lucide-react';
import { MultiSelect } from '@/components/MultiSelect';

const OverviewPage = () => {
  const [activeArea, setActiveArea] = useState("01");
  
  // Filter options data
  const releaseOptions = [
    { value: 'sprint01', label: 'Sprint 01' },
    { value: 'sprint02', label: 'Sprint 02' },
    { value: 'sprint03', label: 'Sprint 03' },
  ];
  
  const cycleOptions = [
    { value: 'cycle01-01', label: 'Cycle 01-01' },
    { value: 'cycle01-02', label: 'Cycle 01-02' },
    { value: 'cycle02-01', label: 'Cycle 02-01' },
  ];
  
  const assignedToOptions = [
    { value: 'user1', label: 'User 1' },
    { value: 'user2', label: 'User 2' },
    { value: 'user3', label: 'User 3' },
  ];
  
  const [selectedReleases, setSelectedReleases] = useState([]);
  const [selectedCycles, setSelectedCycles] = useState([]);
  const [selectedAssignees, setSelectedAssignees] = useState([]);
  
  const handleSearch = () => {
    console.log('Searching with filters:', {
      releases: selectedReleases,
      cycles: selectedCycles,
      assignees: selectedAssignees
    });
    // Here you would implement the actual filtering logic
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      
      <div className="mb-6">
        <Select defaultValue="01" onValueChange={setActiveArea}>
          <SelectTrigger className="w-56 border-2 border-gray-300">
            <SelectValue placeholder="Select Area">
              Area {activeArea}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="01">Area 01</SelectItem>
            <SelectItem value="02">Area 02</SelectItem>
            <SelectItem value="03">Area 03</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="overview" className="mb-6">
        <TabsList className="border-b w-full justify-start gap-6 rounded-none bg-transparent p-0">
          <TabsTrigger 
            value="overview" 
            className="border-b-2 data-[state=active]:border-black data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="requirement-traceability" 
            className="border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
          >
            Requirement Traceability Report
          </TabsTrigger>
          <TabsTrigger 
            value="test-coverage" 
            className="border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
          >
            Requirement Test Coverage Report
          </TabsTrigger>
          <TabsTrigger 
            value="dashboard-ongoing" 
            className="border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
          >
            Dashboard Ongoing
          </TabsTrigger>
          <TabsTrigger 
            value="dashboard-complete" 
            className="border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
          >
            Dashboard Complete
          </TabsTrigger>
        </TabsList>
        
        {/* Filter section */}
        <div className="mt-6 mb-4 border-2 border-gray-200 p-4 rounded-md">
          <div className="flex items-center mb-3">
            <Filter className="mr-2 h-5 w-5" />
            <h2 className="text-lg font-medium">篩選器</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Release</label>
              <MultiSelect 
                options={releaseOptions}
                selected={selectedReleases}
                onChange={setSelectedReleases}
                placeholder="Select releases"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Cycle</label>
              <MultiSelect 
                options={cycleOptions}
                selected={selectedCycles}
                onChange={setSelectedCycles}
                placeholder="Select cycles"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Assigned To</label>
              <MultiSelect 
                options={assignedToOptions}
                selected={selectedAssignees}
                onChange={setSelectedAssignees}
                placeholder="Select assignees"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={handleSearch} className="bg-black hover:bg-gray-800">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
        
        <TabsContent value="overview" className="mt-4 p-0">
          <Card className="border-2">
            <CardContent className="p-0">
              <TestPlanTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="requirement-traceability">
          <div className="py-8 text-center text-gray-500">
            Requirement Traceability Report content goes here
          </div>
        </TabsContent>
        <TabsContent value="test-coverage">
          <div className="py-8 text-center text-gray-500">
            Requirement Test Coverage Report content goes here
          </div>
        </TabsContent>
        <TabsContent value="dashboard-ongoing">
          <div className="py-8 text-center text-gray-500">
            Dashboard Ongoing content goes here
          </div>
        </TabsContent>
        <TabsContent value="dashboard-complete">
          <div className="py-8 text-center text-gray-500">
            Dashboard Complete content goes here
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OverviewPage;
