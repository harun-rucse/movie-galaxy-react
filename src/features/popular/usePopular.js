import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function usePopular(mediaType) {
  const { isLoading, data: { results, total_pages } = {} } = useQuery({
    queryKey: ["popular", mediaType],
    queryFn: () => fetchDataFromApi(`/${mediaType}/popular`),
  });

  return { isLoading, populars: results, count: total_pages };
}
