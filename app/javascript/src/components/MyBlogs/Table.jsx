import React, { useState } from "react";

import { Table as BlogTable } from "@bigbinary/neetoui";

import COLUMN from "./Column";

const allCategories = [
  { id: 1, name: "Tech" },
  { id: 2, name: "Ruby" },
  { id: 3, name: "React" },
  { id: 4, name: "Life" },
  { id: 5, name: "Work" },
];

const DUMMY_POSTS = Array.from({ length: 30 }, (_, index) => {
  const id = index + 1;
  const title = `Blog Post Title ${id}`;
  const status = id % 3 === 0 ? "Draft" : "Published";

  const lastPublishedAt =
    status === "Published"
      ? new Date(Date.now() - index * 86400000).toISOString()
      : null;

  // Assign 1–3 random categories to each post
  const shuffled = allCategories.sort(() => 0.5 - Math.random());
  const selectedCategories = shuffled.slice(0, (index % 3) + 1);

  return {
    id,
    title,
    category: selectedCategories.map(c => c.name).join(", "),
    last_published_at: lastPublishedAt,
    status,
  };
});

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedData = DUMMY_POSTS.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  return (
    <div>
      <BlogTable
        rowSelection
        columnData={COLUMN}
        currentPageNumber={currentPage}
        defaultPageSize={5}
        handlePageChange={page => setCurrentPage(page)}
        rowData={paginatedData}
        totalCount={DUMMY_POSTS.length}
      />
    </div>
  );
};

export default Table;
