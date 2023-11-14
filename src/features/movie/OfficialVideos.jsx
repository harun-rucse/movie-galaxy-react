import Container from "../../components/Container";
import ScrollContainer from "../../components/ScrollContainer";
import SingleOfficialVideo from "./SingleOfficialVideo";

function OfficialVideos() {
  return (
    <Container>
      <div className="w-full z-20 space-y-4">
        <h2 className="text-2xl text-white">Official Videos</h2>
        <ScrollContainer>
          <SingleOfficialVideo />
          <SingleOfficialVideo />
          <SingleOfficialVideo />
          <SingleOfficialVideo />
        </ScrollContainer>
      </div>
    </Container>
  );
}

export default OfficialVideos;
