import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableComponent = ({ columns, onSort, sortColumn, sortOrder, data }) => {
  return (
    <div>
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
        />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default TableComponent;
