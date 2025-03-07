
import React from 'react';
import { MultiSelect } from '@/components/MultiSelect';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterRowProps {
  label: string;
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const FilterRow: React.FC<FilterRowProps> = ({ 
  label, 
  options, 
  selected, 
  onChange 
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-custom-dark-teal">{label}</label>
      <MultiSelect 
        options={options}
        selected={selected}
        onChange={onChange}
        placeholder={`Select ${label.toLowerCase()}`}
        className="border-custom-teal/40 hover:border-custom-teal focus:border-custom-teal"
      />
    </div>
  );
};

export default FilterRow;
