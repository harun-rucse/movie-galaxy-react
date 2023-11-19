import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function useExplore(mediaType, page, filterValues, sortByValue) {
  let filter = filterValues ? { with_genres: filterValues } : {};
  if (sortByValue) filter["sort_by"] = sortByValue;

  const { isLoading, data: { results, total_pages } = {} } = useQuery({
    queryKey: ["explore-list", mediaType, page, filterValues, sortByValue],
    queryFn: () =>
      fetchDataFromApi(`/discover/${mediaType}?page=${page}`, filter),
  });

  return {
    isLoading,
    data: results,
    totalPage: total_pages,
  };
}
