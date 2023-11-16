import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function useTopRated(mediaType) {
  const { isLoading, data: { results, total_pages } = {} } = useQuery({
    queryKey: ["top_rated", mediaType],
    queryFn: () => fetchDataFromApi(`/${mediaType}/top_rated`),
  });

  return { isLoading, topRateds: results, count: total_pages };
}
