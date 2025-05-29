function HomePage() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2 p-8 flex-col text-center md:text-left">
        <div className="flex justify-center align-middle md:justify-start">
          <div className="w-36 mb-10">
            <img
              src="/App-Logo.webp"
              className=" self-center"
              alt="JobTrackr"
            />
          </div>
        </div>
        <h1 className="text-6xl font-extrabold mb-5">Casper</h1>
        <p className="text-lg mb-8 leading-loose font-light opacity-70">
          Instantly identify any dog breed with a snap! Our AI-powered app helps
          you recognize breeds, learn traits, and explore breed history—just by
          taking a photo. Fast, fun, and perfect for every dog lover.
        </p>
        <div className="flex justify-center align-middle md:justify-start">
          <div className=" w-52 ">
            <a href="https://apps.apple.com/us/app/track-your-job-applications/id6642659608">
              <img src="/app-store-download.webp" alt="JobTrackr" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2  p-8 flex justify-center align-middle ">
        <div className=" w-2/3">
          <img src="/screenshot.webp" alt="App Screenshot" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
