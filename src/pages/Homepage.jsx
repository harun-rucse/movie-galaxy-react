import HeroBanner from "../features/hero-banner/HeroBanner";
import Popular from "../features/popular-movie/Popular";
import TopRated from "../features/top-rated-movie/TopRated";
import Treanding from "../features/trending-movie/Treanding";

function Homepage() {
  return (
    <>
      <HeroBanner />
      <Treanding />
      <Popular />
      <TopRated />
    </>
  );
}

export default Homepage;
