import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import ListItems from "../../components/ListItems";
import SingleItem from "../../components/SingleItem";
import Spinner from "../../components/Spinner";
import { useExplore } from "./useExplore";

function ExploreList({ mediaType }) {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  const filterValues = searchParams.get("genres");
  const sortByValue = searchParams.get("sortBy");
  const { data, totalPage } = useExplore(
    mediaType,
    page,
    filterValues,
    sortByValue
  );

  useEffect(() => {
    setPage(1);
    setResults([]);
  }, [filterValues, sortByValue, mediaType]);

  useEffect(() => {
    if (!data) return;

    setResults((prevResults) => [...prevResults, ...data]);
  }, [data]);

  function handleNext() {
    setPage((page) => page + 1);
  }

  return (
    <InfiniteScroll
      dataLength={data?.length || []}
      next={handleNext}
      hasMore={page <= totalPage}
      loader={<Spinner />}
    >
      <ListItems>
        {results?.map((item, i) => (
          <SingleItem key={i} item={item} mediaType={mediaType} />
        ))}
      </ListItems>
    </InfiniteScroll>
  );
}

ExploreList.propTypes = {
  mediaType: PropTypes.string.isRequired,
};

export default ExploreList;
