const changeCategoryKeys = categories =>
  categories.map(({ id, name }) => ({ label: name, value: id }));

export default changeCategoryKeys;
