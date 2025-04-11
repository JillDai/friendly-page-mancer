
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import DashboardOngoing from '../../components/dashboard/DashboardOngoing';

const DashboardOngoingTab: React.FC = () => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <DashboardOngoing />
      </CardContent>
    </Card>
  );
};

export default DashboardOngoingTab;
