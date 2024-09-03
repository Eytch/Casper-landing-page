function HomePage() {
  return (
    <div className="flex items-center justify-between p-8">
      <div className="w-1/2 p-8">
        <img
          src="/path-to-your-logo.png"
          alt="App Logo"
          className="w-24 h-24 mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">App Name</h1>
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
