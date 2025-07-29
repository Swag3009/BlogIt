import React, { useState } from "react";

import { reject } from "ramda";

import { SELECTED_COLUMNS } from "./constants";
import Header from "./Header";
import Table from "./Table";

const MyBlogs = () => {
  const [selectedColumns, setSelectedColumns] = useState(SELECTED_COLUMNS);
  const handleSelectedColumns = (column, checked) => {
    if (checked) {
      setSelectedColumns(prevColumns => [column, ...prevColumns]);
    } else {
      setSelectedColumns(prevColumns =>
        reject(data => data === column, prevColumns)
      );
    }
  };

  return (
    <div className="space-y-6">
      <Header
        handleSelectedColumns={handleSelectedColumns}
        selectedColumns={selectedColumns}
      />
      <Table selectedColumns={selectedColumns} />
    </div>
  );
};

export default MyBlogs;
