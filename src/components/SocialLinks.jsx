import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import {BsFil}
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Tokiosman80F",
    },
    {
      id: 3,
      child: (
        <>
          Mail <SiGmail size={30} />
        </>
      ),
      href: "mailto:tokiosman@outlook.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/TokiOsman.pdf",
      download: true,
    },
  ];
  console.log(links);
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              download={download}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
