import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-[#080D2B] py-6">
      <div className="mx-auto grid max-w-8xl grid-cols-1 md:grid-cols-3 gap-10 w-full py-10 px-6">
        <div className="">
          <h2 className="text-xl font-bold mb-4 text-white">Career Craft</h2>
          <p className="text-gray-400 max-w-xs text-xs">Your one-stop solution for creating professional CVs and cover letters.</p>

          <div className="flex text-white mt-4 space-x-6">
            {/* icons */}
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>

        <div>
          <h2 className=" font-bold mb-4 text-white">Quick Links</h2>
            <ul className="flex flex-col gap-2 text-gray-400 text-xs">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">CV Builder</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Cover Letter Builder</a></li>
              <li><a href="/templates" className="hover:text-blue-400">Templates</a></li>
            </ul>         
        </div>

        <div>
          <h2 className="font-bold mb-4 text-white">Support</h2>
            <ul className="flex flex-col gap-2 text-gray-400 text-xs">
              <li><a href="/help" className="hover:text-blue-400">Help Center</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
        </div>
      </div> 

      <div className="container mx-auto text-center text-white mt-4">
        <p className="text-xs">&copy; 2024 Career Craft. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;