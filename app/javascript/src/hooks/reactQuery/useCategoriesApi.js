import { QUERY_KEYS } from "constants/query";

import categoriesApi from "apis/categories";
import { useQuery } from "react-query";
import changeCategoryKeys from "utils/changeCategoryKeys";

export const useFetchCategories = () =>
  useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: () => categoriesApi.fetch(),
    select: response => changeCategoryKeys(response),
  });
