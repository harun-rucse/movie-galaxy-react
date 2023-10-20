function InputBox() {
  return (
    <div className="md:w-[calc(100%-150px)] h-[50px] md:h-[60px] flex items-center mt-8">
      <input
        type="text"
        placeholder="Search for a movie or tv show..."
        className="w-full h-full border-none focus:outline-none text-sm md:text-lg text-black bg-white px-5 rounded-[30px_0_0_30px]"
      />
      <button className="bg-gradient w-[100px] md:w-[150px] h-full text-sm md:text-lg border-none outline-none rounded-[0_30px_30px_0]">
        Search
      </button>
    </div>
  );
}

export default InputBox;
