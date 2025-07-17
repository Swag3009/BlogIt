import { QUERY_KEYS } from "constants/query";

import postsApis from "apis/posts";
import { useQuery, useMutation } from "react-query";

export const useFetchPosts = selectedCategories =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS, selectedCategories],
    queryFn: () => postsApis.fetch({ categories: selectedCategories }),
  });

export const useCreatePost = () =>
  useMutation({
    mutationFn: payload => postsApis.create(payload),
  });

export const useShowPost = slug =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS, slug],
    queryFn: () => postsApis.show(slug),
  });
