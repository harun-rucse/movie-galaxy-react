import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function useSearch(query, page) {
  const { isLoading, data: { results, total_pages, total_results } = {} } =
    useQuery({
      queryKey: ["search-results", query, page],
      queryFn: () =>
        fetchDataFromApi(`/search/multi?query=${query}&page=${page}`),
    });

  return {
    isLoading,
    data: results,
    totalPage: total_pages,
    totalResults: total_results,
  };
}
