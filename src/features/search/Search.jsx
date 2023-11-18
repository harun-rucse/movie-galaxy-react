import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import ListItems from "../../components/ListItems";
import SingleItem from "../../components/SingleItem";
import Topbar from "../../components/Topbar";
import Spinner from "../../components/Spinner";
import { useSearch } from "./useSearch";
import { useEffect, useState } from "react";

function Search() {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  const { data, totalPage, totalResults } = useSearch(query, page);

  useEffect(() => {
    if (!data) return;

    results?.length > 0
      ? setResults((prevResults) => [...prevResults, ...data])
      : setResults(data);
  }, [data]);

  function handleNext() {
    setPage((page) => page + 1);
  }

  return (
    <>
      <Topbar
        title={`Search ${
          totalResults > 1 ? "results" : "result"
        } of '${query}'`}
      ></Topbar>

      <InfiniteScroll
        dataLength={data?.length || []}
        next={handleNext}
        hasMore={page <= totalPage}
        loader={<Spinner />}
      >
        <ListItems>
          {results?.map((item) => (
            <SingleItem
              key={item?.id}
              item={item}
              mediaType={item?.media_type}
              searchResult
            />
          ))}
        </ListItems>
      </InfiniteScroll>
    </>
  );
}

export default Search;
