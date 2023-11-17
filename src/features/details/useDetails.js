import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../services/api";

export function useDetails(mediaType, id) {
  const { isLoading, data } = useQuery({
    queryKey: ["details", mediaType, id],
    queryFn: () => fetchDataFromApi(`/${mediaType}/${id}`),
  });

  return { isLoading, data };
}
