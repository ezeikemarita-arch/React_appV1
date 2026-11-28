function ModernTemplate2({ formData }) {
  return (
    <div className="bg-white text-gray-900 w-[794px] min-h-[1123px] grid grid-cols-[200px_1fr]">

      {/* LEFT SIDEBAR */}
      <aside className="bg-[#172B3A] text-white px-6 py-8">

        {/* PROFILE IMAGE */}
        <div className="w-28 h-28 border-4 border bg-slate-200 mb-6">
        </div> 


        {/* CONTACT */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] mb-4">
            Contact
          </h2>

          <div className="space-y-3 text-xs text-gray-300">
            {formData?.email || "yourname@gmail.com"}

            {formData?.phoneNumber || "+234 800 000 0000"}

            {formData?.location || "Lagos, Nigeria"}

            {formData?.linkedIn || "Linkedin Profile"} / {formData?.portfolio || "Portfolio URL"}
          </div>
        </section>



        {/* EDUCATION */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] mb-4">
            Education
          </h2>

          <div className="space-y-4 text-xs text-gray-300">
            <div>
              <h3 className="font-semibold text-white">University Name</h3>
              <p>Degree / Course</p>
              <p className="text-gray-400">2021 – 2025</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">College Name</h3>
              <p>Certificate</p>
              <p className="text-gray-400">2018 – 2021</p>
            </div>
          </div>
        </section>


        {/* EDUCATION */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] mb-4">
            Education
          </h2>

          <div className="space-y-4 text-xs text-gray-300">
            <div>
              <p className="font-semibold text-white">School Name</p>
              <p>Degree / Qualification</p>
              <p className="text-gray-400">Start – End Date</p>
            </div>
          </div>
        </section>


        {/* SKILLS */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-[2px] mb-4">
            Skills
          </h2>

          <ul className="space-y-3 text-xs text-gray-300">
            <li>Skill 01</li>
            <li>Skill 02</li>
            <li>Skill 03</li>
            <li>Skill 04</li>
            <li>Skill 05</li>
          </ul>
        </section>        
      </aside>  



      {/* RIGHT CONTENT */}
      <main className="px-8 py-10">
        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-5xl font-light tracking-tight leading-tight">
            Your Name
          </h1>

          <p className="text-sm uppercase tracking-[3px] text-gray-500 mt-4">
            Professional Title
          </p>

          <div className="w-16 h-[2px] bg-[#172B3A] mt-6"></div>
        </header>


        {/* PROFESSIONAL SUMMARY */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#172B3A] mb-4">
            Professional Summary
          </h2>

          <p className="text-xs leading-6 text-gray-600">
            Your professional summary will appear here, describing your background,
            strengths, experience, and career goals.
          </p>
        </section>


        {/* WORK EXPERIENCE */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#172B3A] mb-5">
            Work Experience
          </h2>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900">
              Job Title
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Company Name | Start Date – End Date
            </p>

            <ul className="list-disc pl-4 mt-3 space-y-2 text-xs text-gray-600 leading-5">
              <li>Describe a responsibility or achievement.</li>
              <li>Describe another responsibility or achievement.</li>
              <li>Describe a relevant contribution you made.</li>
            </ul>
          </div>
        </section>


        {/* PROJECTS */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#172B3A] mb-5">
            Projects
          </h2>

          <div className="mb-5">
            <h3 className="text-sm font-semibold text-gray-900">
              Project Name
            </h3>

            <p className="text-xs text-gray-600 leading-5 mt-2">
              Describe the project, what you worked on, the tools you used,
              and the outcome.
            </p>
          </div>
        </section>


        {/* CERTIFICATIONS */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#172B3A] mb-5">
            Certifications
          </h2>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Certification Name
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Issuing Organization · Year
            </p>
          </div>
        </section>


        {/* LANGUAGES */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#172B3A] mb-4">
            Languages
          </h2>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-600">
            <p>Language 01</p>
            <p>Language 02</p>
            <p>Language 03</p>
          </div>
        </section>


        {/* AWARDS */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#172B3A] mb-4">
            Awards
          </h2>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Award Name
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Issuing Organization · Year
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}

export default ModernTemplate2;