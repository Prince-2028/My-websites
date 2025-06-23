const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 tracking-wide">
          Prince Kumar
        </div>
        <nav>
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer transition">
              <a href="#hero"> Home</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition">
              <a href="#projects"> Projects</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition">
              <a href="#github">Experience</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition">
              About
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition">
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
             <a href="#Contact">Contact</a>
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-blue-600 text-2xl">&#9776;</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
