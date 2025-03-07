
import React from 'react';
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

interface RequirementsTableProps {
  filteredData: Requirement[];
}

const RequirementsTable: React.FC<RequirementsTableProps> = ({ filteredData }) => {
  return (
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
  );
};

export default RequirementsTable;
