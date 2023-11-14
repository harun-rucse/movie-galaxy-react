import { useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import SearchList from "../features/search/SearchList";

function Search() {
  const { title } = useParams();

  return (
    <div className="pt-[90px] space-y-5">
      <Topbar title={`Search results of '${title}'`}></Topbar>

      <SearchList />
    </div>
  );
}

export default Search;
