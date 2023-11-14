import PropTypes from "prop-types";

function Container({ children }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 flex items-center justify-center">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
