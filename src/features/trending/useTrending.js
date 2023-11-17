import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function useTrending(timeWindow) {
  const { isLoading, data: { results, total_pages } = {} } = useQuery({
    queryKey: ["trending", timeWindow],
    queryFn: () => fetchDataFromApi(`/trending/all/${timeWindow}`),
  });

  return { isLoading, trendings: results, count: total_pages };
}
