import OfficialVideos from "./OfficialVideos";
import Overview from "./Overview";
import SimilarMovies from "./SimilarMovies";
import TopCast from "./TopCast";

function MovieDetails() {
  return (
    <div className="w-full min-h-full flex flex-col gap-12 pt-[60px]">
      <Overview />
      <TopCast />
      <OfficialVideos />
      <SimilarMovies />
    </div>
  );
}

export default MovieDetails;
