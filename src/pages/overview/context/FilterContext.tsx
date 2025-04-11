
import React, { createContext, useState, useContext } from 'react';

// Filter option type
export interface FilterOption {
  value: string;
  label: string;
}

// Filter states interface
interface FilterStates {
  releases: string[];
  cycles: string[];
  assignees: string[];
  requirements: string[];
  testCases: string[];
  testCoverageReleases: string[];
}

// Context interface
interface FilterContextType {
  // Filter options
  releaseOptions: FilterOption[];
  cycleOptions: FilterOption[];
  assignedToOptions: FilterOption[];
  requirementOptions: FilterOption[];
  testCaseOptions: FilterOption[];
  
  // Filter states
  selectedReleases: string[];
  selectedCycles: string[];
  selectedAssignees: string[];
  selectedRequirements: string[];
  selectedTestCases: string[];
  selectedTestCoverageReleases: string[];
  
  setSelectedReleases: (selected: string[]) => void;
  setSelectedCycles: (selected: string[]) => void;
  setSelectedAssignees: (selected: string[]) => void;
  setSelectedRequirements: (selected: string[]) => void;
  setSelectedTestCases: (selected: string[]) => void;
  setSelectedTestCoverageReleases: (selected: string[]) => void;
  
  // Applied filters
  appliedFilters: FilterStates;
  setAppliedFilters: React.Dispatch<React.SetStateAction<FilterStates>>;
  
  // Handler
  handleSearch: (activeTab: string) => void;
}

// Create the context
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Filter options
const releaseOptions = [
  { value: 'Release 01', label: 'Release 01' },
  { value: 'Release 02', label: 'Release 02' },
  { value: 'Release 03', label: 'Release 03' },
];
  
const cycleOptions = [
  { value: 'cycle01-01', label: 'Cycle 01-01' },
  { value: 'cycle01-02', label: 'Cycle 01-02' },
  { value: 'cycle02-01', label: 'Cycle 02-01' },
  { value: 'cycle02-02', label: 'Cycle 02-02' },
  { value: 'cycle03-01', label: 'Cycle 03-01' },
  { value: 'cycle03-02', label: 'Cycle 03-02' },
];
  
const assignedToOptions = [
  { value: 'john_doe', label: 'John Doe' },
  { value: 'emma_wilson', label: 'Emma Wilson' },
  { value: 'michael_chen', label: 'Michael Chen' },
];

const requirementOptions = [
  { value: 'TCTF-607', label: 'TCTF-607: Pre-SIT(Global契約)_Story_1' },
  { value: 'TCTF-159', label: 'TCTF-159: 定存解約' },
  { value: 'TCTF-158', label: 'TCTF-158: 定存盤戶-聯別(其他)' },
];
  
const testCaseOptions = [
  { value: 'TCTF-625', label: 'TCTF-625' },
  { value: 'TCTF-627', label: 'TCTF-627' },
  { value: 'TCTF-619', label: 'TCTF-619' },
  { value: 'TCTF-495', label: 'TCTF-495' },
  { value: 'TCTF-461', label: 'TCTF-461' },
  { value: 'TCTF-531', label: 'TCTF-531' },
];

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Filter states
  const [selectedReleases, setSelectedReleases] = useState<string[]>([]);
  const [selectedCycles, setSelectedCycles] = useState<string[]>([]);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);
  const [selectedRequirements, setSelectedRequirements] = useState<string[]>([]);
  const [selectedTestCases, setSelectedTestCases] = useState<string[]>([]);
  const [selectedTestCoverageReleases, setSelectedTestCoverageReleases] = useState<string[]>([]);
  
  // Applied filters state
  const [appliedFilters, setAppliedFilters] = useState<FilterStates>({
    releases: [],
    cycles: [],
    assignees: [],
    requirements: [],
    testCases: [],
    testCoverageReleases: []
  });
  
  // Handle search based on active tab
  const handleSearch = (activeTab: string) => {
    if (activeTab === "overview") {
      console.log('Searching with Overview filters:', {
        releases: selectedReleases,
        cycles: selectedCycles,
        assignees: selectedAssignees
      });
      
      setAppliedFilters({
        ...appliedFilters,
        releases: [...selectedReleases],
        cycles: [...selectedCycles],
        assignees: [...selectedAssignees]
      });
    } else if (activeTab === "requirement-traceability") {
      console.log('Searching with Requirement Traceability filters:', {
        requirements: selectedRequirements,
        testCases: selectedTestCases
      });
      
      setAppliedFilters({
        ...appliedFilters,
        requirements: [...selectedRequirements],
        testCases: [...selectedTestCases]
      });
    } else if (activeTab === "test-coverage") {
      console.log('Searching with Test Coverage filters:', {
        testCoverageReleases: selectedTestCoverageReleases
      });
      
      setAppliedFilters({
        ...appliedFilters,
        testCoverageReleases: [...selectedTestCoverageReleases]
      });
    }
  };

  return (
    <FilterContext.Provider
      value={{
        // Filter options
        releaseOptions,
        cycleOptions,
        assignedToOptions,
        requirementOptions,
        testCaseOptions,
        
        // Filter states
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
        setSelectedTestCoverageReleases,
        
        // Applied filters
        appliedFilters,
        setAppliedFilters,
        
        // Handler
        handleSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};
