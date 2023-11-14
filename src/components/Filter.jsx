import { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";

function Filter({ placeholder, filterField, options = [] }) {
  const [genre, setGenre] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function onChange(selectedItems) {
    setGenre(selectedItems);

    const value = selectedItems.map((selectedItem) => selectedItem.value);
    searchParams.set(filterField, value.join(","));
    if (selectedItems.length === 0) searchParams.delete(filterField);

    setSearchParams(searchParams);
  }

  return (
    <Select
      isMulti
      value={genre}
      closeMenuOnSelect={false}
      options={options}
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
      onChange={onChange}
      placeholder={placeholder}
      className="react-select-container"
      classNamePrefix="react-select"
    />
  );
}

Filter.propTypes = {
  placeholder: PropTypes.string.isRequired,
  filterField: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Filter;
