
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const DashboardCompleteTab: React.FC = () => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-0">
        <div className="py-8 text-center text-gray-500">
          Dashboard Complete content goes here
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCompleteTab;
