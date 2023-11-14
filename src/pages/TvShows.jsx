import Topbar from "../components/Topbar";
import TvShows from "../features/tv-shows/TvShows";
import Operations from "../features/tv-shows/Operations";

function Movies() {
  return (
    <div className="pt-[90px] space-y-5">
      <Topbar title="Explore TV Shows">
        <Operations />
      </Topbar>

      <TvShows />
    </div>
  );
}

export default Movies;
