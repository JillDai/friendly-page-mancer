
import React from "react";
import FilterToolbar from "./FilterToolbar";
import DonutChart from "./DonutChart";
import StatusTable from "./StatusTable";

const DashboardOngoing: React.FC = () => {
  // Mock data for charts
  const testExecutionData = [
    { name: "Pass", value: 375, color: "#7CB57C" },
    { name: "Failed", value: 130, color: "#E88080" },
  ];

  const testCaseByStageData = [
    { name: "設計中", value: 88, color: "#7CB57C" },
    { name: "進行中", value: 242, color: "#FFBE7D" },
  ];

  const testCaseByResultData = [
    { name: "已執行", value: 1372, color: "#7CB57C" },
    { name: "待執行", value: 200, color: "#FF9999" },
  ];

  // Mock data for tables
  const releaseStatusHeaders = ["Release", "Active", "Pass", "Failure", "Not Run", "Total"];
  const releaseStatusRows = [
    { id: "1", columns: ["Release 01-Sprint 01", 244, 170, 10, 64, 244] },
    { id: "2", columns: ["Release 01-Sprint 02", 152, 89, 12, 51, 152] },
    { id: "3", columns: ["Release 02-Sprint 01", 109, 52, 18, 39, 109] },
    { id: "total", columns: ["Total", 505, 311, 40, 154, 505] },
  ];

  const cycleStatusHeaders = ["Release", "Cycle", "執行中/待執行", "已執行/通過", "執行進度", "測試範圍", "測試計劃", "計劃/總數", "進度/執行", "執行/完成", "完成/落後", "未達標與否"];
  const cycleStatusRows = [
    { id: "1", columns: ["Release 01-Sprint 01", "Release 01-Cycle 01", "Y/Y/Y/MM/DD", "Y/Y/Y/MM/DD", "74%", "124%", "73.68% (14/19) SIT", "99.33% (150/151) UAT", "96.67%", "OK"] },
    { id: "2", columns: ["Release 01-Sprint 02", "Release 01-Cycle 02", "Y/Y/Y/MM/DD", "Y/Y/Y/MM/DD", "62%", "121%", "73.68% (14/19) SIT", "82.22% (180/219) UAT", "90.25%", "OK"] },
    { id: "3", columns: ["Release 02-Sprint 01", "Release 02-Cycle 01", "Y/Y/Y/MM/DD", "Y/Y/Y/MM/DD", "46%", "86%", "73.68% (14/19) SIT", "85.95% (585/681) UAT", "90.22%", "OK"] },
  ];

  const testPlanStatusHeaders = ["Cycle", "Test Plan", "Start Date", "End Date", "Assigned To", "Plan/Total", "測試範圍", "計劃/總數", "執行/完成", "完成/落後", "未達標與否"];
  const testPlanStatusRows = [
    { id: "1", columns: ["Release 01-Cycle 01", "Test Plan Title", "Y/Y/Y/MM/DD", "Y/Y/Y/MM/DD", "SA", "18", "44", "99.58% (239/240)", "78% (173/221)", "<90.56%", "OK"] },
  ];

  const defectDistributionHeaders = ["Release", "Cycle", "總計", "已修正%", "待修正%"];
  const defectDistributionRows = [
    { id: "1", columns: ["Release 01-Sprint 01", "Release 01-Cycle 01", 230, "85%", "15%"] },
    { id: "2", columns: ["Release 01-Sprint 02", "Release 01-Cycle 02", 167, "96%", "4%"] },
    { id: "3", columns: ["Release 02-Sprint 01", "Release 02-Cycle 01", 7, "86%", "14%"] },
  ];

  const defectPriorityHeaders = ["Priority", "Total", "1. Critical", "2. High", "3. Medium", "4. Low"];
  const defectPriorityRows = [
    { id: "1", columns: ["High", 448, 193, "43.08%", 24, "5.37%", 79, "17.59%", 201, "44.87%", 62, "13.84%"] },
    { id: "2", columns: ["Medium", 25, 12, "48%", 3, "12%", 22, "88%", 6, "22%", 8, "32%"] },
    { id: "3", columns: ["Low", 9, 3, "33%", 1, "11%", 0, "0%", 5, "55%", 0, "0%"] },
    { id: "4", columns: ["Total", 482, 208, "43.15%", 28, "5.81%", 101, "20.95%", 212, "43.98%", 70, "14.52%"] },
  ];

  const defectTypeHeaders = ["Category", "Total", "(1) 需求", "(2) 設計", "(3) 程式", "(4) 環境/組態/資料"];
  const defectTypeRows = [
    { id: "1", columns: ["1. High", 9, 2, 1, 5, 1] },
    { id: "2", columns: ["2. Medium", 0, 0, 0, 0, 0] },
    { id: "3", columns: ["3. Low", 0, 0, 0, 0, 0] },
    { id: "4", columns: ["Total", 9, 2, 1, 5, 1] },
  ];

  const defectEntryHeaders = ["Severity", "Total", "(1) 需求", "(2) 設計", "(3) 程式", "(4) 環境/組態/資料"];
  const defectEntryRows = [
    { id: "1", columns: ["1. Critical", 0, 0, 0, 0, 0] },
    { id: "2", columns: ["2. High", 0, 0, 0, 0, 0] },
    { id: "3", columns: ["3. Medium", 0, 0, 0, 0, 0] },
    { id: "4", columns: ["4. Low", 0, 0, 0, 0, 0] },
    { id: "5", columns: ["Total", 0, 0, 0, 0, 0] },
  ];

  // New additional tables
  const defectDeviationHeaders = ["Release", "Cycle", "Planned", "Actual", "Deviation %"];
  const defectDeviationRows = [
    { id: "1", columns: ["Release 01-Sprint 01", "Release 01-Cycle 01", 200, 230, "15%"] },
    { id: "2", columns: ["Release 01-Sprint 02", "Release 01-Cycle 02", 180, 167, "-7.2%"] },
    { id: "3", columns: ["Release 02-Sprint 01", "Release 02-Cycle 01", 10, 7, "-30%"] },
  ];

  const defectFixRateHeaders = ["Release", "Cycle", "Total", "On-time Fix", "Fix Rate %"];
  const defectFixRateRows = [
    { id: "1", columns: ["Release 01-Sprint 01", "Release 01-Cycle 01", 230, 195, "84.8%"] },
    { id: "2", columns: ["Release 01-Sprint 02", "Release 01-Cycle 02", 167, 159, "95.2%"] },
    { id: "3", columns: ["Release 02-Sprint 01", "Release 02-Cycle 01", 7, 6, "85.7%"] },
  ];

  const openDefectsHeaders = ["ID", "Title", "Priority", "Severity", "Status", "Assigned To", "Due Date"];
  const openDefectsRows = [
    { id: "1", columns: ["DEF-001", "Login failure on mobile devices", "High", "2", "In Progress", "John Doe", "2025-04-15"] },
    { id: "2", columns: ["DEF-002", "Data not saving in profile", "Medium", "3", "Open", "Jane Smith", "2025-04-18"] },
    { id: "3", columns: ["DEF-003", "UI alignment issues in reports", "Low", "4", "In Review", "Alex Johnson", "2025-04-20"] },
  ];

  const irStatusHeaders = ["Status", "Count", "Percentage"];
  const irStatusRows = [
    { id: "1", columns: ["Open", 28, "35%"] },
    { id: "2", columns: ["In Progress", 15, "18.75%"] },
    { id: "3", columns: ["Resolved", 20, "25%"] },
    { id: "4", columns: ["Closed", 17, "21.25%"] },
    { id: "5", columns: ["Total", 80, "100%"] },
  ];

  const irSystemHeaders = ["System", "Count", "Percentage"];
  const irSystemRows = [
    { id: "1", columns: ["Frontend", 32, "40%"] },
    { id: "2", columns: ["Backend", 25, "31.25%"] },
    { id: "3", columns: ["Database", 14, "17.5%"] },
    { id: "4", columns: ["Integration", 9, "11.25%"] },
    { id: "5", columns: ["Total", 80, "100%"] },
  ];

  const irInjectionHeaders = ["Phase", "Count", "Percentage"];
  const irInjectionRows = [
    { id: "1", columns: ["Requirements", 12, "15%"] },
    { id: "2", columns: ["Design", 18, "22.5%"] },
    { id: "3", columns: ["Development", 35, "43.75%"] },
    { id: "4", columns: ["Testing", 15, "18.75%"] },
    { id: "5", columns: ["Total", 80, "100%"] },
  ];

  const handleSearch = () => {
    console.log("Search clicked");
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <FilterToolbar onSearch={handleSearch} />
      </div>
      
      {/* Release Status Table */}
      <div className="mb-8">
        <StatusTable 
          title="測試案例結果分佈 by Release" 
          headers={releaseStatusHeaders}
          rows={releaseStatusRows}
        />
      </div>
      
      {/* Cycle Status Table */}
      <div className="mb-8">
        <StatusTable 
          title="測試案例執行進度 by Release/Cycle" 
          headers={cycleStatusHeaders}
          rows={cycleStatusRows}
        />
      </div>
      
      {/* Test Plan Status Table */}
      <div className="mb-8">
        <StatusTable 
          title="測試案例執行進度 by Test Plan" 
          headers={testPlanStatusHeaders}
          rows={testPlanStatusRows}
        />
      </div>
      
      {/* Defect Distribution Table */}
      <div className="mb-8">
        <StatusTable 
          title="正負向案例分佈 by Cycle" 
          headers={defectDistributionHeaders}
          rows={defectDistributionRows}
        />
      </div>
      
      {/* Defect Priority Table */}
      <div className="mb-8">
        <StatusTable 
          title="缺陷總數統計" 
          headers={defectPriorityHeaders}
          rows={defectPriorityRows}
        />
      </div>
      
      {/* Defect Type Table */}
      <div className="mb-8">
        <StatusTable 
          title="缺陷分析 by 種類" 
          headers={defectTypeHeaders}
          rows={defectTypeRows}
        />
      </div>
      
      {/* Defect System Analysis Table */}
      <div className="mb-8">
        <StatusTable 
          title="缺陷分析 by 系統" 
          headers={defectEntryHeaders}
          rows={defectEntryRows}
        />
      </div>
      
      {/* Defect Entry Phase Table */}
      <div className="mb-8">
        <StatusTable 
          title="缺陷進入階段" 
          headers={defectEntryHeaders}
          rows={defectEntryRows}
        />
      </div>
      
      {/* New Tables */}
      <div className="mb-8">
        <StatusTable 
          title="缺陷偏差率" 
          headers={defectDeviationHeaders}
          rows={defectDeviationRows}
        />
      </div>
      
      <div className="mb-8">
        <StatusTable 
          title="缺陷準時修復率" 
          headers={defectFixRateHeaders}
          rows={defectFixRateRows}
        />
      </div>
      
      {/* Charts Row - Moved here between fix rate and open defects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DonutChart 
          title="測試執行狀態" 
          data={testExecutionData}
          centerText="505"
        />
        <DonutChart 
          title="測試案例依階段劃分比重" 
          data={testCaseByStageData}
          centerText="330"
        />
        <DonutChart 
          title="測試案例依結果劃分比重" 
          data={testCaseByResultData}
          centerText="1572"
        />
      </div>
      
      <div className="mb-8">
        <StatusTable 
          title="未關閉缺陷清單" 
          headers={openDefectsHeaders}
          rows={openDefectsRows}
        />
      </div>
      
      <div className="mb-8">
        <StatusTable 
          title="IR 分佈 By 狀態" 
          headers={irStatusHeaders}
          rows={irStatusRows}
        />
      </div>
      
      <div className="mb-8">
        <StatusTable 
          title="IR 分佈 By 系統" 
          headers={irSystemHeaders}
          rows={irSystemRows}
        />
      </div>
      
      <div className="mb-8">
        <StatusTable 
          title="IR 注入階段" 
          headers={irInjectionHeaders}
          rows={irInjectionRows}
        />
      </div>
    </div>
  );
};

export default DashboardOngoing;
