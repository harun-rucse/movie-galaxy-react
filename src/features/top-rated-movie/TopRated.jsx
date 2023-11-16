import { useState } from "react";
import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import SingleItem from "../../components/SingleItem";
import SwitchTab from "../../components/SwitchTab";
import { useTopRated } from "./useTopRated";

function TopRated() {
  const [mediaType, setMediaType] = useState("movie");
  const { isLoading, topRateds } = useTopRated(mediaType);

  function hanldeTabSelect(tab) {
    setMediaType(tab === "Movie" ? "movie" : "tv");
  }

  return (
    <Container>
      <div className="flex w-full flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-normal">Top Rated</h2>
          <SwitchTab
            data={["Movie", "Tv Shows"]}
            onTabSelect={hanldeTabSelect}
          />
        </div>

        <Carousel isLoading={isLoading}>
          {topRateds?.map((item) => (
            <SingleItem key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default TopRated;
