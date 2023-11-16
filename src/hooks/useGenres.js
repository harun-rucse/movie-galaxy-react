import { useQueries } from "@tanstack/react-query";
import { fetchDataFromApi } from "../services/api";

export function useGenres() {
  const [
    { isLoading: isLoading1, data: movieGenres },
    { isLoading: isLoading2, data: tvGenres },
  ] = useQueries({
    queries: [
      {
        queryKey: ["movie-genres"],
        queryFn: () => fetchDataFromApi("/genre/movie/list"),
      },
      {
        queryKey: ["tv-genres"],
        queryFn: () => fetchDataFromApi("/genre/tv/list"),
      },
    ],
  });

  let genres = {};
  const isLoading = isLoading1 || isLoading2;

  if (!isLoading) {
    [...movieGenres.genres, ...tvGenres.genres]?.map(
      (item) => (genres[item.id] = item)
    );
  }

  return { isLoading, genres };
}
