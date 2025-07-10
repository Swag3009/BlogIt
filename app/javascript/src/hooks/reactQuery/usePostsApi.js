import { QUERY_KEYS } from "constants/query";

import postsApis from "apis/posts";
import { useQuery, useMutation } from "react-query";

export const useFetchPosts = () =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: () => postsApis.fetch(),
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
