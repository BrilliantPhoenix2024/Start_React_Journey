import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableComponent = (props) => {
  const { columns, onSort, sortColumn, sortOrder, data } = props;

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
