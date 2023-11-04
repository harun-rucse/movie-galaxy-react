import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import SwitchTab from "../../components/SwitchTab";

function Popular() {
  function hanldeTabSelect(tab) {
    console.log(tab);
  }

  return (
    <Container>
      <div className="flex w-full flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-normal">What&apos; Popular</h2>
          <SwitchTab
            data={["Movie", "Tv Shows"]}
            onTabSelect={hanldeTabSelect}
          />
        </div>

        <Carousel />
      </div>
    </Container>
  );
}

export default Popular;