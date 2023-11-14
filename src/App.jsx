import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/explore/movie" element={<Movies />} />
          <Route path="/explore/tv-shows" element={<TvShows />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
