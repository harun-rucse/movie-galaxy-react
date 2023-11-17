import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function useSimilarVideos(mediaType, id) {
  const { isLoading, data } = useQuery({
    queryKey: ["similar-videos", mediaType, id],
    queryFn: () => fetchDataFromApi(`/${mediaType}/${id}/similar`),
  });

  return { isLoading, data };
}
