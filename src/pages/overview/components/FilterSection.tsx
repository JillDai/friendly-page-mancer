
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';
import FilterRow from './FilterRow';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterConfig {
  label: string;
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

interface FilterSectionProps {
  activeTab: string;
  filterConfigs: {
    overview: FilterConfig[];
    requirementTraceability: FilterConfig[];
    testCoverage: FilterConfig[];
  };
  onSearch: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ 
  activeTab, 
  filterConfigs,
  onSearch 
}) => {
  // Get the appropriate filters based on the active tab
  const getActiveFilters = () => {
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

  const activeFilters = getActiveFilters();
  
  // Calculate the grid columns based on the number of filters
  const getGridCols = () => {
    const count = activeFilters.length;
    if (count <= 0) return "";
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1 md:grid-cols-3";
  };

  return (
    <div className="mt-6 mb-6 border border-custom-teal/20 bg-custom-pale/30 p-5 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="bg-custom-teal/10 p-1.5 rounded-md">
          <Filter className="h-5 w-5 text-custom-teal" />
        </div>
        <h2 className="text-lg font-medium text-custom-dark-teal ml-2">篩選器</h2>
      </div>
      
      {activeFilters.length > 0 ? (
        <div className={`grid ${getGridCols()} gap-6 mb-6`}>
          {activeFilters.map((filter, index) => (
            <FilterRow
              key={index}
              label={filter.label}
              options={filter.options}
              selected={filter.selected}
              onChange={filter.onChange}
            />
          ))}
        </div>
      ) : (
        <div className="mb-6">
          <p className="text-gray-500 italic">No filters available for this section</p>
        </div>
      )}
      
      <div className="flex justify-end">
        <Button onClick={onSearch} className="bg-custom-orange hover:bg-custom-orange/90 text-white font-medium shadow-sm">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
