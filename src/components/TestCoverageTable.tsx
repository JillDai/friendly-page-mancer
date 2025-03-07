
import React from 'react';
import { cn } from '@/lib/utils';
import { FileText, FileCode } from 'lucide-react';

interface TestCaseTemplate {
  id: string;
  status: 'ACTIVE';
  title: string;
}

interface Requirement {
  id: string;
  status: 'TO DO' | 'IN PROGRESS' | 'DONE';
  title: string;
  release?: string;
  testCaseTemplates: TestCaseTemplate[];
}

interface TestCoverageTableProps {
  filteredReleases?: string[];
}

const requirementsData: Requirement[] = [
  {
    id: 'TCTF-607',
    status: 'TO DO',
    title: 'Pre-SIT(Global契約)_Story_1',
    release: 'Release 01',
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
      },
      {
        id: 'TCTF-159',
        status: 'ACTIVE',
        title: '定存解約'
      },
      {
        id: 'TCTF-158',
        status: 'ACTIVE',
        title: '定存盤戶-聯別(其他)'
      },
      {
        id: 'TCTF-157',
        status: 'ACTIVE',
        title: '定存盤戶-聯別(不動)'
      }
    ]
  },
  {
    id: 'TCTF-640',
    status: 'TO DO',
    title: 'Story_0825',
    release: 'Release 02',
    testCaseTemplates: [
      {
        id: 'TCTF-641',
        status: 'ACTIVE',
        title: 'Test 0825'
      },
      {
        id: 'TCTF-632',
        status: 'ACTIVE',
        title: '0101:登入頁_S01_學用者輸入帳號密碼，成功登入系統'
      },
      {
        id: 'TCTF-631',
        status: 'ACTIVE',
        title: '0101:登入頁_S01_學用者輸入帳號密碼，成功登入系統'
      },
      {
        id: 'TCTF-630',
        status: 'ACTIVE',
        title: '0101:登入頁_S01_學用者輸入帳號密碼，成功登入系統'
      },
      {
        id: 'TCTF-629',
        status: 'ACTIVE',
        title: '0101:登入頁_S01_學用者輸入帳號密碼，成功登入系統'
      }
    ]
  }
];

const TestCoverageTable: React.FC<TestCoverageTableProps> = ({ 
  filteredReleases = [] 
}) => {
  
  const filteredData = requirementsData.filter(item => {
    if (filteredReleases.length === 0) {
      return true;
    }
    
    return item.release && filteredReleases.includes(item.release);
  });

  const totalRequirements = filteredData.length;
  const coveredRequirements = filteredData.filter(item => item.testCaseTemplates.length > 0).length;
  const coveragePercentage = totalRequirements > 0 ? Math.round((coveredRequirements / totalRequirements) * 100) : 0;

  if (filteredData.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No matching records found. Please adjust your filter criteria.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-custom-dark-teal mb-4">Summary</h3>
        
        <div className="flex gap-12 mb-6">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{totalRequirements}</div>
            <div className="text-sm text-gray-600">Requirements</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-green-700">{coveredRequirements}</div>
            <div className="text-sm text-gray-600">Covered</div>
          </div>
        </div>
        
        <div className="mb-2">
          <span className="font-medium">Coverage level - </span>
          <span className="text-green-700">{coveragePercentage}% covered</span>
        </div>
        
        <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
            style={{ width: `${coveragePercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-end text-xs text-green-700">
          {coveragePercentage}%
        </div>
      </div>
      
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 text-left font-medium w-1/2 text-custom-dark-teal">Requirements</th>
            <th className="py-3 px-4 text-left font-medium w-1/2 text-custom-dark-teal">Test Case Templates</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((requirement) => (
            <React.Fragment key={requirement.id}>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 align-top" rowSpan={Math.max(requirement.testCaseTemplates.length, 1)}>
                  <div className="flex gap-2 items-start">
                    <div className="min-w-6 mt-0.5">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-emerald-500 text-white">
                        <FileText size={14} />
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-custom-teal">{requirement.id}</div>
                      <div className="flex gap-2 items-center mt-1">
                        <span className="px-2 py-0.5 text-xs rounded-full font-medium bg-gray-200 text-gray-700">
                          {requirement.status}
                        </span>
                      </div>
                      <div className="mt-2 text-sm">{requirement.title}</div>
                    </div>
                  </div>
                </td>

                {requirement.testCaseTemplates.length > 0 ? (
                  <td className="py-3 px-4 align-top">
                    <div className="flex gap-2 items-start">
                      <div className="min-w-6 mt-0.5">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-blue-500 text-white">
                          <FileCode size={14} />
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-custom-teal">{requirement.testCaseTemplates[0].id}</div>
                        <div className="flex gap-2 items-center mt-1">
                          <span className="px-2 py-0.5 text-xs rounded-full font-medium bg-blue-600 text-white">
                            {requirement.testCaseTemplates[0].status}
                          </span>
                        </div>
                        <div className="mt-2 text-sm">{requirement.testCaseTemplates[0].title}</div>
                      </div>
                    </div>
                  </td>
                ) : (
                  <td className="py-3 px-4"></td>
                )}
              </tr>

              {requirement.testCaseTemplates.slice(1).map((template, tIndex) => (
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
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestCoverageTable;
