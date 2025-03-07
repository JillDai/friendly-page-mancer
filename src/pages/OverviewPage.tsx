
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
import TestPlanTable from '@/components/TestPlanTable';
import { ChevronDown } from 'lucide-react';

const OverviewPage = () => {
  const [activeArea, setActiveArea] = useState("01");
  
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
