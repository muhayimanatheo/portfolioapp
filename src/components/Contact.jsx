function Contact() {
  return (
    <div
      name="contact "
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 h-auto-focus"
    >
      <form
        method="POST"
        action="https://getform.io/f/navvydra"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-[#fde047] text-gray-300">
            Contacts
          </p>
          <p className="text-2xl font-bold text-gray-300 py-4">
            Contact with me ifr you want any suport relate to this experiences.
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          className="bg-[#ccd6f6] my-4 p-2"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className="bg-[#ccd6f6] p-2"
        ></textarea>
        <button className="text-white border-2 py-2 my-2  hover:bg-[#fde047] hover:border-[#fde047] hover:font-bold text-2xl ease-in-out transition duration-500">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
