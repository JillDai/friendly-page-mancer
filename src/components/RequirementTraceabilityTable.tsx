import React from 'react';
import { FileText, FileCode, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TraceabilityItem {
  id: string;
  requirement: {
    id: string;
    status: 'TO DO' | 'IN PROGRESS' | 'DONE';
    title: string;
  };
  testCaseTemplates: Array<{
    id: string;
    status: 'ACTIVE';
    title: string;
  }>;
  testCases: Array<{
    id: string;
  }>;
  executions: Array<{
    id: string;
    plan: string;
    status: 'Fail' | 'Open' | 'Pass';
  }>;
  defects: Array<{
    id: string;
    status: 'CLOSED' | 'OPEN';
    title: string;
    severity: 'Medium' | 'High' | 'Low';
  }>;
}

interface RequirementTraceabilityTableProps {
  filteredRequirements?: string[];
  filteredTestCases?: string[];
}

const traceabilityData: TraceabilityItem[] = [
  {
    id: '1',
    requirement: {
      id: 'TCTF-607',
      status: 'TO DO',
      title: 'Pre-SIT(Global契約)_Story_1'
    },
    testCaseTemplates: [
      {
        id: 'TCTF-623',
        status: 'ACTIVE',
        title: 'TCT 0825'
      },
      {
        id: 'TCTF-612',
        status: 'ACTIVE',
        title: 'TCT5'
      },
      {
        id: 'TCTF-611',
        status: 'ACTIVE',
        title: 'TCT4'
      },
      {
        id: 'TCTF-610',
        status: 'ACTIVE',
        title: 'TCT3'
      },
      {
        id: 'TCTF-609',
        status: 'ACTIVE',
        title: 'TCT2'
      },
      {
        id: 'TCTF-608',
        status: 'ACTIVE',
        title: 'TCT1'
      }
    ],
    testCases: [
      { id: 'TCTF-625' },
      { id: 'TCTF-627' },
      { id: 'TCTF-619' },
      { id: 'TCTF-622' },
      { id: 'TCTF-621' },
      { id: 'TCTF-620' },
      { id: 'TCTF-618' }
    ],
    executions: [
      { id: '1', plan: 'TCTF_PL', status: 'Fail' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' }
    ],
    defects: []
  },
  {
    id: '2',
    requirement: {
      id: 'TCTF-159',
      status: 'TO DO',
      title: '定存解約'
    },
    testCaseTemplates: [
      {
        id: 'TCTF-159',
        status: 'ACTIVE',
        title: '定存解約'
      }
    ],
    testCases: [
      { id: 'TCTF-495' },
      { id: 'TCTF-461' },
      { id: 'TCTF-340' },
      { id: 'TCTF-308' },
      { id: 'TCTF-296' },
      { id: 'TCTF-285' },
      { id: 'TCTF-238' }
    ],
    executions: [
      { id: '1', plan: 'TCTF_PL', status: 'Fail' },
      { id: '1', plan: 'TCTF_PL', status: 'Pass' },
      { id: '1', plan: 'TCTF_PL', status: 'Fail' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' }
    ],
    defects: []
  },
  {
    id: '3',
    requirement: {
      id: 'TCTF-158',
      status: 'TO DO',
      title: '定存盤戶-聯別(其他)'
    },
    testCaseTemplates: [
      {
        id: 'TCTF-158',
        status: 'ACTIVE',
        title: '定存盤戶-聯別(其他)'
      }
    ],
    testCases: [
      { id: 'TCTF-531' },
      { id: 'TCTF-349' },
      { id: 'TCTF-346' },
      { id: 'TCTF-307' }
    ],
    executions: [
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' },
      { id: '1', plan: 'TCTF_PL', status: 'Open' }
    ],
    defects: [
      { 
        id: 'TCTF-352', 
        status: 'CLOSED', 
        title: 'asdasd',
        severity: 'Medium'
      }
    ]
  }
];

const RequirementTraceabilityTable: React.FC<RequirementTraceabilityTableProps> = ({ 
  filteredRequirements = [], 
  filteredTestCases = [] 
}) => {
  
  const filteredData = traceabilityData.filter(item => {
    if (filteredRequirements.length === 0 && filteredTestCases.length === 0) {
      return true;
    }
    
    const matchesRequirement = filteredRequirements.length === 0 || 
      filteredRequirements.includes(item.requirement.id);
    
    const hasMatchingTestCase = filteredTestCases.length === 0 || 
      item.testCases.some(tc => filteredTestCases.includes(tc.id));
    
    return matchesRequirement && hasMatchingTestCase;
  });

  if (filteredData.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No matching records found. Please adjust your filter criteria.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-[#357874] text-white">
          <tr>
            <th className="py-3 px-4 text-left font-medium w-1/5">Requirements</th>
            <th className="py-3 px-4 text-left font-medium w-1/5">Test Case Templates</th>
            <th className="py-3 px-4 text-left font-medium w-1/5">Test Cases</th>
            <th className="py-3 px-4 text-left font-medium w-1/5">Executions</th>
            <th className="py-3 px-4 text-left font-medium w-1/5">Defects</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 align-top" rowSpan={Math.max(
                  item.testCaseTemplates.length,
                  item.testCases.length,
                  item.executions.length,
                  item.defects.length,
                  1
                )}>
                  <div className="flex gap-2 items-start">
                    <div className="min-w-6 mt-0.5">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-emerald-500 text-white">
                        <FileText size={14} />
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-custom-teal">{item.requirement.id}</div>
                      <div className="flex gap-2 items-center mt-1">
                        <span className="px-2 py-0.5 text-xs rounded-full font-medium bg-gray-200 text-gray-700">
                          {item.requirement.status}
                        </span>
                      </div>
                      <div className="mt-2 text-sm">{item.requirement.title}</div>
                    </div>
                  </div>
                </td>

                {item.testCaseTemplates.length > 0 ? (
                  <td className="py-3 px-4 align-top">
                    <div className="flex gap-2 items-start">
                      <div className="min-w-6 mt-0.5">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-blue-500 text-white">
                          <FileCode size={14} />
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-custom-teal">{item.testCaseTemplates[0].id}</div>
                        <div className="flex gap-2 items-center mt-1">
                          <span className="px-2 py-0.5 text-xs rounded-full font-medium bg-blue-600 text-white">
                            {item.testCaseTemplates[0].status}
                          </span>
                        </div>
                        <div className="mt-2 text-sm">{item.testCaseTemplates[0].title}</div>
                      </div>
                    </div>
                  </td>
                ) : (
                  <td className="py-3 px-4"></td>
                )}

                {item.testCases.length > 0 ? (
                  <td className="py-3 px-4 align-top">
                    <div className="flex gap-2 items-start">
                      <div className="min-w-6 mt-0.5">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-cyan-500 text-white">
                          <FileText size={14} />
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-custom-teal">{item.testCases[0].id}</div>
                      </div>
                    </div>
                  </td>
                ) : (
                  <td className="py-3 px-4"></td>
                )}

                {item.executions.length > 0 ? (
                  <td className="py-3 px-4 align-top">
                    <div>
                      <div className="mb-1">Execution: {item.executions[0].id}</div>
                      <div className="text-sm text-gray-600">{item.executions[0].plan}</div>
                      <div className="mt-2">
                        <span className={cn(
                          "px-4 py-1 text-xs rounded-full font-medium text-white",
                          item.executions[0].status === 'Fail' && "bg-red-500",
                          item.executions[0].status === 'Open' && "bg-gray-400",
                          item.executions[0].status === 'Pass' && "bg-green-500"
                        )}>
                          {item.executions[0].status}
                        </span>
                      </div>
                    </div>
                  </td>
                ) : (
                  <td className="py-3 px-4"></td>
                )}

                {item.defects.length > 0 ? (
                  <td className="py-3 px-4 align-top">
                    <div className="flex gap-2 items-start">
                      <div className="min-w-6 mt-0.5">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-red-500 text-white">
                          <AlertCircle size={14} />
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-custom-teal">{item.defects[0].id}</div>
                        <div className="flex gap-2 items-center mt-1">
                          <span className={cn(
                            "px-2 py-0.5 text-xs rounded-full font-medium text-white",
                            item.defects[0].status === 'CLOSED' && "bg-green-600",
                            item.defects[0].status === 'OPEN' && "bg-red-500"
                          )}>
                            {item.defects[0].status}
                          </span>
                        </div>
                        <div className="mt-2 text-sm">{item.defects[0].title}</div>
                        <div className="mt-1 flex items-center">
                          <span className="h-2 w-2 bg-yellow-500 mr-1.5"></span>
                          <span className="text-sm text-gray-600">{item.defects[0].severity}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                ) : (
                  <td className="py-3 px-4"></td>
                )}
              </tr>

              {item.testCaseTemplates.slice(1).map((template, tIndex) => (
                <tr key={`template-${tIndex}`} className="border-b border-gray-200">
                  <td className="py-3 px-4 align-top">
                    <div className="flex gap-2 items-start">
                      <div className="min-w-6 mt-0.5">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-blue-500 text-white">
                          <FileCode size={14} />
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-custom-teal">{template.id}</div>
                        <div className="flex gap-2 items-center mt-1">
                          <span className="px-2 py-0.5 text-xs rounded-full font-medium bg-blue-600 text-white">
                            {template.status}
                          </span>
                        </div>
                        <div className="mt-2 text-sm">{template.title}</div>
                      </div>
                    </div>
                  </td>

                  {item.testCases[tIndex + 1] ? (
                    <td className="py-3 px-4 align-top">
                      <div className="flex gap-2 items-start">
                        <div className="min-w-6 mt-0.5">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-cyan-500 text-white">
                            <FileText size={14} />
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-custom-teal">{item.testCases[tIndex + 1].id}</div>
                        </div>
                      </div>
                    </td>
                  ) : (
                    <td className="py-3 px-4"></td>
                  )}

                  {item.executions[tIndex + 1] ? (
                    <td className="py-3 px-4 align-top">
                      <div>
                        <div className="mb-1">Execution: {item.executions[tIndex + 1].id}</div>
                        <div className="text-sm text-gray-600">{item.executions[tIndex + 1].plan}</div>
                        <div className="mt-2">
                          <span className={cn(
                            "px-4 py-1 text-xs rounded-full font-medium text-white",
                            item.executions[tIndex + 1].status === 'Fail' && "bg-red-500",
                            item.executions[tIndex + 1].status === 'Open' && "bg-gray-400",
                            item.executions[tIndex + 1].status === 'Pass' && "bg-green-500"
                          )}>
                            {item.executions[tIndex + 1].status}
                          </span>
                        </div>
                      </div>
                    </td>
                  ) : (
                    <td className="py-3 px-4"></td>
                  )}

                  {item.defects[tIndex + 1] ? (
                    <td className="py-3 px-4 align-top">
                      <div className="flex gap-2 items-start">
                        <div className="min-w-6 mt-0.5">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-red-500 text-white">
                            <AlertCircle size={14} />
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-custom-teal">{item.defects[tIndex + 1].id}</div>
                          <div className="flex gap-2 items-center mt-1">
                            <span className={cn(
                              "px-2 py-0.5 text-xs rounded-full font-medium text-white",
                              item.defects[tIndex + 1].status === 'CLOSED' && "bg-green-600",
                              item.defects[tIndex + 1].status === 'OPEN' && "bg-red-500"
                            )}>
                              {item.defects[tIndex + 1].status}
                            </span>
                          </div>
                          <div className="mt-2 text-sm">{item.defects[tIndex + 1].title}</div>
                          <div className="mt-1 flex items-center">
                            <span className="h-2 w-2 bg-yellow-500 mr-1.5"></span>
                            <span className="text-sm text-gray-600">{item.defects[tIndex + 1].severity}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                  ) : (
                    <td className="py-3 px-4"></td>
                  )}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequirementTraceabilityTable;
