
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200 mb-8">
      <Tabs value={activeTab} onValueChange={onTabChange}>
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
      </Tabs>
    </div>
  );
};

export default TabNavigation;
