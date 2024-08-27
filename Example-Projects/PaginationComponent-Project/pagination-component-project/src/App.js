import React, { useState } from "react";
import "./App.css";
import Pagination from "./Components/common/Pagination";

function App() {
  // Define state variables
  const [currentPage, setCurrentPage] = useState(1);
  const itemsCount = 100; // Total number of items (example)
  const pageSize = 10; // Number of items per page (example)

  const handleOnPageChange = (page) => {
    setCurrentPage(page); // Update the current page
  };

  return (
    <div className="App">
      <Pagination
        itemsCount={itemsCount}
        pageSize={pageSize}
        onPageChange={handleOnPageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
