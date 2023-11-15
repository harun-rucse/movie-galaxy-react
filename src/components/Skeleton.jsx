import PropTypes from "prop-types";

function Skeleton({ count }) {
  return (
    <div className="w-full h-full flex gap-4">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="w-[160px] md:w-[calc(20%-16px)]">
          <div className="w-full aspect-[1/1.4] rounded-xl mb-3 skeleton" />
          <div className="flex flex-col space-y-2">
            <div className="w-full h-6 skeleton" />
            <div className="w-[70%] h-6 skeleton" />
          </div>
        </div>
      ))}
    </div>
  );
}

Skeleton.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Skeleton;
