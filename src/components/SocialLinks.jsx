import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// import {BsFil}
const SocialLinks = () => {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
