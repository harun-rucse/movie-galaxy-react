import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function ScrollContainer({ children }) {
  return (
    <PerfectScrollbar>
      <div className="w-full flex items-center md:gap-2 overflow-x-scroll px-4">
        {children}
      </div>
    </PerfectScrollbar>
  );
}

ScrollContainer.propTypes = {
  children: PropTypes.node,
};

export default ScrollContainer;
