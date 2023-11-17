import PropTypes from "prop-types";
import Container from "../../components/Container";
import SingleCast from "./SingleCast";
import Carousel from "../../components/Carousel";

function TopCast({ isLoading, data }) {
  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <div className="w-full z-20 space-y-4 -mt-8">
        <h2 className="text-2xl text-white">Top Cast</h2>
        <Carousel isLoading={isLoading}>
          {data?.map((cast) => (
            <SingleCast key={cast.id} item={cast} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

TopCast.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};

export default TopCast;
