import { FaInstagram, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-600 mb-4">
        Feel free to reach out if you'd like to collaborate or just say hello!
      </p>
      <a
        href="mailto:princekumar404@outlook.com"
        className="text-blue-600 text-lg hover:underline block mb-6"
      >
        pk20287022@gmail.com
      </a>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.instagram.com/ll__prince.xx?igshid=NzZhOTFlYzFmZQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-2xl hover:scale-125 transition-transform duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/yadav.kumer.37/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 text-2xl hover:scale-125 transition-transform duration-200"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://wa.me/7027236462"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 text-2xl hover:scale-125 transition-transform duration-200"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/Prince-2028"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 text-2xl hover:scale-125 transition-transform duration-200"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
