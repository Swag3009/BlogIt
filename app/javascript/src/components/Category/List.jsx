import React from "react";

import { NoData } from "@bigbinary/neetoui";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import Card from "./Card";
import { getFilteredCategories } from "./util";

const List = ({
  categories,
  debouncedSearchValue,
  selectedCategories,
  handleSelectCategory,
  isDisabled,
}) => {
  const filtered = getFilteredCategories(categories, debouncedSearchValue);
  const { t } = useTranslation();

  if (isEmpty(filtered)) {
    return <NoData className="mt-6" title={t("message.noCategory")} />;
  }

  return filtered.map(({ id, name }) => (
    <div key={id} onClick={() => !isDisabled && handleSelectCategory(id)}>
      <Card
        category={name}
        isDisabled={isDisabled}
        isSelected={selectedCategories.includes(id)}
      />
    </div>
  ));
};

export default List;
