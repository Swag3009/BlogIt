import React, { useState, useEffect } from "react";

import { Typography, Input } from "@bigbinary/neetoui";
import { PageLoader } from "components/common";
import { useFetchCategories } from "hooks/reactQuery/useCategoriesApi";
import useParamQuery from "hooks/useParamQuery";
import { without, isEmpty } from "ramda";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import List from "./List";

const Sidebar = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { data: categories = [], isLoading } = useFetchCategories();
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const query = useParamQuery();
  useEffect(() => {
    if (isEmpty(selectedCategories)) {
      query.delete("categories");
    } else {
      query.set("categories", selectedCategories);
    }

    history.push({
      pathname: "/blogs",
      search: query?.toString() || "",
    });
  }, [selectedCategories]);

  const handleSelectCategory = categoryId => {
    setSelectedCategories(prevSelectedCategories =>
      prevSelectedCategories.includes(categoryId)
        ? without([categoryId], [...prevSelectedCategories])
        : [categoryId, ...prevSelectedCategories]
    );
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
          <div key={id} onClick={() => handleSelectCategory(id)}>
            <List category={name} />
          </div>
        ))
      )}
    </div>
  );
};

export default Sidebar;
