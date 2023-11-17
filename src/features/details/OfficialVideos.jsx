import PropTypes from "prop-types";
import Container from "../../components/Container";
import SingleOfficialVideo from "./SingleOfficialVideo";
import Carousel from "../../components/Carousel";

function OfficialVideos({ isLoading, data }) {
  return (
    <Container>
      <div className="w-full z-20 space-y-4">
        <h2 className="text-2xl text-white">Official Videos</h2>
        {data?.length > 0 ? (
          <Carousel isLoading={isLoading}>
            {data?.map((video) => (
              <SingleOfficialVideo key={video.id} videoId={video?.key} />
            ))}
          </Carousel>
        ) : (
          <span className="text-gray-400 block text-center">
            No video found
          </span>
        )}
      </div>
    </Container>
  );
}

OfficialVideos.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};

export default OfficialVideos;
