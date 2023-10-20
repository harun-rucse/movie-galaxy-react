import Image from "../../components/Image";
import Container from "../../components/Container";
import InputBox from "./InputBox";

function HeroBanner() {
  return (
    <div className="w-full h-[450px] md:h-[700px] flex items-center justify-center relative">
      <div className="w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden">
        <Image
          src="https://image.tmdb.org/t/p/original/xHqTnPtpd9Qd7R0fVtoqxZYM67Q.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover object-center "
        />
      </div>

      <div className="w-full h-[250px] absolute left-0 bottom-0 bg-opacity-layer" />

      <Container>
        <div className="w-full md:max-w-[800px] h-full flex flex-col gap-1 justify-center items-center text-white z-20">
          <h1 className="text-5xl md:text-[5.5rem] font-bold">Welcome.</h1>
          <p className="text-lg md:text-2xl text-center">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <InputBox />
        </div>
      </Container>
    </div>
  );
}

export default HeroBanner;
