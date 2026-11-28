import { useState } from 'react';
import Header from '../Home_Components/Header';
import ModernTemplate1 from '../Template_Component/ModernTemplate1';
import ModernTemplate2 from '../Template_Component/ModernTemplate2';
import ModernTemplate3 from '../Template_Component/ModernTemplate3';

import { Link, useSearchParams} from 'react-router-dom';

import ProfessionalTemplate1 from '../Template_Component/ProfessionalTemplate1';
import ProfessionalTemplate2 from '../Template_Component/ProfessionalTemplate2';
import ProfessionalTemplate3 from '../Template_Component/ProfessionalTemplate3';

import GraduateTemplate1 from '../Template_Component/GraduateTemplate1';
import GraduateTemplate2 from '../Template_Component/GraduateTemplate2';
import GraduateTemplate3 from '../Template_Component/GraduateTemplate3';





function Templates(){

  const [searchParams] = useSearchParams();

  const [activeCategory, setActiveCategory] = useState (
    searchParams.get("category") || "Modern"
  );

  return(
    <>
      <Header/>


      <main>
        {/* HERO SECTION */}
        <section className='bg-[#080D2B] text-white text-center py-20 px-6 relative'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Choose Your <span className='bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A855F7] bg-clip-text text-transparent'>CV Template</span></h1>
          <p className='text-gray-300 max-w-150 mx-auto text-lg'>Pick a design that fits your style and profession. You can preview and use any template for your CV.</p>
        </section>



        {/* CATEGORY NAVIGATION */}
        <section className='py-10 px-6'>
          <div className='flex align-center justify-center gap-4 flex-wrap py-2 px-4 bg-[#080D2B] border border-gray-500 rounded-full absolute top-[48%] left-[35%]'>
            <div className=''>
              <button className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === "Modern" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveCategory("Modern")}
              >
              Modern
              </button>

              <button className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === "Professional" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveCategory("Professional")}
              >
                Professional
              </button>

              <button className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === "Graduate" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveCategory("Graduate")}
              >
                Graduate
              </button>
            </div>
          </div>
        </section>





        {/* MODERN TEMPLATES */}
        <section className=''>
          {activeCategory === "Modern" && (
            <div className='ml-6 mt-8'>
              <h2 className='font-bold text-2xl text-[#080D2B]'>Modern CV Templates</h2>
              <p className='text-sm text-gray-600'>Clean, stylish and contemporary design</p>
            </div>
          )}


          <div className="px-8 py-9">
            {activeCategory === "Modern" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* MODERN TEMPLATE 1 */}
                <div className="bg-gray-100 rounded-xl shadow-md p-4">
                  <div className="relative h-[500px] overflow-hidden">
                    <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                      <ModernTemplate1 />
                    </div>
                  </div>

                  <div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E2F4F] mt-4 mb-2">Midnight Elegance</h3>
                      <p className='text-sm text-gray-500'></p>
                    </div>
                    

                    <div className="flex justify-between mt-4 align-center gap-4">
                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full ">
                        <Link to="/templates">View preview</Link>
                      </button>

                      <Link
                        to="/cv-builder"
                        state={{ selectedTemplate: "ModernTemplate1" }}
                        className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full text-center"
                      >
                        Use Template
                      </Link>
                    </div>
                  </div>
                </div>




                {/* MODERN TEMPLATE 2 */}
                <div className="bg-gray-100 rounded-xl shadow-md p-4">
                  <div className="relative h-[500px] overflow-hidden">
                    <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                      <ModernTemplate2 />
                    </div>
                  </div>


                  <div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E2F4F] mt-4 mb-2">Classic Minimal</h3>
                      <p className='text-sm text-gray-500'></p>
                    </div>
                    

                    <div className="flex justify-between mt-4 align-center gap-4">
                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">View preview</Link>
                      </button>

                      <Link
                        to="/cv-builder"
                        state={{ selectedTemplate: "ModernTemplate2" }}
                        className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full text-center"
                      >
                        Use Template
                      </Link>
                    </div>
                  </div>
                </div>



                {/* MODERN TEMPLATE 3 */}
                <div className="bg-gray-100 rounded-xl shadow-md p-4">
                  <div className="relative h-[500px] overflow-hidden">
                    <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                      <ModernTemplate3 />
                    </div>
                  </div>

                  
                  <div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E2F4F] mt-4 mb-2">Sage Elegance</h3>
                      <p className='text-sm text-gray-500'></p>
                    </div>
                    

                    <div className="flex justify-between mt-4 align-center gap-4">
                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">View preview</Link>
                      </button>

                      <Link
                        to="/cv-builder"
                        state={{ selectedTemplate: "ModernTemplate3" }}
                        className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full text-center"
                      >
                        Use Template
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </section>
        






        {/* PROFESSIONAL TEMPLATES */}
        <section className=''>
          {activeCategory === "Professional" && (
            <div className='ml-6 mt-8'>
              <h2 className='font-bold text-2xl text-[#080D2B]'>Professional CV Templates</h2>
              <p className='text-sm text-gray-600'>Formal, polished and corporate feel</p>
            </div>
          )}


          <div className="px-8 py-9">
            {activeCategory === "Professional" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* PROFESSIONAL TEMPLATE 1 */}
                <div className="bg-gray-100 rounded-xl shadow-md p-4">
                  <div className="relative h-[500px] overflow-hidden">
                    <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                      <ProfessionalTemplate1 />
                    </div>
                  </div>

                  <div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E2F4F] mt-4 mb-2"></h3>
                      <p className='text-sm text-gray-500'></p>
                    </div>
                    

                    <div className="flex justify-between mt-4 align-center gap-4">
                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full ">
                        <Link to="/templates">View preview</Link>
                      </button>

                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">Use Template</Link>
                      </button>
                    </div>
                  </div>
                </div>




                {/* PROFESSIONAL TEMPLATE 2 */}
                <div className="bg-gray-100 rounded-xl shadow-md p-4">
                  <div className="relative h-[500px] overflow-hidden">
                    <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                      <ProfessionalTemplate2 />
                    </div>
                  </div>


                  <div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E2F4F] mt-4 mb-2"></h3>
                      <p className='text-sm text-gray-500'></p>
                    </div>
                    

                    <div className="flex justify-between mt-4 align-center gap-4">
                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">View preview</Link>
                      </button>

                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">Use Template</Link>
                      </button>
                    </div>
                  </div>
                </div>



                {/* PROFESSIONAL TEMPLATE 3 */}
                <div className="bg-gray-100 rounded-xl shadow-md p-4">
                  <div className="relative h-[500px] overflow-hidden">
                    <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                      <ProfessionalTemplate3 />
                    </div>
                  </div>

                  
                  <div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E2F4F] mt-4 mb-2"></h3>
                      <p className='text-sm text-gray-500'></p>
                    </div>
                    

                    <div className="flex justify-between mt-4 align-center gap-4">
                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">View preview</Link>
                      </button>

                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">Use Template</Link>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </section>














        {/* GRADUATE TEMPLATES */}
        <section className=''>
          {activeCategory === "Graduate" && (
            <div className='ml-6 mt-8'>
              <h2 className='font-bold text-2xl text-[#080D2B]'>Graduate CV Templates</h2>
              <p className='text-sm text-gray-600'>Modern, clean and student-friendly</p>
            </div>
          )}


          <div className="px-8 py-9">
            {activeCategory === "Graduate" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* GRADUATE TEMPLATE 1 */}
                <div className="bg-gray-100 rounded-xl shadow-md p-4">
                  <div className="relative h-[500px] overflow-hidden">
                    <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                      <GraduateTemplate1 />
                    </div>
                  </div>

                  <div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E2F4F] mt-4 mb-2"></h3>
                      <p className='text-sm text-gray-500'></p>
                    </div>
                    

                    <div className="flex justify-between mt-4 align-center gap-4">
                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full ">
                        <Link to="/templates">View preview</Link>
                      </button>

                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">Use Template</Link>
                      </button>
                    </div>
                  </div>
                </div>




                {/* GRADUATE TEMPLATE 2 */}
                <div className="bg-gray-100 rounded-xl shadow-md p-4">
                  <div className="relative h-[500px] overflow-hidden">
                    <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                      <GraduateTemplate2   />
                    </div>
                  </div>


                  <div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E2F4F] mt-4 mb-2"></h3>
                      <p className='text-sm text-gray-500'></p>
                    </div>
                    

                    <div className="flex justify-between mt-4 align-center gap-4">
                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">View preview</Link>
                      </button>

                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">Use Template</Link>
                      </button>
                    </div>
                  </div>
                </div>



                {/* GRADUATE TEMPLATE 3 */}
                <div className="bg-gray-100 rounded-xl shadow-md p-4">
                  <div className="relative h-[500px] overflow-hidden">
                    <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                      <GraduateTemplate3 />
                    </div>
                  </div>

                  
                  <div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E2F4F] mt-4 mb-2"></h3>
                      <p className='text-sm text-gray-500'></p>
                    </div>
                    

                    <div className="flex justify-between mt-4 align-center gap-4">
                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">View preview</Link>
                      </button>

                      <button className="mt-4 bg-[#080D2B] hover:bg-[#172B3A] text-white font-bold py-2 px-3 rounded w-full">
                        <Link to="/templates">Use Template</Link>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </section>
      </main>
    
    </>
  )
}

export default Templates;