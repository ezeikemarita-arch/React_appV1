import mordernCV from "../assets/modern1-cv.jpg";
import professionalCV from "../assets/professional1-cv.jpg";
import graduateCV from "../assets/graduate1-cv.jpg";
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react";

function Template() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
  }, []);


  return (
    <section
      ref={sectionRef}
      className={`py-16 px-8 transition-all duration-1000 5s ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      >

      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Choose a CV Template That Fits Your Needs</h2>
          <p className="mt-4 text-gray-600">Explore professional design templates and create a CV that make lasting impressions.</p>
        </div>

        <article className="fade-in grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src={mordernCV} alt="Modern CV" className="transition-transform duration-500 hover:scale-105"/>
            <h3 className="text-xl font-bold text-[#1E2F4F] mt-4">Modern CV</h3>
 
            <p className="text-gray-600">A clean and modern template for professionals.</p>

            <button className="mt-4 bg-[#080D2B] hover:bg- text-white font-bold py-2 px-12 rounded w-full">
              <Link to="/templates">View more Template</Link>
            </button>
          </div>
          
          {/* card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src={professionalCV} alt="Professional CV" className="transition-transform duration-500 hover:scale-105"/>

            <h3 className="text-xl font-bold text-[#1E2F4F] mt-4">Professional CV</h3>

            <p className="text-gray-600">A professional template for career-focused individuals.</p>

            <button className="mt-4 bg-[#080D2B] hover:bg- text-white font-bold py-2 px-12 rounded w-full">
              <Link to="/templates">View more Template</Link>
            </button>
          </div>

          {/* card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src={graduateCV} alt="Graduate CV" className="transition-transform duration-500 hover:scale-105"/>

            <h3 className="text-xl font-bold text-[#1E2F4F] mt-4">Graduate CV</h3>

            <p className="text-gray-600">A template designed for graduate and entry-level professionals.</p>

            <button className="mt-4 bg-[#080D2B] hover:bg- text-white font-bold py-2 px-12 rounded w-full">
              <Link to="/templates">View more Template</Link>
            </button>
          </div>
        </article>
      </div>

      
    </section>
  );
}

export default Template;