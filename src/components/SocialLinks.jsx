import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import {BsFil}
export const SocialLinks = () => {
  // console.log(links);
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/tokiosman/",
      bg: "bg-sky-500",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Tokiosman80F",
      bg: "bg-purple-600",
    },
    {
      id: 3,
      child: (
        <>
          Mail <SiGmail size={30} />
        </>
      ),
      href: "mailto:tokiosman@outlook.com",
      bg: "bg-red-600",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1t68bfduEeuKEB7LFLRa51UujSKqpoBPQ/view?usp=drive_link",
      download: true,
      bg: "bg-orange-500",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download, bg }) => (
          <li
            key={id}
            className={
              `flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300 ${bg} ` +
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
