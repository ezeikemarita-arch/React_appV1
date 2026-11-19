
function ModernTemplate() {
  return (
    <div className="bg-white text-slate-900 transition-transform duration-500 hover:scale-105 w-[794px] min-h-[1123px] border border-gray-300 rounded-lg shadow-md">
      
      {/* CV HEADER */}
      <header className="bg-[#080D2B] text-white px-8 py-10">
        <div className="flex items-center gap-6">
          
          {/* PROFILE IMAGE */}
          <div className="w-28 h-28 rounded-full border-4 border-purple-500 bg-slate-200">
          </div>

          {/* NAME AND TITLE */}
          <div>
            <h1 className="text-3xl font-bold">
              Your Name
            </h1>

            <p className="text-lg text-purple-300 mt-2">
              Your Professional Title
            </p>
          </div>
        </div>


        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300">

          <p>✉ yourname@email.com</p>

          <p>☎ +234 800 000 0000</p>

          <p>📍 Lagos, Nigeria</p>

          <p>in LinkedIn Profile</p>

        </div>
      </header>




      {/* CV BODY */}
      <main className="grid grid-cols-3 gap-8 px-8 py-10">
        {/* LEFT COLUMN */}
        <aside className="col-span-1">

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              SKILLS
            </h2>

            <ul className="space-y-3 text-sm text-gray-700">
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Project Management</li>
            </ul>
          </section>


          {/* Education */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              EDUCATION
            </h2>

            <div className="mb-4">
              <h3 className="font-semibold text-sm">
                B.Sc. Computer Science
              </h3>

              <p className="text-sm text-gray-700">
                University of Lagos
              </p>

              <p className="text-xs text-gray-500 mt-1">
                2022 – 2026
              </p>
            </div>
          </section>


          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              CERTIFICATIONS
            </h2>

            <div className="mb-4">
              <h3 className="font-semibold text-sm">
                Web Development
              </h3>

              <p className="text-sm text-gray-700">
                Google Career Certificates
              </p>

              <p className="text-xs text-gray-500 mt-1">
                2025
              </p>
            </div>
          </section>


          {/* Languages */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              LANGUAGES
            </h2>

            <ul className="space-y-3 text-sm text-gray-700">
              <li>English — Fluent</li>
              <li>French — Intermediate</li>
            </ul>
          </section>
        </aside> 






        {/* RIGHT COLUMN */}
        <div className="col-span-2">
          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              PROFESSIONAL SUMMARY
            </h2>

            <p className="text-sm text-gray-700 leading-7">
              A motivated and detail-oriented software developer
              with a passion for building functional and user-friendly
              applications. Skilled in problem-solving, teamwork and
              developing creative solutions to technical challenges.
            </p>
          </section>


          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              WORK EXPERIENCE
            </h2>

            <div className="mb-6">
              <h3 className="font-bold text-sm text-slate-900">
                Frontend Developer
              </h3>

              <p className="text-sm text-purple-700 font-medium mt-1">
                ABC Technologies
              </p>

              <p className="text-xs text-gray-500 mt-1">
                January 2024 – Present
              </p>

              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-700">
                <li>Developed responsive user interfaces using React.</li>
                <li>Collaborated with team members to build web applications.</li>
                <li>Improved application usability and performance.</li>
              </ul>
            </div>
          </section>


          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              PROJECTS
            </h2>

            <div className="mb-5">
              <h3 className="font-semibold text-sm">
                CV Builder Application
              </h3>

              <p className="text-sm text-gray-700 leading-6 mt-2">
                Designed and developed a responsive CV builder
                application that allows users to create and customize
                professional CVs.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="font-semibold text-sm">
                Student Management System
              </h3>

              <p className="text-sm text-gray-700 leading-6 mt-2">
                Built an application for organizing and managing
                student records efficiently.
              </p>
            </div>
          </section>
        </div>
      </main> 




     
    </div>
  );
}

export default ModernTemplate;