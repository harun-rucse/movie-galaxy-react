import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import SingleItem from "../../components/SingleItem";

function SimilarMovies() {
  return (
    <Container>
      <div className="w-full z-20 space-y-4">
        <h2 className="text-2xl text-white">Similar Movies</h2>
        <Carousel>
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
        </Carousel>
      </div>
    </Container>
  );
}

export default SimilarMovies;
