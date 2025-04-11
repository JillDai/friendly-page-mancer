
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface StatusRow {
  id: string;
  columns: (string | number)[];
}

interface StatusTableProps {
  title: string;
  headers: string[];
  rows: StatusRow[];
}

const StatusTable: React.FC<StatusTableProps> = ({ title, headers, rows }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-gray-100 p-2 border-b">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            {headers.map((header, index) => (
              <TableHead key={index} className="text-xs font-medium text-gray-500">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {row.columns.map((cell, cellIndex) => (
                <TableCell key={`${row.id}-${cellIndex}`} className="text-xs py-2">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StatusTable;
