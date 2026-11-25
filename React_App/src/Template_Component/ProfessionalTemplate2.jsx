function ProfessionalTemplate2() {
  return (
    <div className="w-[800px] min-h-[1100px] bg-white shadow-xl mx-auto px-12 py-10">
      {/* HEADER */}
      <header>
        <div className="text-center border-b-2 border-slate-800 pb-6">
          <h1 className="text-3xl font-bold tracking-wide text-slate-900">
            YOUR NAME
          </h1>

          <p className="text-sm text-gray-500 mt-2 tracking-widest uppercase">
            Your Professional Title
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4 text-xs text-gray-600">
            <span>hello@example.com</span>
            <span>+234 800 000 0000</span>
            <span>Lagos, Nigeria</span>
            <span>linkedin.com/in/yourname</span>
          </div>
        </div>
      </header>


      {/* PROFESSIONAL SUMMARY */}
      <div className="mt-7">
        <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-800 mb-3">
          Professional Summary
        </h2>

        <p className="text-sm leading-7 text-gray-600">
          A dedicated professional with a strong foundation in problem-solving,
          collaboration, and delivering quality results. Skilled at adapting to
          new challenges, managing responsibilities, and contributing to team success.
        </p>
      </div>


      {/* WORK EXPERIENCE */}
      <div className="mt-7">
        <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-800 border-b border-gray-300 pb-2 mb-4">
          Work Experience
        </h2>

        <div className="mb-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Software Developer
              </h3>
              <p className="text-sm text-gray-500">
                Company Name
              </p>
            </div>

            <p className="text-xs text-gray-500">
              2024 – Present
            </p>
          </div>

          <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-gray-600 leading-6">
            <li>Developed responsive web applications.</li>
            <li>Worked with teams to implement project requirements.</li>
            <li>Improved application functionality and usability.</li>
          </ul>
        </div>


        <div className="mt-7">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-800 border-b border-gray-300 pb-2 mb-4">
            Education
          </h2>

          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  University Name
                </h3>
                <p className="text-sm text-gray-500">
                  B.Sc. Computer Science
                </p>
              </div>

              <p className="text-xs text-gray-500">
                2022 – 2026
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  College Name
                </h3>
                <p className="text-sm text-gray-500">
                  Senior Secondary Certificate
                </p>
              </div>

              <p className="text-xs text-gray-500">
                2016 – 2022
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* SKILLS */}
      <div className="mt-7">
        <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-800 border-b border-gray-300 pb-2 mb-4">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {["Java", "React", "SQL", "Problem Solving", "Teamwork", "Communication", "Time Management"].map((skill, index) => (
            <span
              key={index}
              className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>




      {/* CERTIFICATIONS */}
      <div className="mt-7">
        <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-800 border-b border-gray-300 pb-2 mb-4">
          Certifications
        </h2>

        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Java Programming
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Oracle · 2025
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Web Development Fundamentals
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Coursera · 2024
            </p>
          </div>
        </div>
      </div>

    </div>
  );  
}

export default ProfessionalTemplate2;