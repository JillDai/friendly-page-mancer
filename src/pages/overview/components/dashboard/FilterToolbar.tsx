
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterToolbarProps {
  onSearch: () => void;
}

const FilterToolbar: React.FC<FilterToolbarProps> = ({ onSearch }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Release" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="release1">Release 01</SelectItem>
            <SelectItem value="release2">Release 02</SelectItem>
            <SelectItem value="release3">Release 03</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Cycle" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cycle1">Cycle 01-01</SelectItem>
            <SelectItem value="cycle2">Cycle 01-02</SelectItem>
            <SelectItem value="cycle3">Cycle 02-01</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={onSearch} className="bg-custom-orange hover:bg-custom-orange/90 text-white sm:self-end">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </div>
  );
};

export default FilterToolbar;
