import { FiDownload } from "react-icons/fi";
import Lottie from "lottie-react";
import avatar from "../assets/heroImh.json";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black
    to-gray-800"
    >
      {/* main */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        {/* right side content */}
        <div className=" flex flex-col justify-center h-full">
          <h1
            className="text-4xl sm:text-7xl font-bold text-white
          "
          >
            Hello I'm a Full stack developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 Year of experience building and designing sde.Current I
            have no work so i start building this portfilio so that i can get a
            job.Now give me job
          </p>

          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 gap-2">
              Portfolio
              <span className="animate-pulse">
                <FiDownload />
              </span>
            </button>
          </div>
        </div>
        {/* left side image */}
        <div>
          <div>
            <Lottie animationData={avatar}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
