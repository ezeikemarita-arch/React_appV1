import {useState} from "react";
import {Link} from 'react-router-dom';  //Allows users to navigate between pages without reloading the entire page

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0B102B]">
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white relative">
      <h1 className="text-xl font-bold"><span className="text-blue-400">Career</span> Craft</h1>

      <button 
      className="md:hidden text-white"
      onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>


      <nav className={`${isOpen ? "block" : "hidden"} absolute right-0 top-full bg-gray-900 p-4 rounded-lg md:static md:flex md:flex-row md:space-x-12 md:items-center md:gap-60 md:w-auto md:p-0`}>
        <ul className="md:flex block space-y-4 md:space-y-0 md:space-x-6 text-sm">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/cv-builder" className="hover:text-blue-400">CV Builder</Link></li>
          <li><Link to="/cover-letter-builder" className="hover:text-blue-400">Cover Letter Builder</Link></li>
          <li><Link to="/templates" className="hover:text-blue-400">Templates</Link></li>
        </ul>

        <div className="md:flex items-center space-x-4 text-sm mt-8 md:mt-0">
          <Link to="/" className="hover:text-white border-2 border-blue-600 text-blue-600 font-bold py-2 px-4 rounded text-center block md:inline-block md:border-none md:text-white md:bg-transparent md:hover:text-blue-400">
            Login
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-2 md:mt-0">
            <Link href="/">Get Started</Link>
          </button>
        </div>
      </nav>
    </header>
    </div>

  );
}



export default Header;
