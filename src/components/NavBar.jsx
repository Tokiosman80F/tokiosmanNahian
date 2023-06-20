import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="fixed flex justify-between items-center w-full h-20 bg-black text-white px-4 z-50 ">
      <div className="font-signature text-3xl ">Toki Osman</div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
            >
              <Link
                to={link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-3xl text-gray-500 md:hidden"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 z-50">
          {links.map(({ link, id }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer uppercase py-6 text-4xl hover:scale-125 transition duration-200"
              >
                <Link
                  to={link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => {
                    setNav(!nav);
                  }}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
// className="px-4 cursor-pointer uppercase py-6 text-4xl"
