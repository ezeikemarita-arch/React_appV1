import { useEffect, useRef, useState } from "react";

function HowItWorks() {
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
    className={`bg-gray-100 py-16 px-8 transition-all duration-1000 5s ease-out ${
      isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-15"
    }`} >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[#1E2F4F]">Simple Process</p>
          <h2 className="text-2xl font-bold text-gray-900 text-center">How It Works</h2>
          <p className="mt-2 text-gray-600 text-center">Create your CV and cover letter in just a few simple steps.</p>
      </div>


      <div className="mx-auto max-w-7xl px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#080D2B] text-lg font-bold text-white">1</div>
          <h3 className="text-lg font-bold text-[#1E2F4F]">Choose a Template</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">Select from a variety of professionally designed CV templates that suit your style and industry.</p>
        </div>

        <div className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#080D2B] text-lg font-bold text-white">2</div>
          <h3 className="text-lg font-bold text-[#1E2F4F]">Fill in Your Information</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">Provide details about your education, experience, and skills in the provided fields.</p>
        </div>

        <div className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#080D2B] text-lg font-bold text-white">3</div>
          <h3 className="text-lg font-bold text-[#1E2F4F]">Download Your CV</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">Download your completed CV in a format that's ready to use for job applications.</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;