import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";
import Modal from "../../components/Modal";

function VideoPopup({ children, videoId, name, playing }) {
  return (
    <Modal>
      <Modal.Open opens={name}>{children}</Modal.Open>
      <Modal.Body name={name}>
        <div className="w-[350px] md:w-[800px] aspect-video transition-all scale-100 ease-in-out">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            playing={playing}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

VideoPopup.defaultProps = {
  playing: true,
};

VideoPopup.propTypes = {
  children: PropTypes.node.isRequired,
  videoId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playing: PropTypes.bool,
};

export default VideoPopup;
