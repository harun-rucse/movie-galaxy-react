import PropTypes from "prop-types";
import Container from "./Container";

function Topbar({ title, children }) {
  return (
    <Container>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full md:items-center justify-between">
        <span className="text-2xl">{title}</span>
        <div>{children}</div>
      </div>
    </Container>
  );
}

Topbar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Topbar;
