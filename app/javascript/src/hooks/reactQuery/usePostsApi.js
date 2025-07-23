import { QUERY_KEYS } from "constants/query";

import postsApis from "apis/posts";
import { useQuery, useMutation } from "react-query";

export const useFetchPosts = ({
  selectedCategories,
  currentPage,
  postsPerPage,
}) =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS, selectedCategories, currentPage, postsPerPage],
    queryFn: () =>
      postsApis.fetch({
        categories: selectedCategories,
        page: currentPage,
        per_page: postsPerPage,
      }),
  });

export const useFetchMyPosts = ({ currentPage, postsPerPage }) =>
  useQuery({
    queryKey: [QUERY_KEYS.MY_POSTS, currentPage, postsPerPage],
    queryFn: () =>
      postsApis.fetchMyPosts({
        page: currentPage,
        per_page: postsPerPage,
      }),
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

export const useUpdatePost = () =>
  useMutation({
    mutationFn: ({ slug, payload }) => postsApis.update(slug, payload),
  });

export const useDeletePost = () =>
  useMutation({
    mutationFn: slug => postsApis.destroy(slug),
  });
