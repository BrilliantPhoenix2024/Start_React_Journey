// src/components/TableHeader.jsx
import React from "react";

const TableHeader = ({ onSort, sortColumn, sortOrder }) => {
  const columns = [
    { column: "title", label: "Title" },
    { column: "genre", label: "Genre" },
    { column: "numberInStock", label: "Stock" },
    { column: "dailyRentalRate", label: "Rate" },
  ];

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.column}
            style={{ cursor: "pointer" }}
            onClick={() => onSort(column.column)}
          >
            {column.label}
            {sortColumn === column.column &&
              (sortOrder === "asc" ? " ↑" : " ↓")}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
