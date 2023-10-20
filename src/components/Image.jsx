import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image({ src, className, ...rest }) {
  return (
    <LazyLoadImage className={className} src={src} effect="blur" {...rest} />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
