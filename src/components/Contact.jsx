const Contact = () => {
  return (
    <div name="contact" className="my-container">
      <div className="my-info-container">
        {/* info div */}
        <div className="pb-10">
          <p className="my-title">Contact</p>
          <p className="py-6">Sumbit the for below to get in touch with me</p>
        </div>
        {/* form div*/}
        <div className="flex justify-between items-center">
          <form action="" className="flex flex-col gap-4 w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message "
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="my-button">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
