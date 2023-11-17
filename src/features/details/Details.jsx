import { useParams } from "react-router-dom";
import OfficialVideos from "./OfficialVideos";
import Overview from "./Overview";
import SimilarMovies from "./SimilarMovies";
import TopCast from "./TopCast";
import { useDetails } from "./useDetails";
import { useVideos } from "./useVideos";
import { useMetadata } from "./useMetadata";
import { useSimilarVideos } from "./useSimilarVideos";
import Recommendation from "./Recommendation";
import { useRecommendations } from "./useRecommendations";

function Details() {
  const { mediaType, id } = useParams();
  const { isLoading, data } = useDetails(mediaType, id);
  const { isLoading: isLoadingVideos, data: videos } = useVideos(mediaType, id);
  const { isLoading: isLoadingMetadata, data: metadata } = useMetadata(
    mediaType,
    id
  );
  const { isLoading: isLoadingSimilar, data: similarVideos } = useSimilarVideos(
    mediaType,
    id
  );
  const { isLoading: isLoadingRecommendation, data: recommendations } =
    useRecommendations(mediaType, id);

  return (
    <div className="w-full min-h-full flex flex-col gap-16 pt-[60px]">
      <Overview
        isLoading={isLoading || isLoadingVideos || isLoadingMetadata}
        data={data}
        video={videos?.results?.[0]}
        crew={metadata?.crew}
      />
      <TopCast isLoading={isLoadingMetadata} data={metadata?.cast} />
      <OfficialVideos isLoading={isLoadingVideos} data={videos?.results} />
      <SimilarMovies
        isLoading={isLoadingSimilar}
        data={similarVideos?.results}
        mediaType={mediaType}
      />
      <Recommendation
        isLoading={isLoadingRecommendation}
        data={recommendations?.results}
        mediaType={mediaType}
      />
    </div>
  );
}

export default Details;
