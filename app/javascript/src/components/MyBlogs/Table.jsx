import React, { useState } from "react";

import { Table as BlogTable } from "@bigbinary/neetoui";
import { PageLoader } from "components/common";

import COLUMN from "./Column";
import usePostRows from "./hook";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { rows, totalEntries, isLoading } = usePostRows({
    currentPage: 1,
    postsPerPage: 10,
  });

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <BlogTable
        rowSelection
        columnData={COLUMN}
        currentPageNumber={currentPage}
        defaultPageSize={5}
        handlePageChange={page => setCurrentPage(page)}
        rowData={rows}
        totalCount={totalEntries}
      />
    </div>
  );
};

export default Table;
