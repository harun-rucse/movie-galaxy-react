import PropTypes from "prop-types";
import { useGenres } from "../hooks/useGenres";

function Genres({ data }) {
  const { isLoading, genres } = useGenres();

  return (
    <div className="absolute w-[70%] right-1 bottom-6 flex justify-end gap-2 flex-wrap">
      {!isLoading &&
        data?.map((genreId) => (
          <span
            key={genreId}
            className="bg-[var(--pink)] text-xs px-1 py-[2px] rounded-md"
          >
            {genres[genreId]?.name}
          </span>
        ))}
    </div>
  );
}

Genres.propTypes = {
  data: PropTypes.array,
};

export default Genres;
