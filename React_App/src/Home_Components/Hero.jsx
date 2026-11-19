import Image from '../assets/Hero-image.png';
import HeroBackground from '../assets/hero-bg.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
      <section
        className="relative isolate overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 min-h-screen items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBackground})` }}
        >

        <div>
          <h2 className="fade-up text-3xl font-bold text-white mb-4">Create a professional CV and cover letter in minutes</h2>
          <p className="fade-up-delay text-gray-300 mb-6">Stand out from the crowd with professional designed CVs and cover letters. Land your dream job with our easy-to-use tools. No design skills needed.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-fade-up-delay bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to="/cv-builder">Create Your CV </Link></button>
            <button className="btn-fade-up-delay bg-transparent text-blue-600 border-2 border-blue-600  hover:text-white font-bold py-2 px-4 rounded"><Link to="/cover-letter-builder">Create a Cover Letter </Link></button>
          </div>
        </div>
        
      </section>
  );
}

export default Hero;