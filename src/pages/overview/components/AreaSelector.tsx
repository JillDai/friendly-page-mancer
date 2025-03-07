
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface AreaSelectorProps {
  activeArea: string;
  onAreaChange: (value: string) => void;
}

const AreaSelector: React.FC<AreaSelectorProps> = ({ activeArea, onAreaChange }) => {
  return (
    <Select defaultValue={activeArea} onValueChange={onAreaChange}>
      <SelectTrigger className="w-56 border-2 border-custom-teal/50 hover:border-custom-teal bg-white shadow-sm">
        <SelectValue placeholder="Select Area">
          Area {activeArea}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="01">Area 01</SelectItem>
        <SelectItem value="02">Area 02</SelectItem>
        <SelectItem value="03">Area 03</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default AreaSelector;
