import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { cn } from "../utils";

function CircleRating({ rating, maxValue, className, textColor, textSize }) {
  return (
    <div className={cn("bg-[var(--black)] rounded-full p-1", className)}>
      <CircularProgressbar
        value={rating}
        maxValue={maxValue}
        text={rating?.toFixed(1)}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "#4cbb17",
          textColor: textColor,
          textSize: textSize,
        })}
      />
    </div>
  );
}

CircleRating.defaultProps = {
  maxValue: 10,
  textColor: "black",
  textSize: 40,
};

CircleRating.propTypes = {
  rating: PropTypes.number,
  maxValue: PropTypes.number,
  className: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
};

export default CircleRating;
