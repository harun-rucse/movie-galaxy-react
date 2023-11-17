import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function useMetadata(mediaType, id) {
  const { isLoading, data } = useQuery({
    queryKey: ["metadata", mediaType, id],
    queryFn: () => fetchDataFromApi(`/${mediaType}/${id}/credits`),
  });

  return { isLoading, data };
}
