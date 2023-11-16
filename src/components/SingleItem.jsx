import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CircleRating from "./CircleRating";
import Image from "./Image";
import Genres from "./Genres";
import { useConfigure } from "../hooks/useConfigure";
import { formatDate } from "../utils";

function SingleItem({ item }) {
  const { configuration } = useConfigure();

  return (
    <Link
      to={`/movie/${item?.id}`}
      className="flex-shrink-0 w-[160px] md:w-[calc(20%-16px)] relative"
    >
      <div className="relative w-full h-full transition duration-500 hover:opacity-60">
        <Image
          src={
            item?.poster_path
              ? configuration?.backdrop_path + item?.poster_path
              : "/images/no-poster.png"
          }
          className="rounded-xl w-full h-full object-cover object-center"
        />
        <Genres data={item?.genre_ids} />
      </div>

      <div className="absolute left-2 bottom-[60px] mb-2">
        <CircleRating
          rating={item?.vote_average}
          className="w-[50px] h-[50px] bg-white"
        />
      </div>

      <div className="pt-10 w-full">
        <h2 className="text-xl leading-6 line-clamp-1 text-ellipsis mb-2">
          {item?.title || item?.name}
        </h2>
        <span className="opacity-50 text-sm">
          {formatDate(item?.release_date || item?.first_air_date)}
        </span>
      </div>
    </Link>
  );
}

SingleItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SingleItem;
