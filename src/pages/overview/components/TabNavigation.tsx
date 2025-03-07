
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200 mb-8">
      <TabsList className="w-full justify-start gap-6 rounded-none bg-transparent p-0">
        <TabsTrigger 
          value="overview" 
          className="border-b-2 data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent border-transparent"
          onClick={() => onTabChange("overview")}
        >
          Overview
        </TabsTrigger>
        <TabsTrigger 
          value="requirement-traceability" 
          className="border-b-2 border-transparent data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
          onClick={() => onTabChange("requirement-traceability")}
        >
          Requirement Traceability Report
        </TabsTrigger>
        <TabsTrigger 
          value="test-coverage" 
          className="border-b-2 border-transparent data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
          onClick={() => onTabChange("test-coverage")}
        >
          Requirement Test Coverage Report
        </TabsTrigger>
        <TabsTrigger 
          value="dashboard-ongoing" 
          className="border-b-2 border-transparent data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
          onClick={() => onTabChange("dashboard-ongoing")}
        >
          Dashboard Ongoing
        </TabsTrigger>
        <TabsTrigger 
          value="dashboard-complete" 
          className="border-b-2 border-transparent data-[state=active]:border-custom-teal data-[state=active]:text-custom-teal data-[state=active]:font-semibold data-[state=active]:shadow-none px-2 py-2 rounded-none bg-transparent"
          onClick={() => onTabChange("dashboard-complete")}
        >
          Dashboard Complete
        </TabsTrigger>
      </TabsList>
    </div>
  );
};

export default TabNavigation;
