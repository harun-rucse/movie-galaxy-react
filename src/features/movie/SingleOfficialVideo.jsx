import { HiOutlinePlayCircle } from "react-icons/hi2";
import Image from "../../components/Image";

function SingleOfficialVideo() {
  return (
    <div className="w-[180px] md:w-[280px] flex-shrink-0 flex flex-col gap-2 relative overflow-hidden group">
      <Image
        src="https://img.youtube.com/vi/UqcGdmJJVTY/mqdefault.jpg"
        alt=""
        className="w-[170px] md:w-[270px] h-auto rounded-xl object-cover object-top overflow-hidden cursor-pointer"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition cursor-pointer group-hover:text-pink-600">
        <HiOutlinePlayCircle size={50} />
      </div>
    </div>
  );
}

export default SingleOfficialVideo;
