import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Homepage from "./pages/Homepage";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Details from "./pages/Details";
import Search from "./pages/Search";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/explore/movie" element={<Movies />} />
            <Route path="/explore/tv-shows" element={<TvShows />} />
            <Route path="/:mediaType/:id" element={<Details />} />
            <Route path="/search/:title" element={<Search />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
