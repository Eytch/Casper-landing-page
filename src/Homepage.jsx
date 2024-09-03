function HomePage() {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="w-1/2 p-8">
        <img src="/App-Logo.webp" alt="JobTrackr" className="w-36 h-36 mb-4" />
        <h1 className="text-4xl font-bold mb-2">Job Trackr</h1>
        <p className="text-lg mb-4">A brief description of your app.</p>
        <a
          href="/download"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download App
        </a>
      </div>
      <div className="w-1/2 p-8">
        <img
          src="/path-to-your-screenshot.png"
          alt="App Screenshot"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default HomePage;
