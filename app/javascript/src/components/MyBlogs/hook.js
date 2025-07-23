import { useFetchMyPosts } from "hooks/reactQuery/usePostsApi";

const usePostRows = params => {
  const {
    data: { posts = [], total_entries: totalEntries = 0 } = {},
    isLoading,
  } = useFetchMyPosts(params);

  const rows = posts.map(
    ({ id, title, slug, status, categories, updated_at }) => ({
      id,
      title,
      slug,
      status,
      categories: categories.map(({ name }) => name).join(", "),
      last_published_at: updated_at,
    })
  );

  return { rows, totalEntries, isLoading };
};

export default usePostRows;
