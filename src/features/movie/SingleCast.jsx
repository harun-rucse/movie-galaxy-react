import Image from "../../components/Image";

function SingleCast() {
  return (
    <div className="w-[180px] flex-shrink-0 flex flex-col gap-2">
      <Image
        src="https://image.tmdb.org/t/p/original/qZdFp18btpQJfDoknxr7DgfRpcB.jpg"
        alt=""
        className="w-28 md:w-32 h-28 md:h-32 rounded-full object-cover object-top overflow-hidden"
      />

      <div className="space-y-2">
        <h4 className="md:text-lg font-semibold">Sophia Di Martino</h4>
        <span className="text-sm text-gray-500">Sylvie / The Variant</span>
      </div>
    </div>
  );
}

export default SingleCast;
