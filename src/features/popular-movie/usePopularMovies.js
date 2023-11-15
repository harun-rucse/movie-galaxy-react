import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function usePopularMovies() {
  const { isLoading, data: { results, total_pages } = {} } = useQuery({
    queryKey: ["popular"],
    queryFn: () => fetchDataFromApi("/movie/popular"),
  });

  return { isLoading, popularMovies: results, count: total_pages };
}
