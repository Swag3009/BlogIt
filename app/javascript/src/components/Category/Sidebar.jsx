import React, { useState } from "react";

import { Typography, Input } from "@bigbinary/neetoui";
import { PageLoader } from "components/common";
import { useFetchCategories } from "hooks/reactQuery/useCategoriesApi";
import { useTranslation } from "react-i18next";

import List from "./List";

const Sidebar = () => {
  const { t } = useTranslation();
  const { data: categories = [], isLoading } = useFetchCategories();
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

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
        categories.map(({ id, name }) => <List category={name} key={id} />)
      )}
    </div>
  );
};

export default Sidebar;
