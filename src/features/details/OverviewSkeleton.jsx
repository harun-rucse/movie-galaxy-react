import Container from "../../components/Container";

function OverviewSkeleton() {
  return (
    <div className="w-full h-full md:h-[700px] flex items-center justify-center">
      <Container>
        <div className="w-full flex flex-col md:flex-row items-start gap-12 pt-6 z-20">
          <div className="md:w-[520px] aspect-[1/1.4] rounded-xl mb-3 skeleton" />

          <div className="w-full flex flex-col gap-8">
            <div className="w-[40%] h-6 skeleton" />
            <div className="w-[70%] h-4 skeleton" />

            <div className="flex items-center gap-4 w-[20%]">
              <div className="w-full h-4 skeleton" />
              <div className="w-full h-4 skeleton" />
            </div>

            <div className="w-[60%] h-6 skeleton" />

            <div className="w-[20%] h-6 skeleton" />
            <div className="w-full h-4 skeleton" />
            <div className="w-full h-4 skeleton" />
            <div className="w-full h-4 skeleton" />
            <div className="w-full h-4 skeleton" />

            <div className="flex items-center gap-4 w-[60%]">
              <div className="w-full h-4 skeleton" />
              <div className="w-full h-4 skeleton" />
              <div className="w-full h-4 skeleton" />
            </div>

            <div className="w-[40%] h-4 skeleton" />
            <div className="w-[50%] h-4 skeleton" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OverviewSkeleton;
