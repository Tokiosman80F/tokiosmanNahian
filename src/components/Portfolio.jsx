import Image from "../assets/pic.jpg";
const Portfolio = () => {
  return (
    <div className="my-container">
      <div className="my-info-container">
        {/* flex-1 */}
        <div className="pb-8">
          <p className="my-title">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {/* flex-2 */}
        <div>
          <div className="">
            <img src={Image} alt="" />
          </div>
          <button>Demo</button>
          <button>Code</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
