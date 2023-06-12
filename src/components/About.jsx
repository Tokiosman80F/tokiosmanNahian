const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam
          harum aliquid voluptatem enim exercitationem commodi accusantium, fuga
          eos saepe dolore eveniet quia provident beatae nisi aliquam dolores.
          Ad, facere doloribus non amet voluptatem rem voluptatum quidem error
          eveniet, minus dicta qui temporibus cupiditate ab quaerat. Molestiae
          error aspernatur impedit.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptatum modi assumenda quas totam, aperiam atque aliquid fuga eius
          necessitatibus animi, pariatur voluptate, itaque corporis cumque
          deleniti ea. Fugit, cupiditate?
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
