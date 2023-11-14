import PropTypes from "prop-types";
import Container from "./Container";

function ListItems({ children }) {
  return (
    <Container>
      <div className="w-full">
        <div className="flex flex-wrap items-center w-full gap-x-3 md:gap-x-5 gap-y-8 overflow-hidden">
          {children}
        </div>
      </div>
    </Container>
  );
}

ListItems.propTypes = {
  children: PropTypes.node,
};

export default ListItems;
