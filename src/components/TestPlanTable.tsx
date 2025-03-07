
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

interface ReleaseData {
  id: string;
  name: string;
  dateRange: string;
  cycles: CycleData[];
}

const testData: ReleaseData[] = [
  {
    id: '1',
    name: 'Release 01',
    dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
    cycles: [
      {
        id: '1-1',
        name: 'Cycle 01',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_01', progress: 26, caseCount: 3, assignedTo: 'John Doe' },
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_02', progress: 46, caseCount: 5, assignedTo: 'Emma Wilson' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_03', progress: 36, caseCount: 6, assignedTo: 'Michael Chen' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_04', progress: 57, caseCount: 3, assignedTo: 'John Doe' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_05', progress: 68, caseCount: 7, assignedTo: 'Emma Wilson' }
        ]
      },
      {
        id: '1-2',
        name: 'Cycle 02',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_06', progress: 26, caseCount: 3, assignedTo: 'Michael Chen' },
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_07', progress: 46, caseCount: 5, assignedTo: 'John Doe' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_08', progress: 36, caseCount: 6, assignedTo: 'Emma Wilson' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_09', progress: 57, caseCount: 3, assignedTo: 'Michael Chen' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_10', progress: 68, caseCount: 7, assignedTo: 'John Doe' }
        ]
      },
      {
        id: '1-3',
        name: 'Cycle 03',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_11', progress: 26, caseCount: 3, assignedTo: 'Emma Wilson' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_12', progress: 46, caseCount: 5, assignedTo: 'Michael Chen' }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Release 02',
    dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
    cycles: [
      {
        id: '2-1',
        name: 'Cycle 01',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_13', progress: 26, caseCount: 3, assignedTo: 'John Doe' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_14', progress: 46, caseCount: 5, assignedTo: 'Emma Wilson' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_15', progress: 36, caseCount: 6, assignedTo: 'Michael Chen' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_16', progress: 57, caseCount: 3, assignedTo: 'John Doe' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_17', progress: 68, caseCount: 7, assignedTo: 'Emma Wilson' }
        ]
      },
      {
        id: '2-2',
        name: 'Cycle 02',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_18', progress: 26, caseCount: 3, assignedTo: 'Michael Chen' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_19', progress: 46, caseCount: 5, assignedTo: 'John Doe' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_20', progress: 36, caseCount: 6, assignedTo: 'Emma Wilson' },
          { id: 'Test Plan_ID', status: 'Closed', title: 'Test Plan Title_21', progress: 57, caseCount: 3, assignedTo: 'Michael Chen' }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Release 03',
    dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
    cycles: [
      {
        id: '3-1',
        name: 'Cycle 01',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_22', progress: 26, caseCount: 3, assignedTo: 'John Doe' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_23', progress: 46, caseCount: 5, assignedTo: 'Emma Wilson' }
        ]
      },
      {
        id: '3-2',
        name: 'Cycle 02',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_24', progress: 36, caseCount: 4, assignedTo: 'Michael Chen' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_25', progress: 52, caseCount: 6, assignedTo: 'John Doe' }
        ]
      },
      {
        id: '3-3',
        name: 'Cycle 03',
        dateRange: 'YYYY/MM/DD - YYYY/MM/DD',
        plans: [
          { id: 'Test Plan_ID', status: 'New', title: 'Test Plan Title_26', progress: 41, caseCount: 5, assignedTo: 'Emma Wilson' },
          { id: 'Test Plan_ID', status: 'Active', title: 'Test Plan Title_27', progress: 63, caseCount: 7, assignedTo: 'Michael Chen' }
        ]
      }
    ]
  }
];

interface TestPlanTableProps {
  filteredReleases?: string[];
  filteredCycles?: string[];
  filteredAssignees?: string[];
}

