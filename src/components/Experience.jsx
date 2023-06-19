import html from "../../public/html.png";
import css from "../../public/css.png";
import node from "../../public/node.svg";
import js from "../../public/js.png";
import mongo from "../../public/mongo.png";
import react from "../../public/react.png";
import tailwind from "../../public/tailwind.png";
import bootstrap from "../../public/bootstrap.png";
import github from "../../public/github.png";
const Experience = () => {
  const technolgy = [
    { id: 1, src: html, title: "Html", style: "shadow-orange-500" },
    { id: 2, src: css, title: "Css", style: "shadow-sky-500" },
    { id: 3, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-blue-500" },
    { id: 5, src: node, title: "Node", style: "shadow-green-500" },
    { id: 6, src: tailwind, title: "tailwind", style: "shadow-sky-600" },
    { id: 7, src: bootstrap, title: "Bootstrap", style: "shadow-purple-500" },
    { id: 8, src: mongo, title: "MongoDB", style: "shadow-green-500" },
    { id: 9, src: github, title: "GitHub", style: "shadow-gray-500" },
  ];
  return (
    <div name="experience" className="my-container pt-16">
      <div className="my-info-container">
        <div className="pb-8">
          <p className="my-title">Experience</p>
          <p className="py-10">This are the Technology i have worked with</p>
        </div>
        {/* ------------ */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {technolgy.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500  rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
