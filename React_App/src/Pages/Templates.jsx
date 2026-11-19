import Header from '../Home_Components/Header';
import ModernTemplate from '../Template_Component/modernTemplate';

function Templates(){
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
              <button className='hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium'>
                Modern
              </button>

              <button className='hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium'>
                professional
              </button>

              <button className='hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium'>
                Graduate
              </button>
            </div>
          </div>
        </section>



        {/* TEMPLATES */}
        <section className='px-4 '>
          <div>
            <h2 className='font-bold text-2xl text-[#080D2B]'>Modern CV Templates</h2>
            <p className='text-sm text-gray-600'>Clean, stylish and contemporary design</p>
          </div>
          

          <div className="px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* TEMPLATE 1 */}
              <div className="bg-gray-100 rounded-xl shadow-md p-4">
                <div className="relative h-[500px] overflow-hidden">
                  <div className="absolute top-1 left-0 origin-top-left scale-[0.5]">
                    <ModernTemplate />

                    {/* <div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1E2F4F] mt-4">Modern CV</h3>
                        <p>Minimalized, white background, navy headings</p>
                      </div>
                      

                      <div>
                        <button className="mt-4 bg-[#080D2B] hover:bg- text-white font-bold py-2 px-12 rounded w-full">
                          <Link to="/templates">View more Template</Link>
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* TEMPLATE 2 */}
              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="h-80 bg-gray-100 rounded-lg">
                </div>
              </div>

              {/* TEMPLATE 3 */}
              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="h-80 bg-gray-100 rounded-lg">
                </div>
              </div>

            </div>
          </div>
        </section>
        
      </main>
    
    </>
  )
}

export default Templates;