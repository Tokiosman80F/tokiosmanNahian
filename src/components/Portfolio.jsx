import image from "../assets/pic.jpg";
const Portfolio = () => {
  const cardObj = [
    { id: 1, src: image },
    { id: 2, src: image },
    { id: 3, src: image },
    { id: 4, src: image },
    { id: 5, src: image },
  ];
  return (
    <div name="portfolio" className="my-container-2">
      <div className="my-info-container ">
        {/* flex-1 */}
        <div className="pb-8">
          <p className="my-title">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {/* flex-2 */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {cardObj.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Portfolio;
