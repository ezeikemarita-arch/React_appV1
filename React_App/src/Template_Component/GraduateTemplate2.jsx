

const GraduateTemplate2 = () => {
  return (
    <div className="w-[800px] min-h-[1100px] bg-white text-[#252525] p-12 font-sans">

      {/* HEADER */}
      <header className="bg-[#292D32] text-white p-8">
        <p className="text-xs tracking-[4px] text-[#A8C5C2] mb-3">
          CURRICULUM VITAE
        </p>

        <h1 className="text-4xl font-bold tracking-wide">
          OLIVIA ANDERSON
        </h1>

        <p className="text-sm tracking-[2px] text-gray-300 mt-2">
          RECENT GRADUATE
        </p>
      </header>

      {/* CONTACT */}
      <div className="flex flex-wrap gap-x-7 gap-y-2 py-5 border-b border-gray-300 text-xs text-gray-600">
        <span>olivia@email.com</span>
        <span>+234 801 234 5678</span>
        <span>Lagos, Nigeria</span>
        <span>linkedin.com/in/olivia</span>
        <span>portfolio.com</span>
      </div>

      {/* BODY */}
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-9 mt-8">

        {/* LEFT COLUMN */}
        <div className="border-r border-[#A8C5C2] pr-7">

          {/* SUMMARY */}
          <section className="mb-9">
            <h2 className="text-sm font-bold tracking-[2px] mb-3">
              PROFILE
            </h2>
            <div className="w-10 h-[3px] bg-[#6D9691] mb-4"></div>

            <p className="text-xs leading-6 text-gray-600">
              Recent graduate with a strong academic foundation and
              practical experience through projects and professional
              opportunities. Adaptable, organized and eager to contribute
              to a growing team.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="mb-9">
            <h2 className="text-sm font-bold tracking-[2px] mb-3">
              EDUCATION
            </h2>
            <div className="w-10 h-[3px] bg-[#6D9691] mb-4"></div>

            <h3 className="text-sm font-bold">
              B.Sc. Computer Science
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              University of Lagos
            </p>
            <p className="text-xs text-gray-500 mt-1">
              2021 – 2025
            </p>
            <p className="text-xs text-gray-600 mt-2 leading-5">
              Relevant Field of Study: Software Development
            </p>
          </section>

          {/* SKILLS */}
          <section className="mb-9">
            <h2 className="text-sm font-bold tracking-[2px] mb-3">
              SKILLS
            </h2>
            <div className="w-10 h-[3px] bg-[#6D9691] mb-4"></div>

            <ul className="text-xs text-gray-600 space-y-3">
              <li>• Communication</li>
              <li>• Team Collaboration</li>
              <li>• Problem Solving</li>
              <li>• Java Programming</li>
              <li>• Time Management</li>
            </ul>
          </section>

          {/* CERTIFICATIONS */}
          <section>
            <h2 className="text-sm font-bold tracking-[2px] mb-3">
              CERTIFICATIONS
            </h2>
            <div className="w-10 h-[3px] bg-[#6D9691] mb-4"></div>

            <h3 className="text-xs font-semibold">
              Java Programming Certificate
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              2025
            </p>
          </section>

        </div>

        {/* RIGHT COLUMN */}
        <div>

          {/* EXPERIENCE */}
          <section className="mb-9">
            <h2 className="text-sm font-bold tracking-[2px] mb-3">
              WORK EXPERIENCE
            </h2>
            <div className="w-10 h-[3px] bg-[#6D9691] mb-4"></div>

            <h3 className="text-sm font-bold">
              Junior Software Developer
            </h3>
            <p className="text-xs text-[#6D9691] mt-1">
              BrightTech Solutions
            </p>
            <p className="text-xs text-gray-500 mt-1">
              June 2024 – December 2024
            </p>

            <ul className="text-xs text-gray-600 leading-6 mt-3">
              <li>• Assisted with developing and testing software features.</li>
              <li>• Collaborated with team members on development tasks.</li>
              <li>• Helped identify and resolve application issues.</li>
            </ul>
          </section>

          {/* PROJECTS */}
          <section className="mb-9">
            <h2 className="text-sm font-bold tracking-[2px] mb-3">
              PROJECTS
            </h2>
            <div className="w-10 h-[3px] bg-[#6D9691] mb-4"></div>

            <h3 className="text-sm font-bold">
              Student Management System
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              January 2025 – March 2025
            </p>
            <p className="text-xs text-gray-600 leading-6 mt-3">
              Developed a student management application to organize
              student records and simplify information management.
            </p>

            <h3 className="text-sm font-bold mt-6">
              Personal Portfolio Website
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              April 2025 – May 2025
            </p>
            <p className="text-xs text-gray-600 leading-6 mt-3">
              Created a responsive portfolio website to showcase
              projects, skills and professional information.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default GraduateTemplate2;