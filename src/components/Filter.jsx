import { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";

function Filter({ placeholder, filterField, isMulti, options = [], key }) {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function onChange(selectedItems) {
    setValue(selectedItems);

    const value = isMulti
      ? selectedItems.map((selectedItem) => selectedItem.value)
      : selectedItems.value;

    if (isMulti) {
      searchParams.set(filterField, value.join(","));
      if (selectedItems.length === 0) {
        searchParams.delete(filterField);
        setValue("");
      }
    } else {
      searchParams.set(filterField, value);
    }

    setSearchParams(searchParams);
  }

  return (
    <Select
      key={key}
      isMulti={isMulti}
      value={value}
      closeMenuOnSelect={false}
      isClearable={true}
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

Filter.defaultProps = {
  isMulti: false,
};

Filter.propTypes = {
  placeholder: PropTypes.string.isRequired,
  filterField: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  isMulti: PropTypes.bool,
  key: PropTypes.string.isRequired,
};

export default Filter;
