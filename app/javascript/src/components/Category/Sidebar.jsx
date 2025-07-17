import { QUERY_KEYS } from "constants/query";

import React, { useEffect, useState } from "react";

import { Typography, Input } from "@bigbinary/neetoui";
import { PageLoader } from "components/common";
import { useFetchCategories } from "hooks/reactQuery/useCategoriesApi";
import useQueryParam from "hooks/useQueryParam";
import { symmetricDifference } from "ramda";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import List from "./List";

import routes from "../../route";

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const isDisabled = currentPath !== routes.blogs;

  const { data: categories = [], isLoading } = useFetchCategories();
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const { query, setQueryParam } = useQueryParam();

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const categoryQuery = query.get(QUERY_KEYS.CATEGORIES);

    return categoryQuery
      ? categoryQuery.split(",").filter(Boolean).map(Number)
      : [];
  });

  useEffect(() => {
    setCurrentPath(location.pathname);
    setSelectedCategories([]);
  }, [location.pathname]);

  const handleSelectCategory = categoryId => {
    const updatedCategoryList = symmetricDifference(
      [categoryId],
      selectedCategories
    );
    setQueryParam(QUERY_KEYS.CATEGORIES, updatedCategoryList.join(","));
    setSelectedCategories(updatedCategoryList);
  };

  return (
    <div className="m-4">
      <header className="space-y-2">
        <div className="mt-8 flex items-center justify-between">
          <Typography style="h3">{t("title.categories")}</Typography>
          <div className="flex items-center space-x-1">
            <i
              className="ri-search-line text-xl"
              onClick={() => setIsSearchBarVisible(prev => !prev)}
            />
            <i className="ri-add-fill text-2xl" />
          </div>
        </div>
        {isSearchBarVisible && (
          <Input
            placeholder={t("placeHolder.searchCategory")}
            prefix={<i className="ri_search_line" />}
            type="search"
          />
        )}
      </header>
      {isLoading ? (
        <PageLoader />
      ) : (
        categories.map(({ id, name }) => (
          <div key={id} onClick={() => !isDisabled && handleSelectCategory(id)}>
            <List
              category={name}
              isDisabled={isDisabled}
              isSelected={selectedCategories.includes(id)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Sidebar;
