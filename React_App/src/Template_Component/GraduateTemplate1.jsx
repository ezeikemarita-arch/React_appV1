
const GraduateTemplate1 = () => {
  return (
    <div className="w-[800px] min-h-[1100px] bg-white shadow-xl mx-auto">
      {/* HEADER */}
      <div className="bg-[#172554] px-10 py-10 text-white">
        <h1 className="text-4xl font-bold tracking-wide">
          Alex Morgan
        </h1>

        <p className="text-lg text-blue-200 mt-2">
          Recent Graduate | Computer Science
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-blue-100">
          <span>alex@email.com</span>
          <span>+234 800 000 0000</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>



      {/*  */}
      <div className="grid grid-cols-[1.5fr_1fr] min-h-[950px]">

        {/* Main Column */}
        <div className="px-10 py-8">

          {/* SUMMARY */}
          <div className="mb-9">
            <h2 className="text-lg font-bold text-[#172554] mb-3">
              PROFESSIONAL SUMMARY
            </h2>

            <div className="w-12 h-1 bg-blue-500 mb-4"></div>

            <p className="text-sm text-gray-600 leading-7">
              A motivated and detail-oriented recent graduate with a strong
              academic foundation and a passion for learning. Eager to apply
              acquired knowledge, develop practical skills, and contribute
              positively to a professional team.
            </p>
          </div>




          {/* PROJECTS */}
          <div className="mb-9">
            <h2 className="text-lg font-bold text-[#172554] mb-3">
              PROJECTS
            </h2>

            <div className="w-12 h-1 bg-blue-500 mb-5"></div>

            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-800">
                Student Management System
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                2024
              </p>

              <p className="text-sm text-gray-600 leading-7 mt-2">
                Developed a system to manage student records, academic
                information, and administrative activities.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-800">
                Personal Portfolio Website
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                2023
              </p>

              <p className="text-sm text-gray-600 leading-7 mt-2">
                Designed a responsive portfolio website to showcase
                personal projects, skills, and academic achievements.
              </p>
            </div>
          </div>




          {/* WORK EXPERIENCE */}
          <div className="mb-9">
            <h2 className="text-lg font-bold text-[#172554] mb-3">
              WORK EXPERIENCE
            </h2>

            <div className="w-12 h-1 bg-blue-500 mb-5"></div>

            <div>
              <h3 className="text-base font-semibold text-gray-800">
                Administrative Intern
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                ABC Solutions | June 2024 – August 2024
              </p>

              <ul className="text-sm text-gray-600 leading-7 mt-3 list-disc pl-5">
                <li>Assisted with daily administrative tasks and documentation.</li>
                <li>Organized records and supported team activities.</li>
                <li>Collaborated with staff to complete assigned projects.</li>
              </ul>
            </div>
          </div>
        </div>







        {/* Sidebar */}
        <div className="bg-slate-50 px-7 py-8">
          
          {/* EDUCATION */}
          <div className="mb-9">
            <h2 className="text-lg font-bold text-[#172554] mb-3">
              EDUCATION
            </h2>

            <div className="w-10 h-1 bg-blue-500 mb-5"></div>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-800">
                University of Lagos
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                B.Sc. Computer Science
              </p>

              <p className="text-xs text-gray-500 mt-2">
                2021 – 2025
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-800">
                Lagos State Secondary School
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Senior Secondary Certificate
              </p>

              <p className="text-xs text-gray-500 mt-2">
                2015 – 2021
              </p>
            </div>
          </div>




          {/* SKILLS */}
          <div className="mb-9">
            <h2 className="text-lg font-bold text-[#172554] mb-3">
              SKILLS
            </h2>

            <div className="w-10 h-1 bg-blue-500 mb-5"></div>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Microsoft Office</li>
              <li>Critical Thinking</li>
            </ul>
          </div>



          {/* CERTIFICATIONS */}
          <div className="mb-9">
            <h2 className="text-lg font-bold text-[#172554] mb-3">
              CERTIFICATIONS
            </h2>

            <div className="w-10 h-1 bg-blue-500 mb-5"></div>

            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-800">
                Google Digital Skills
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                Google | 2024
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800">
                Introduction to Python
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                Coursera | 2023
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GraduateTemplate1;