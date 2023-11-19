import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import ListItems from "../../components/ListItems";
import SingleItem from "../../components/SingleItem";
import Topbar from "../../components/Topbar";
import Spinner from "../../components/Spinner";
import { useSearch } from "./useSearch";

function Search() {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  const { data, totalPage, totalResults } = useSearch(query, page);

  useEffect(() => {
    setPage(1);
    setResults([]);
  }, [query]);

  useEffect(() => {
    if (!data) return;

    setResults((prevResults) => [...prevResults, ...data]);
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
          {results?.map((item, i) => (
            <SingleItem
              key={i}
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
