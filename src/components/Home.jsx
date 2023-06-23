import { FiArrowRight } from "react-icons/fi";
import Lottie from "lottie-react";
import avatar from "../assets/heroImh.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  // console.log(links);
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/tokiosman/",
      bg: "bg-sky-500",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Tokiosman80F",
      bg: "bg-purple-600",
    },
    {
      id: 3,
      child: (
        <>
          <SiGmail size={30} />
        </>
      ),
      href: "mailto:tokiosman@outlook.com",
      bg: "bg-red-600",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1t68bfduEeuKEB7LFLRa51UujSKqpoBPQ/view?usp=drive_link",
      download: true,
      bg: "bg-orange-500 ",
    },
  ];
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
            className="text-5xl sm:text-7xl font-bold text-white
          "
          >
            Hello I&apos;m a Full stack developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 Year of experience building and designing sde.Current I
            have no work so i start building this portfilio so that i can get a
            job.Now give me job
          </p>

          <div className="flex items-center justify-between">
            <button className="hidden my-button lg:flex items-center gap-2">
              Portfolio
              <span className=" hover:rotate-90 duration-300">
                <FiArrowRight />
              </span>
            </button>
            {/* LINKS */}
            <div className="flex  gap-5 lg:hidden ">
              {links.map(({ id, child, href, download, bg }) => (
                <div key={id} className="">
                  <a
                    href={href}
                    download={download}
                    className={`flex justify-center items-center w-10 h-10  text-white ${bg} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* left side image */}
        <div className="ml-16 ">
          <div>
            <Lottie animationData={avatar}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
