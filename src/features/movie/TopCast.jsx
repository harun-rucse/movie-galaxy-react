import Container from "../../components/Container";
import ScrollContainer from "../../components/ScrollContainer";
import SingleCast from "./SingleCast";

function TopCast() {
  return (
    <Container>
      <div className="w-full z-20 space-y-4 -mt-8">
        <h2 className="text-2xl text-white">Top Cast</h2>
        <ScrollContainer>
          <SingleCast />
          <SingleCast />
          <SingleCast />
          <SingleCast />
          <SingleCast />
          <SingleCast />
        </ScrollContainer>
      </div>
    </Container>
  );
}

export default TopCast;
