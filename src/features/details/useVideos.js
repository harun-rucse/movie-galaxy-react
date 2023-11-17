import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function useVideos(mediaType, id) {
  const { isLoading, data } = useQuery({
    queryKey: ["videos", mediaType, id],
    queryFn: () => fetchDataFromApi(`/${mediaType}/${id}/videos`),
  });

  return { isLoading, data };
}
