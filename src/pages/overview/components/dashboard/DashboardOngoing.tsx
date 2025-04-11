
import React from "react";
import FilterToolbar from "./FilterToolbar";
import StatCard from "./StatCard";
import DonutChart from "./DonutChart";
import StatusTable from "./StatusTable";

const DashboardOngoing: React.FC = () => {
  // Mock data for charts
  const testExecutionData = [
    { name: "Passed", value: 375, color: "#7CB57C" },
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
    { id: "1", columns: ["Release 01", 244, 170, 10, 64, 244] },
    { id: "2", columns: ["Release 02", 152, 89, 12, 51, 152] },
    { id: "3", columns: ["Release 03", 109, 52, 18, 39, 109] },
  ];

  const cycleStatusHeaders = ["Cycle", "執行中/待執行", "已執行/通過", "緩衝項"];
  const cycleStatusRows = [
    { id: "1", columns: ["Release 01-Cycle 01", 345, 215, "72%"] },
    { id: "2", columns: ["Release 01-Cycle 02", 267, 78, "89%"] },
    { id: "3", columns: ["Release 02-Cycle 01", 7, 25, "70%"] },
  ];

  const testPlanStatusHeaders = ["Cycle", "Test Plan", "Start Date", "End Date", "Assigned To", "Plan/Total", "進度/執行", "進行中/待執行", "執行/完成", "完成/落後", "未達標與否"];
  const testPlanStatusRows = [
    { id: "1", columns: ["Release 01-Cycle 01", "Test Plan Title", "YYYY/MM/DD", "YYYY/MM/DD", "SA", "18", "44", "93.82%", "75%", "90.56%", "OK"] },
  ];

  const defectStatusHeaders = ["Release", "Cycle", "總計", "已修正%", "待修正%"];
  const defectStatusRows = [
    { id: "1", columns: ["Release 01-Cycle 01", "Total", 230, 85, "15%"] },
    { id: "2", columns: ["Release 01-Cycle 02", "Total", 167, 96, "4%"] },
  ];

  const defectPriorityHeaders = ["Priority", "Total", "1. Critical", "2. High", "3. Medium", "4. Low"];
  const defectPriorityRows = [
    { id: "1", columns: ["High", 9, 3, 1, 0, 5] },
    { id: "2", columns: ["Medium", 0, 0, 0, 0, 0] },
    { id: "3", columns: ["Low", 0, 0, 0, 0, 0] },
    { id: "4", columns: ["Total", 9, 3, 1, 0, 5] },
  ];

  const defectTypeHeaders = ["類別", "Total", "1. Critical", "2. High", "3. Medium", "4. Low"];
  const defectTypeRows = [
    { id: "1", columns: ["A", 9, 3, 1, 0, 5] },
    { id: "2", columns: ["B", 0, 0, 0, 0, 0] },
    { id: "3", columns: ["C", 0, 0, 0, 0, 0] },
    { id: "4", columns: ["Total", 9, 3, 1, 0, 5] },
  ];

  const defectEntryHeaders = ["Category", "Total", "(1) 需求", "(2) 設計", "(3) 程式", "(4) 環境/組態/資料"];
  const defectEntryRows = [
    { id: "1", columns: ["1. High", 0, 0, 0, 0, 0] },
    { id: "2", columns: ["2. Medium", 0, 0, 0, 0, 0] },
    { id: "3", columns: ["3. Medium low", 0, 0, 0, 0, 0] },
    { id: "4", columns: ["4. Low", 0, 0, 0, 0, 0] },
    { id: "5", columns: ["Total", 0, 0, 0, 0, 0] },
  ];

  const handleSearch = () => {
    console.log("Search clicked");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-custom-dark-teal mb-6">Dashboard OnGoing</h1>
      
      <FilterToolbar onSearch={handleSearch} />
      
      {/* Charts Row */}
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
      
      {/* Release Status Table */}
      <div className="mb-8">
        <StatusTable 
          title="測試專案執行情況 by Release" 
          headers={releaseStatusHeaders}
          rows={releaseStatusRows}
        />
      </div>
      
      {/* Cycle Status Table */}
      <div className="mb-8">
        <StatusTable 
          title="測試專案執行情況 by Release/Cycle" 
          headers={cycleStatusHeaders}
          rows={cycleStatusRows}
        />
      </div>
      
      {/* Test Plan Status Table */}
      <div className="mb-8">
        <StatusTable 
          title="測試專案執行情況 by Test Plan" 
          headers={testPlanStatusHeaders}
          rows={testPlanStatusRows}
        />
      </div>
      
      {/* Defect Status Table */}
      <div className="mb-8">
        <StatusTable 
          title="缺陷總數統計" 
          headers={defectStatusHeaders}
          rows={defectStatusRows}
        />
      </div>
      
      {/* Defect Priority Table */}
      <div className="mb-8">
        <StatusTable 
          title="缺陷分類/程度" 
          headers={defectPriorityHeaders}
          rows={defectPriorityRows}
        />
      </div>
      
      {/* Defect Type Table */}
      <div className="mb-8">
        <StatusTable 
          title="缺陷分類/系統" 
          headers={defectTypeHeaders}
          rows={defectTypeRows}
        />
      </div>
      
      {/* Defect Entry Table */}
      <div className="mb-8">
        <StatusTable 
          title="缺陷導入階段" 
          headers={defectEntryHeaders}
          rows={defectEntryRows}
        />
      </div>
    </div>
  );
};

export default DashboardOngoing;
