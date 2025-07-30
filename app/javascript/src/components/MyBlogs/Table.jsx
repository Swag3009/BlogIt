import React, { useState } from "react";

import { Table as BlogTable } from "@bigbinary/neetoui";
import { PageLoader } from "components/common";
import { filter, includes } from "ramda";

import COLUMN from "./Column";
import { DEFAULT_PAGE_SIZE } from "./constants";
import usePostRows from "./hook";

const Table = ({ selectedColumns }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { rows, totalEntries, isLoading } = usePostRows({
    currentPage,
    postsPerPage: DEFAULT_PAGE_SIZE,
  });

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <BlogTable
        rowSelection
        columnData={filter(({ key }) => includes(key, selectedColumns), COLUMN)}
        currentPageNumber={currentPage}
        defaultPageSize={DEFAULT_PAGE_SIZE}
        handlePageChange={page => setCurrentPage(page)}
        rowData={rows}
        totalCount={totalEntries}
      />
    </div>
  );
};

export default Table;