const TestPlanTable: React.FC<TestPlanTableProps> = ({ 
  filteredReleases = [],
  filteredCycles = [],
  filteredAssignees = []
}) => {
  // Filter the data based on selected filters
  const filterData = () => {
    let filtered = [...testData];
    
    // Filter by release
    if (filteredReleases.length > 0) {
      filtered = filtered.filter(release => 
        filteredReleases.some(selectedRelease => 
          selectedRelease.toLowerCase() === `release${release.id.padStart(2, '0')}` || 
          selectedRelease.toLowerCase() === `release${release.id}`
        )
      );
    }
    
    // If we have cycle filters, filter the cycles within each release
    if (filteredCycles.length > 0) {
      filtered = filtered.map(release => {
        return {
          ...release,
          cycles: release.cycles.filter(cycle => {
            // Extract the cycle number from the cycle name (Cycle XX)
            const cycleNumber = cycle.name.replace('Cycle ', '').padStart(2, '0');
            return filteredCycles.some(selectedCycle => 
              selectedCycle.toLowerCase().includes(cycleNumber.toLowerCase()) ||
              selectedCycle.toLowerCase().includes(cycle.id.split('-')[1])
            );
          })
        };
      }).filter(release => release.cycles.length > 0); // Remove releases with no matching cycles
    }
    
    // If we have assignee filters, filter the plans within each cycle
    if (filteredAssignees.length > 0) {
      filtered = filtered.map(release => {
        return {
          ...release,
          cycles: release.cycles.map(cycle => {
            return {
              ...cycle,
              plans: cycle.plans.filter(plan => {
                const assigneeName = plan.assignedTo;
                return filteredAssignees.some(selectedAssignee => {
                  // Convert the selectedAssignee (value) to a name for comparison
                  let assigneeForComparison = selectedAssignee;
                  if (selectedAssignee === 'john_doe') assigneeForComparison = 'John Doe';
                  if (selectedAssignee === 'emma_wilson') assigneeForComparison = 'Emma Wilson';
                  if (selectedAssignee === 'michael_chen') assigneeForComparison = 'Michael Chen';
                  
                  return assigneeName.toLowerCase().includes(assigneeForComparison.toLowerCase());
                });
              })
            };
          }).filter(cycle => cycle.plans.length > 0) // Remove cycles with no matching plans
        };
      }).filter(release => release.cycles.length > 0); // Remove releases with no matching cycles
    }
    
    return filtered;
  };

  const filteredData = filterData();
  
  return (
    <div className="rounded-md overflow-hidden shadow-sm">
      <table className="w-full border-collapse">
        <thead className="bg-[#357874] text-white">
          <tr>
            <th className="py-3 px-4 text-left font-medium">Release</th>
            <th className="py-3 px-4 text-left font-medium">Cycle</th>
            <th className="py-3 px-4 text-left font-medium">Test Plan</th>
            <th className="py-3 px-4 text-right w-20 font-medium">%</th>
            <th className="py-3 px-4 text-center w-12 font-medium">#</th>
            <th className="py-3 px-4 text-left font-medium">Owner</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((release) => 
            release.cycles.flatMap((cycle, cIndex) => 
              cycle.plans.map((plan, pIndex) => (
                <tr key={`${cycle.id}-${pIndex}`} className="border-b border-gray-200 hover:bg-custom-pale/30 transition-colors">
                  {pIndex === 0 && cIndex === 0 ? (
                    <td 
                      className="py-3 px-4 align-top" 
                      rowSpan={release.cycles.reduce((acc, c) => acc + c.plans.length, 0)}
                    >
                      <div className="font-medium">{release.name}</div>
                      <div className="text-gray-500 text-sm mt-1">{release.dateRange}</div>
                      <Button variant="outline" className="mt-2 text-sm py-1 px-3 h-auto border-custom-teal text-custom-teal hover:bg-custom-pale hover:text-custom-teal">
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
                      <Button variant="outline" className="mt-2 text-sm py-1 px-3 h-auto border-custom-teal text-custom-teal hover:bg-custom-pale hover:text-custom-teal">
                        檢視
                      </Button>
                    </td>
                  ) : null}
                  
                  <td className="py-3 px-4">
                    <div className="text-[#357874] font-medium">{plan.id}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={cn(
                        "px-2 py-0.5 text-xs rounded-full font-medium",
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
                      "font-medium",
                      plan.progress < 30 && "text-red-600",
                      plan.progress >= 30 && plan.progress < 70 && "text-blue-600",
                      plan.progress >= 70 && "text-green-600"
                    )}>
                      {plan.progress}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center font-medium">
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
        <tfoot className="bg-custom-pale/50">
          <tr>
            <td className="py-2 px-4 text-center">{filteredData.length}</td>
            <td className="py-2 px-4 text-center">
              {filteredData.reduce((acc, release) => acc + release.cycles.length, 0)}
            </td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4"></td>
            <td className="py-2 px-4 text-center font-medium">
              {filteredData.reduce((acc, release) => 
                acc + release.cycles.reduce((cycleAcc, cycle) => 
                  cycleAcc + cycle.plans.reduce((planAcc, plan) => planAcc + plan.caseCount, 0), 0), 0)}
            </td>
            <td className="py-2 px-4"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TestPlanTable;
