import PropTypes from "prop-types";
import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import SingleItem from "../../components/SingleItem";

function SimilarMovies({ isLoading, data, mediaType }) {
  return (
    <Container>
      <div className="w-full z-20 space-y-4">
        <h2 className="text-2xl text-white">Similar Movies</h2>
        <Carousel isLoading={isLoading}>
          {data?.length > 0 ? (
            <Carousel isLoading={isLoading}>
              {data?.map((video) => (
                <SingleItem key={video.id} item={video} mediaType={mediaType} />
              ))}
            </Carousel>
          ) : (
            <span className="text-gray-400 block text-center">
              No video found
            </span>
          )}
        </Carousel>
      </div>
    </Container>
  );
}

SimilarMovies.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  mediaType: PropTypes.string,
};

export default SimilarMovies;
