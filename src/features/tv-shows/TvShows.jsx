import Container from "../../components/Container";
import SingleItem from "../../components/SingleItem";

function TvShows() {
  return (
    <Container>
      <div className="w-full">
        <div className="flex flex-wrap items-center w-full gap-x-3 md:gap-x-5 gap-y-8 overflow-hidden">
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
        </div>
      </div>
    </Container>
  );
}

export default TvShows;
