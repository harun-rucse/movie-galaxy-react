import CircleRating from "./CircleRating";
import Image from "./Image";

function SingleItem() {
  return (
    <div className="flex-shrink-0 w-[160px] md:w-[calc(20%-16px)] relative">
      <div className="relative w-full h-full">
        <Image
          src="https://image.tmdb.org/t/p/original/hYaKxnvqQt4pMtFy5KptUYJo1S0.jpg"
          className="rounded-xl w-full h-full object-cover object-center"
        />
        <div className="absolute right-1 bottom-3 flex items-center gap-2 flex-wrap">
          <span className="bg-[var(--pink)] text-xs px-1 py-[2px] rounded-md">
            Comedy
          </span>
          <span className="bg-[var(--pink)] text-xs px-1 py-[2px] rounded-md">
            Drama
          </span>
        </div>
      </div>

      <div className="absolute left-2 bottom-[60px] mb-2">
        <CircleRating rating={8} className="w-[50px] h-[50px] bg-white" />
      </div>

      <div className="pt-10 w-full">
        <h2 className="text-xl leading-6 line-clamp-1 text-ellipsis mb-2">
          The Other Zoey 1233333
        </h2>
        <span className="opacity-50 text-sm">Oct 19, 2023</span>
      </div>
    </div>
  );
}

export default SingleItem;
