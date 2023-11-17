import PropTypes from "prop-types";
import Image from "../../components/Image";
import { useConfigure } from "../../hooks/useConfigure";

function SingleCast({ item }) {
  const { configuration } = useConfigure();

  return (
    <div className="w-[180px] flex-shrink-0 flex flex-col gap-2">
      <Image
        src={
          item?.profile_path
            ? configuration?.profile_path + item?.profile_path
            : "/images/avatar.png"
        }
        alt=""
        className="w-28 md:w-32 h-28 md:h-32 rounded-full object-cover object-top overflow-hidden"
      />

      <div className="space-y-2">
        <h4 className="md:text-lg font-semibold">{item?.name}</h4>
        <span className="text-sm text-gray-500">{item?.character}</span>
      </div>
    </div>
  );
}

SingleCast.propTypes = {
  item: PropTypes.object,
};

export default SingleCast;
