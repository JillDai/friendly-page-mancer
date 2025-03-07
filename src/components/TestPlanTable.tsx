
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface TestPlan {
  id: string;
  status: 'New' | 'Active' | 'Closed';
  title: string;
  progress: number;
  caseCount: number;
  assignedTo: string;
}

interface CycleData {
  id: string;
  name: string;
  dateRange: string;
  plans: TestPlan[];
}

interface SprintData {
  id: string;
  name: string;
  dateRange: string;
  cycles: CycleData[];
}

const testData: SprintData[] = [
  {
    id: '1',
    name: 'Sprint 01',
    dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
    cycles: [
      {
        id: '1-1',
        name: 'Cycle 01-01',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_01', progress: 26, caseCount: 3, assignedTo: 'Assigned to' },
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_02', progress: 46, caseCount: 5, assignedTo: 'Assigned to' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_03', progress: 36, caseCount: 6, assignedTo: 'Assigned to' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_04', progress: 57, caseCount: 3, assignedTo: 'Assigned to' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_05', progress: 68, caseCount: 7, assignedTo: 'Assigned to' }
        ]
      },
      {
        id: '1-2',
        name: 'Cycle 01-02',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_06', progress: 26, caseCount: 3, assignedTo: 'Assigned to' },
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_07', progress: 46, caseCount: 5, assignedTo: 'Assigned to' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_08', progress: 36, caseCount: 6, assignedTo: 'Assigned to' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_09', progress: 57, caseCount: 3, assignedTo: 'Assigned to' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_10', progress: 68, caseCount: 7, assignedTo: 'Assigned to' }
        ]
      }
    ]
  }
];

const TestPlanTable = () => {
  return (
    <div>
      <table className="w-full border-collapse">
        <thead className="bg-black text-white">
          <tr>
            <th className="py-3 px-4 text-left">Release</th>
            <th className="py-3 px-4 text-left">Cycle</th>
            <th className="py-3 px-4 text-left">Test Plan</th>
            <th className="py-3 px-4 text-right w-20">%</th>
            <th className="py-3 px-4 text-center w-12">#</th>
            <th className="py-3 px-4 text-left">Owner</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((sprint) => 
            sprint.cycles.flatMap((cycle, cIndex) => 
              cycle.plans.map((plan, pIndex) => (
                <tr key={`${cycle.id}-${pIndex}`} className="border-b border-gray-200">
                  {pIndex === 0 && cIndex === 0 ? (
                    <td 
                      className="py-3 px-4 align-top" 
                      rowSpan={sprint.cycles.reduce((acc, c) => acc + c.plans.length, 0)}
                    >
                      <div className="font-medium">{sprint.name}</div>
                      <div className="text-gray-500 text-sm mt-1">{sprint.dateRange}</div>
                      <Button variant="outline" className="mt-2 text-sm py-1 px-3 h-auto border-black">
                        檢視
                      </Button>
                    </td>
                  ) : null}
                  
                  {pIndex === 0 ? (
                    <td 
                      className="py-3 px-4 align-top" 
                      rowSpan={cycle.plans.length}
                    >
                      <div className="font-medium">{cycle.name}</div>
                      <div className="text-gray-500 text-sm mt-1">{cycle.dateRange}</div>
                      <Button variant="outline" className="mt-2 text-sm py-1 px-3 h-auto border-black">
                        檢視
                      </Button>
                    </td>
                  ) : null}
                  
                  <td className="py-3 px-4">
                    <div className="text-blue-600">{plan.id}</div>
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "px-2 py-0.5 text-xs rounded-sm",
                        plan.status === 'New' && "bg-blue-100 text-blue-800",
                        plan.status === 'Active' && "bg-green-100 text-green-800",
                        plan.status === 'Closed' && "bg-gray-100 text-gray-800"
                      )}>
                        {plan.status}
                      </span>
                      <span>{plan.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className={cn(
                      plan.progress < 30 && "text-red-600",
                      plan.progress >= 30 && plan.progress < 70 && "text-blue-600",
                      plan.progress >= 70 && "text-green-600"
                    )}>
                      {plan.progress}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {plan.caseCount}
                  </td>
                  <td className="py-3 px-4">
                    {plan.assignedTo}
                  </td>
                </tr>
              ))
            )
          )}
        </tbody>
        <tfoot className="bg-gray-100">
          <tr>
            <td className="py-2 px-4 text-center">1</td>
            <td className="py-2 px-4 text-center">2</td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4 text-center">9</td>
            <td className="py-2 px-4"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TestPlanTable;
