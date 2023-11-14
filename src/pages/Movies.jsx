import Topbar from "../components/Topbar";
import MovieList from "../features/movies/MovieList";
import Operations from "../features/movies/Operations";

function Movies() {
  return (
    <div className="pt-[90px] space-y-5">
      <Topbar title="Explore Movies">
        <Operations />
      </Topbar>

      <MovieList />
    </div>
  );
}

export default Movies;
