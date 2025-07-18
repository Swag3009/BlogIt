export const getFilteredCategories = (categories, searchValue) =>
  categories.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );
