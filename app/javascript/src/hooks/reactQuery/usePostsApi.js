import { useQuery } from "react-query";

import postsApis from "../../apis/posts";
import { QUERY_KEYS } from "../../constants/query";

export const useFetchPosts = () =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: () => postsApis.fetch(),
  });
