import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function useRecommendations(mediaType, id) {
  const { isLoading, data } = useQuery({
    queryKey: ["recommendation-videos", mediaType, id],
    queryFn: () => fetchDataFromApi(`/${mediaType}/${id}/recommendations`),
  });

  return { isLoading, data };
}
