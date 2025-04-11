
import React from 'react';
import { useFilterContext } from '../context/FilterContext';

interface FilterConfig {
  label: string;
  options: Array<{ value: string; label: string }>;
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const useFilterConfig = (activeTab: string): FilterConfig[] => {
  const {
    releaseOptions,
    cycleOptions,
    assignedToOptions,
    requirementOptions,
    testCaseOptions,
    selectedReleases,
    selectedCycles,
    selectedAssignees,
    selectedRequirements,
    selectedTestCases,
    selectedTestCoverageReleases,
    setSelectedReleases,
    setSelectedCycles,
    setSelectedAssignees,
    setSelectedRequirements,
    setSelectedTestCases,
    setSelectedTestCoverageReleases
  } = useFilterContext();

  const filterConfigs = {
    overview: [
      {
        label: "Release",
        options: releaseOptions,
        selected: selectedReleases,
        onChange: setSelectedReleases
      },
      {
        label: "Cycle",
        options: cycleOptions,
        selected: selectedCycles,
        onChange: setSelectedCycles
      },
      {
        label: "Assigned To",
        options: assignedToOptions,
        selected: selectedAssignees,
        onChange: setSelectedAssignees
      }
    ],
    requirementTraceability: [
      {
        label: "Requirement",
        options: requirementOptions,
        selected: selectedRequirements,
        onChange: setSelectedRequirements
      },
      {
        label: "Test Case",
        options: testCaseOptions,
        selected: selectedTestCases,
        onChange: setSelectedTestCases
      }
    ],
    testCoverage: [
      {
        label: "Release",
        options: releaseOptions,
        selected: selectedTestCoverageReleases,
        onChange: setSelectedTestCoverageReleases
      }
    ]
  };

  // Get the appropriate filters based on the active tab
  switch (activeTab) {
    case 'overview':
      return filterConfigs.overview;
    case 'requirement-traceability':
      return filterConfigs.requirementTraceability;
    case 'test-coverage':
      return filterConfigs.testCoverage;
    default:
      return [];
  }
};
