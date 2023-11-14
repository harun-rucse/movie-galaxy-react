import { HiOutlinePlayCircle } from "react-icons/hi2";

function PlayButton() {
  return (
    <div className="flex items-center gap-2 transition hover:cursor-pointer hover:text-pink-600">
      <HiOutlinePlayCircle size={65} />
      <span className="text-xl">Watch Trailer</span>
    </div>
  );
}

export default PlayButton;
