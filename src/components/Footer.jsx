import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 text-white py-5 mt-10 shadow-inner">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-blue-400 to-green-400 opacity-70 rounded-t-lg"></div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img
            src="https://avatars.githubusercontent.com/u/15894313?v=4"
            alt="Prince Kumar"
            className="w-10 h-10 rounded-full border-2 border-blue-400 shadow"
          />
          <span className="text-lg font-bold tracking-wide">Prince Kumar</span>
        </div>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.instagram.com/ll__prince.xx?igshid=NzZhOTFlYzFmZQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 hover:scale-125 transition-all duration-200"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/yadav.kumer.37/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-125 transition-all duration-200"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/Prince-2028"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 hover:scale-125 transition-all duration-200"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        <div className="text-sm text-gray-300 text-center md:text-right">
          &copy; {new Date().getFullYear()} Prince Kumar.
          <br className="md:hidden" /> All rights reserved.
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 via-pink-400 to-green-400 opacity-70 rounded-b-lg"></div>
    </footer>
  );
};

export default Footer;
