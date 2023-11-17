import HeroBanner from "../features/hero-banner/HeroBanner";
import Popular from "../features/popular/Popular";
import TopRated from "../features/top-rated/TopRated";
import Treanding from "../features/trending/Treanding";

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
