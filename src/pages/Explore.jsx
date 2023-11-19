import { useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import ExploreList from "../features/explore/ExploreList";
import Operations from "../features/explore/Operations";

function Explore() {
  const { mediaType } = useParams();

  return (
    <div className="pt-[90px] space-y-5">
      <Topbar
        title={`${
          mediaType === "movie" ? "Explore Movies" : "Explore TV Shows"
        }`}
      >
        <Operations mediaType={mediaType} />
      </Topbar>

      <ExploreList mediaType={mediaType} />
    </div>
  );
}

export default Explore;
