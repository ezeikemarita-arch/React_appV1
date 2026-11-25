
const GraduateTemplate3 = () => {
  return (
    <div className="w-[800px] min-h-[1100px] bg-white shadow-xl mx-auto px-10 py-10">

      {/* Header */}
      <div className="border-l-[6px] border-[#3B82A0] pl-6 mb-8">
        <h1 className="text-4xl font-bold text-slate-800 tracking-wide">
          Alex Morgan
        </h1>

        <p className="text-sm font-medium text-[#3B82A0] mt-2 tracking-wider uppercase">
          Recent Graduate | Computer Science
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-xs text-gray-500">
          <span>alex@email.com</span>
          <span>+234 800 000 0000</span>
          <span>Lagos, Nigeria</span>
          <span>LinkedIn Profile</span>
          <span>Portfolio Website</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-8 bg-slate-50 p-5 rounded-lg">
        <h2 className="text-sm font-bold text-[#3B82A0] tracking-widest mb-3">
          PROFESSIONAL SUMMARY
        </h2>

        <p className="text-xs text-gray-600 leading-7">
          A motivated and detail-oriented recent graduate with a
          strong academic foundation and a passion for continuous
          learning. Eager to apply acquired knowledge, develop
          practical skills, and contribute positively to a
          professional organization.
        </p>
      </div>

      {/* Main Body */}
      <div className="grid grid-cols-[1.5fr_0.9fr] gap-9">

        {/* Main Column */}
        <div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-sm font-bold text-slate-800 tracking-widest border-b-2 border-[#3B82A0] pb-2 mb-5">
              EDUCATION
            </h2>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-800">
                University of Lagos
              </h3>

              <p className="text-xs text-gray-600 mt-2">
                B.Sc. Computer Science
              </p>

              <p className="text-xs text-gray-400 mt-1">
                2021 – 2025
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-800">
                Lagos State Secondary School
              </h3>

              <p className="text-xs text-gray-600 mt-2">
                Senior Secondary Certificate
              </p>

              <p className="text-xs text-gray-400 mt-1">
                2015 – 2021
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className="text-sm font-bold text-slate-800 tracking-widest border-b-2 border-[#3B82A0] pb-2 mb-5">
              WORK EXPERIENCE
            </h2>

            <div>
              <h3 className="text-sm font-bold text-gray-800">
                Administrative Intern
              </h3>

              <p className="text-xs text-[#3B82A0] mt-1">
                ABC Solutions | June 2024 – August 2024
              </p>

              <ul className="text-xs text-gray-600 leading-6 mt-3 list-disc pl-4">
                <li>Assisted with administrative tasks and documentation.</li>
                <li>Organized records and supported daily operations.</li>
                <li>Collaborated with team members on assigned projects.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-sm font-bold text-slate-800 tracking-widest border-b-2 border-[#3B82A0] pb-2 mb-5">
              PROJECTS
            </h2>

            <div className="mb-5">
              <h3 className="text-sm font-bold text-gray-800">
                Student Management System
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                2025
              </p>

              <p className="text-xs text-gray-600 leading-6 mt-2">
                Developed an application to organize student records
                and simplify academic administration.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-800">
                Personal Portfolio Website
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                2024
              </p>

              <p className="text-xs text-gray-600 leading-6 mt-2">
                Designed a responsive website to showcase personal
                projects, technical skills, and achievements.
              </p>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="bg-[#EFF6FA] rounded-lg p-5">

          {/* Skills */}
          <div className="mb-9">
            <h2 className="text-sm font-bold text-[#3B82A0] tracking-widest mb-5">
              SKILLS
            </h2>

            <ul className="space-y-3 text-xs text-gray-600">
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Microsoft Office</li>
              <li>Critical Thinking</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="border-t border-blue-200 pt-6">
            <h2 className="text-sm font-bold text-[#3B82A0] tracking-widest mb-5">
              CERTIFICATIONS
            </h2>

            <div className="mb-5">
              <h3 className="text-xs font-bold text-gray-800">
                Google Digital Skills
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                Google | 2024
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-800">
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

export default GraduateTemplate3;
