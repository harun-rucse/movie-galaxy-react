function PageNotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <strong className="text-3xl md:text-6xl">404</strong>
        <strong className="md:text-lg text-gray-300">Page Not Found</strong>
      </div>
    </div>
  );
}

export default PageNotFound;
