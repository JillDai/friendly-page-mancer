
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
  
  // Updated filter options data to match the new structure
  const releaseOptions = [
    { value: 'release01', label: 'Release 01' },
    { value: 'release02', label: 'Release 02' },
    { value: 'release03', label: 'Release 03' },
  ];
  
  // Updated cycle options to match the new naming convention
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
  
  const [selectedReleases, setSelectedReleases] = useState<string[]>([]);
  const [selectedCycles, setSelectedCycles] = useState<string[]>([]);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<{
    releases: string[];
    cycles: string[];
    assignees: string[];
  }>({
    releases: [],
    cycles: [],
    assignees: []
  });
  
  const handleSearch = () => {
    console.log('Searching with filters:', {
      releases: selectedReleases,
      cycles: selectedCycles,
      assignees: selectedAssignees
    });
    
    setAppliedFilters({
      releases: [...selectedReleases],
      cycles: [...selectedCycles],
      assignees: [...selectedAssignees]
    });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-custom-dark-teal">Overview</h1>
        
        <Select defaultValue="01" onValueChange={setActiveArea}>
          <SelectTrigger className="w-56 border-2 border-custom-teal/50 hover:border-custom-teal bg-white shadow-sm">
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

      <Tabs defaultValue="overview" className="mb-8">
        <div className="border-b border-gray-200">
          <TabsList className="w-full justify-start gap-6 rounded-none bg-transparent p-0">
            <TabsTrigger 
              value="overview" 
              className="border-b-2 data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent border-transparent"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="requirement-traceability" 
              className="border-b-2 border-transparent data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
            >
              Requirement Traceability Report
            </TabsTrigger>
            <TabsTrigger 
              value="test-coverage" 
              className="border-b-2 border-transparent data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
            >
              Requirement Test Coverage Report
            </TabsTrigger>
            <TabsTrigger 
              value="dashboard-ongoing" 
              className="border-b-2 border-transparent data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
            >
              Dashboard Ongoing
            </TabsTrigger>
            <TabsTrigger 
              value="dashboard-complete" 
              className="border-b-2 border-transparent data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
            >
              Dashboard Complete
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* Filter section */}
        <div className="mt-6 mb-6 border border-custom-teal/20 bg-custom-pale/30 p-5 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-custom-teal/10 p-1.5 rounded-md">
              <Filter className="h-5 w-5 text-custom-teal" />
            </div>
            <h2 className="text-lg font-medium text-custom-dark-teal ml-2">篩選器</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-custom-dark-teal">Release</label>
              <MultiSelect 
                options={releaseOptions}
                selected={selectedReleases}
                onChange={setSelectedReleases}
                placeholder="Select releases"
                className="border-custom-teal/40 hover:border-custom-teal focus:border-custom-teal"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-custom-dark-teal">Cycle</label>
              <MultiSelect 
                options={cycleOptions}
                selected={selectedCycles}
                onChange={setSelectedCycles}
                placeholder="Select cycles"
                className="border-custom-teal/40 hover:border-custom-teal focus:border-custom-teal"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-custom-dark-teal">Assigned To</label>
              <MultiSelect 
                options={assignedToOptions}
                selected={selectedAssignees}
                onChange={setSelectedAssignees}
                placeholder="Select assignees"
                className="border-custom-teal/40 hover:border-custom-teal focus:border-custom-teal"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={handleSearch} className="bg-custom-orange hover:bg-custom-orange/90 text-white font-medium shadow-sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
        
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
