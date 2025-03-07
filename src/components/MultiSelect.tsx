
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CheckSquare, Square, ChevronsUpDown, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options",
  className,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  
  // Update selectAll state based on selected items
  useEffect(() => {
    setSelectAll(selected.length === options.length);
  }, [selected, options]);

  const handleSelectAll = () => {
    if (selectAll) {
      onChange([]);
      setSelectAll(false);
    } else {
      onChange(options.map(option => option.value));
      setSelectAll(true);
    }
  };

  const handleSelect = (value: string) => {
    const isSelected = selected.includes(value);
    if (isSelected) {
      onChange(selected.filter(item => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange([]);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between border-2 border-gray-300 hover:bg-transparent",
            selected.length > 0 ? "text-custom-dark-teal" : "text-gray-500",
            className
          )}
        >
          <div className="flex gap-1 items-center overflow-hidden">
            {selected.length > 0 ? (
              <div className="flex-1 truncate">
                Selected {selected.length} {selected.length === 1 ? "item" : "items"}
              </div>
            ) : (
              <span>{placeholder}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {selected.length > 0 && (
              <X
                className="h-4 w-4 opacity-50 hover:opacity-100"
                onClick={handleClear}
              />
            )}
            <ChevronsUpDown className="h-4 w-4 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command className="w-full">
          <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} />
          <CommandEmpty>No results found.</CommandEmpty>
          <div className="border-b px-2 py-1.5">
            <div
              className="flex items-center gap-2 cursor-pointer hover:bg-custom-pale/50 rounded p-1"
              onClick={handleSelectAll}
            >
              {selectAll ? (
                <CheckSquare className="h-4 w-4 text-custom-teal" />
              ) : (
                <Square className="h-4 w-4" />
              )}
              <span className="text-sm">Select All</span>
            </div>
          </div>
          <CommandGroup className="max-h-60 overflow-auto">
            {options.map((option) => {
              const isSelected = selected.includes(option.value);
              return (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSelect(option.value)}
                  className="hover:bg-custom-pale/50"
                >
                  <div className="flex items-center gap-2 mr-2">
                    {isSelected ? (
                      <CheckSquare className="h-4 w-4 text-custom-teal" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </div>
                  {option.label}
                  {isSelected && <Check className="ml-auto h-4 w-4 text-custom-teal" />}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
