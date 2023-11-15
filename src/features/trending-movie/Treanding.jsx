import { useState } from "react";
import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import SingleItem from "../../components/SingleItem";
import SwitchTab from "../../components/SwitchTab";
import { useTrending } from "./useTrending";

function Treanding() {
  const [timeWindow, setTimeWindow] = useState("day");
  const { isLoading, trendings } = useTrending(timeWindow);

  function hanldeTabSelect(tab) {
    setTimeWindow(tab === "Day" ? "day" : "week");
  }

  return (
    <Container>
      <div className="flex w-full flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-normal">Treanding</h2>
          <SwitchTab data={["Day", "Week"]} onTabSelect={hanldeTabSelect} />
        </div>

        <Carousel isLoading={isLoading}>
          {trendings?.map((item) => (
            <SingleItem key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default Treanding;
