import { useQuery } from "@tanstack/react-query";
import { fetchConfiguration } from "../services/api";

export function useConfigure() {
  const { isLoading, data: configuration } = useQuery({
    queryKey: ["configuration"],
    queryFn: fetchConfiguration,
  });

  return { isLoading, configuration };
}
