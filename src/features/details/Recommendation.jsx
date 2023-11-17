import PropTypes from "prop-types";
import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import SingleItem from "../../components/SingleItem";

function Recommendation({ isLoading, data, mediaType }) {
  return (
    <Container>
      <div className="w-full z-20 space-y-4">
        <h2 className="text-2xl text-white">Recommendations</h2>

        <Carousel isLoading={isLoading}>
          {data?.map((video) => (
            <SingleItem key={video.id} item={video} mediaType={mediaType} />
          ))}
        </Carousel>

        {!isLoading && data?.length === 0 && (
          <span className="text-gray-400 block text-center">
            No video found
          </span>
        )}
      </div>
    </Container>
  );
}

Recommendation.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  mediaType: PropTypes.string,
};

export default Recommendation;
