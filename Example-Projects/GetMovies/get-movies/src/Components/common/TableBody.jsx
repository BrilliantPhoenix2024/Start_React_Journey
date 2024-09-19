import React from "react";
import _ from "lodash"; // Import lodash

const TableBody = ({ data, onDelete, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={column.path || column.key}>
              {column.content ? column.content(item) : _.get(item, column.path)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
