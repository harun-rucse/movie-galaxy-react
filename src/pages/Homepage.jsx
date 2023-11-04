import HeroBanner from "../features/hero-banner/HeroBanner";
import Treanding from "../features/trending-movie/Treanding";

function Homepage() {
  return (
    <>
      <HeroBanner />
      <Treanding />
      <div className="h-[10rem] w-full"></div>
    </>
  );
}

export default Homepage;
