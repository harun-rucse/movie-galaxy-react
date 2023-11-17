import { useRef } from "react";
import PropTypes from "prop-types";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Skeleton from "./Skeleton";

function Carousel({ isLoading, children }) {
  const carouselRef = useRef();

  const navigation = (dir) => {
    const container = carouselRef.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex items-center relative">
      {children?.length > 0 && (
        <BsFillArrowLeftCircleFill
          onClick={() => navigation("left")}
          className="absolute top-[40%] left-[10px] z-20 text-black text-[30px] transition opacity-60 hover:opacity-90 cursor-pointer"
        />
      )}
      <div
        className="flex items-center w-full gap-5 overflow-hidden"
        ref={carouselRef}
      >
        {isLoading ? <Skeleton count={5} /> : children}
      </div>
      {children?.length > 0 && (
        <BsFillArrowRightCircleFill
          onClick={() => navigation("right")}
          className="absolute top-[40%] right-[20px] z-20 text-black text-[30px] transition opacity-60 hover:opacity-90 cursor-pointer"
        />
      )}
    </div>
  );
}
Carousel.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default Carousel;
