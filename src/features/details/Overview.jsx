import PropTypes from "prop-types";
import CircleRating from "../../components/CircleRating";
import Container from "../../components/Container";
import Image from "../../components/Image";
import PlayButton from "./PlayButton";
import { useConfigure } from "../../hooks/useConfigure";
import { formatDate } from "../../utils";
import VideoPopup from "./VideoPopup";

const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
};

function Overview({ isLoading, data, video, crew }) {
  const { configuration } = useConfigure();

  const director = crew?.filter((c) => c.job === "Director");
  const writer = crew?.filter(
    (c) => c.job === "Screenplay" || c.job === "Story" || c.job === "Writer"
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full h-full md:h-[700px] flex items-center justify-center">
      <div className="w-full h-full absolute top-0 left-0 opacity-20 overflow-hidden">
        <Image
          src={configuration?.backdrop_path + data?.backdrop_path}
          alt="Hero Image"
          className="w-full h-full object-cover object-center "
        />
      </div>

      <div className="w-full h-[250px] absolute left-0 bottom-0 bg-opacity-layer" />

      <Container>
        <div className="flex flex-col md:flex-row items-start gap-12 pt-8 z-20">
          <div className="md:w-[520px]">
            <Image
              src={
                data?.poster_path
                  ? configuration?.backdrop_path + data?.poster_path
                  : "/images/no-poster.png"
              }
              className="rounded-xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {data?.name || data?.title}
            </h2>
            <i className="md:text-lg text-gray-400 -mt-4">{data?.tagline}</i>
            <div className="flex items-center gap-2 -mt-4 relative">
              {data?.genres?.length > 0 &&
                data?.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-xs bg-[var(--pink)] px-2 py-1 rounded-lg"
                  >
                    {genre.name}
                  </span>
                ))}
            </div>

            <div className="flex items-center gap-6">
              <CircleRating
                rating={data?.vote_average}
                className="w-[70px] h-[70px] bg-black"
                textColor="white"
                textSize={45}
              />

              {/* Trailer popup modal */}
              {video?.key && (
                <VideoPopup name="trailer-popup" videoId={video?.key}>
                  <PlayButton />
                </VideoPopup>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xl">Overview</h4>
              <span className="leading-6 text-sm md:text-base">
                {data?.overview}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-5 mt-4 border-b pb-5 border-gray-600">
              {data?.status && (
                <div className="flex gap-2">
                  <span>Status:</span>
                  <span className="text-gray-400">{data?.status}</span>
                </div>
              )}
              {data?.release_date && (
                <div className="flex gap-2">
                  <span>Release Date:</span>
                  <span className="text-gray-400">
                    {formatDate(data?.release_date)}
                  </span>
                </div>
              )}
              {data?.runtime && (
                <div className="flex gap-2">
                  <span>Runtime:</span>
                  <span className="text-gray-400">
                    {toHoursAndMinutes(data?.runtime)}
                  </span>
                </div>
              )}
            </div>

            {director?.length > 0 && (
              <div className="flex gap-2 border-b pb-5 border-gray-600">
                <span>Director:</span>
                <span className="text-gray-400">
                  {director?.map((d) => d?.name).join(", ")}
                </span>
              </div>
            )}

            {writer?.length > 0 && (
              <div className="flex gap-2 border-b pb-5 border-gray-600">
                <span>Writer:</span>
                <span className="text-gray-400">
                  {writer?.map((w) => w?.name).join(", ")}
                </span>
              </div>
            )}

            {data?.created_by?.length > 0 && (
              <div className="flex gap-2 border-b pb-5 border-gray-600">
                <span>Creator:</span>
                <span className="text-gray-400">
                  {data?.created_by?.map((c) => c?.name).join(", ")}
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

Overview.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object.isRequired,
  video: PropTypes.object.isRequired,
  crew: PropTypes.array,
};

export default Overview;
