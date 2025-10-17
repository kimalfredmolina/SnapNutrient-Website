import React from "react";

const HomePage = () => {
  return (
    <div
      id="home_page"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24"
    >
      {/* Left Section */}
      <div className="flex-1 text-center md:text-center mt-20 md:mt-0">
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-500 leading-tight">
          Track Your <br /> Macros, Fuel Your <br /> Goals
        </h1>
        <p className="text-slate-400 mt-6 text-lg font-medium">
          Get personalized suggestions based on your daily intake and goals.
        </p>

        <button className="bg-emerald-400 hover:bg-cyan-300 transition text-black font-semibold py-3 px-6 rounded-lg mt-8 shadow-md">
          Download Now!
        </button>

        <p className="mt-4 font-semibold text-emerald-600">
          Download the App – It’s Free! <br /> Available on Google Playstore
        </p>
      </div>

      {/* Right Section */}
        <div className="relative flex-1 flex items-center justify-center mt-16 md:mt-0">
          {/* Video Placeholder */}
          <div className="w-78 h-146 bg-black rounded-2xl shadow-lg flex items-center justify-center text-white text-lg font-semibold relative z-10">
            <video
              className="w-full h-full object-cover rounded-2xl"
              controls
              poster="" // <-- optional preview image
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span className="absolute text-center pointer-events-none">
              Video Placeholder
            </span>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
