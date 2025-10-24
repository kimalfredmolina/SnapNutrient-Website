import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div
      id="home_page"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24"
    >
      {/* Left Section */}
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex-1 text-center md:text-center mt-20 md:mt-0">
          <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-500 leading-tight">
            Track Your <br /> Macros, Fuel Your <br /> Goals
          </h1>
          <p className="text-slate-400 mt-6 text-lg font-medium">
            Get personalized suggestions based on your daily intake and goals.
          </p>

          <button className="group relative inline-flex h-12 items-center mt-4 justify-center overflow-hidden rounded-xl bg-emerald-500 hover:bg-emerald-400 px-10 font-bold text-white text-lg duration-500 shadow-xl hover:shadow-emerald-500/50">
          <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
            Download Now!
          </div>
          <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </div>
        </button>

          <p className="mt-4 font-semibold text-emerald-600">
            Download the App – It’s Free! <br /> Available on Google Playstore
          </p>
      </motion.div>

      {/* Right Section */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="relative flex-1 flex items-center justify-center mt-16 md:mt-0">
          {/* Video Placeholder */}
          <div className="w-78 h-146 bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-white text-lg font-semibold relative z-10 overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              poster=""
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span className="absolute text-center pointer-events-none">
              Video Placeholder
            </span>
          </div>
        </motion.div>
    </div>
  );
};

export default HomePage;
