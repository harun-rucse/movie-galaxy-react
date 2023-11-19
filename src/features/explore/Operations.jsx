import PropTypes from "prop-types";
import Filter from "../../components/Filter";

function Operations({ mediaType }) {
  return (
    <div className="flex w-full flex-col md:flex-row items-center gap-2 md:gap-4">
      <Filter
        key={`${mediaType}-filter`}
        isMulti
        placeholder="Select genres"
        filterField="genres"
        options={[
          { value: "28", label: "Action" },
          { value: "12", label: "Adventure" },
          { value: "16", label: "Animation" },
          { value: "35", label: "Comedy" },
          { value: "80", label: "Crime" },
          { value: "99", label: "Documentary" },
          { value: "10751", label: "Family" },
          { value: "27", label: "Horror" },
          { value: "10749", label: "Romantic" },
        ]}
      />
      <Filter
        key={`${mediaType}-sort`}
        placeholder="Sort by"
        filterField="sortBy"
        options={[
          { value: "popularity.desc", label: "Popularity Descending" },
          { value: "popularity.asc", label: "Popularity Ascending" },
          { value: "vote_average.desc", label: "Rating Descending" },
          { value: "vote_average.asc", label: "Rating Ascending" },
          {
            value: "primary_release_date.desc",
            label: "Release Date Descending",
          },
          {
            value: "primary_release_date.asc",
            label: "Release Date Ascending",
          },
          { value: "original_title.asc", label: "Title (A-Z)" },
        ]}
      />
    </div>
  );
}

Operations.propTypes = {
  mediaType: PropTypes.string.isRequired,
};

export default Operations;
