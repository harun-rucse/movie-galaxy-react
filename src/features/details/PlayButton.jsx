import PropTypes from "prop-types";
import { HiOutlinePlayCircle } from "react-icons/hi2";

function PlayButton({ onClick }) {
  return (
    <div
      className="flex items-center gap-2 transition hover:cursor-pointer hover:text-pink-600"
      onClick={onClick}
    >
      <HiOutlinePlayCircle size={65} />
      <span className="text-xl">Watch Trailer</span>
    </div>
  );
}

PlayButton.propTypes = {
  onClick: PropTypes.func,
};

export default PlayButton;
