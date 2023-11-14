import CircleRating from "../../components/CircleRating";
import Container from "../../components/Container";
import Image from "../../components/Image";
import PlayButton from "./PlayButton";

function Overview() {
  return (
    <div className="w-full h-full md:h-[700px] flex items-center justify-center">
      <div className="w-full h-full absolute top-0 left-0 opacity-20 overflow-hidden">
        <Image
          src="https://image.tmdb.org/t/p/original/xHqTnPtpd9Qd7R0fVtoqxZYM67Q.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover object-center "
        />
      </div>

      <div className="w-full h-[250px] absolute left-0 bottom-0 bg-opacity-layer" />

      <Container>
        <div className="flex flex-col md:flex-row items-start gap-12 pt-8 z-20">
          <div className="md:w-[520px]">
            <Image
              src="https://image.tmdb.org/t/p/original/hYaKxnvqQt4pMtFy5KptUYJo1S0.jpg"
              className="rounded-xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Saw X (2023)</h2>
            <i className="md:text-lg text-gray-400 -mt-4">
              Witness the return of Jigsaw
            </i>
            <div className="flex items-center gap-2 -mt-4">
              <span className="text-xs bg-[var(--pink)] px-2 py-1 rounded-lg">
                Horror
              </span>
              <span className="text-xs bg-[var(--pink)] px-2 py-1 rounded-lg">
                Thriller
              </span>
            </div>

            <div className="flex items-center gap-6">
              <CircleRating
                rating={8}
                className="w-[70px] h-[70px] bg-black"
                textColor="white"
                textSize={45}
              />

              <PlayButton />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xl">Overview</h4>
              <span className="leading-6 text-sm md:text-base">
                Between the events of 'Saw' and 'Saw II', a sick and desperate
                John Kramer travels to Mexico for a risky and experimental
                medical procedure in hopes of a miracle cure for his cancer,
                only to discover the entire operation is a scam to defraud the
                most vulnerable. Armed with a newfound purpose, the infamous
                serial killer returns to his work, turning the tables on the con
                artists in his signature visceral way through devious, deranged,
                and ingenious traps.
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-5 mt-4 border-b pb-5 border-gray-600">
              <div className="flex gap-2">
                <span>Status:</span>
                <span className="text-gray-400">Released</span>
              </div>
              <div className="flex gap-2">
                <span>Release Date:</span>
                <span className="text-gray-400">Sep 26, 2023</span>
              </div>
              <div className="flex gap-2">
                <span>Runtime:</span>
                <span className="text-gray-400">1h 58m</span>
              </div>
            </div>

            <div className="flex gap-2 border-b pb-5 border-gray-600">
              <span>Director:</span>
              <span className="text-gray-400">Kevin Greutert</span>
            </div>

            <div className="flex gap-2 border-b pb-5 border-gray-600">
              <span>Writer:</span>
              <span className="text-gray-400">
                Josh Stolberg, Pete Goldfinger
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Overview;
