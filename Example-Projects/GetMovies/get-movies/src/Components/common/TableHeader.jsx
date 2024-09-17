import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ columns, onSort, sortColumn, sortOrder }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            style={{ cursor: "pointer" }}
            onClick={() => onSort(column.path)}
          >
            {column.label}
            {sortColumn === column.path && (sortOrder === "asc" ? " ↑" : " ↓")}
          </th>
        ))}
      </tr>
    </thead>
  );
};

// PropTypes for type checking
TableHeader.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSort: PropTypes.func.isRequired,
  sortColumn: PropTypes.string.isRequired,
  sortOrder: PropTypes.oneOf(["asc", "desc"]).isRequired,
};

export default TableHeader;
