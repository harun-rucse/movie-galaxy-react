import Filter from "../../components/Filter";

function Operations() {
  return (
    <div className="flex w-full flex-col md:flex-row items-center gap-2 md:gap-4">
      <Filter
        placeholder="Select genres"
        filterField="genre"
        options={[
          { value: "action", label: "Action" },
          { value: "adventure", label: "Adventure" },
          { value: "animation", label: "Animation" },
          { value: "comedy", label: "Comedy" },
          { value: "crime", label: "Crime" },
          { value: "documentary", label: "Documentary" },
          { value: "thriller", label: "Thriller" },
          { value: "horror", label: "Horror" },
          { value: "romantic", label: "Romantic" },
        ]}
      />
      <Filter
        placeholder="Sort by"
        filterField="genre"
        options={[
          { value: "popularity_desc", label: "Popularity Descending" },
          { value: "popularity_asc", label: "Popularity Ascending" },
          { value: "vote_average_desc", label: "Rating Descending" },
          { value: "vote_average_asc", label: "Rating Ascending" },
          {
            value: "primary_release_date_desc",
            label: "Release Date Descending",
          },
          {
            value: "primary_release_date_asc",
            label: "Release Date Ascending",
          },
          { value: "original_title_asc", label: "Title (A-Z)" },
        ]}
      />
    </div>
  );
}

export default Operations;
