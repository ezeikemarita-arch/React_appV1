function ModernTemplate3() {
  return (
    <div className="bg-white text-gray-900 w-[794px] min-h-[1123px]">

      {/* HEADER */}
      <header>
        <div className="bg-[#E8EFEA] px-12 py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-[#334B3D]">
            Your Name
          </h1>

          <p className="text-sm uppercase tracking-[3px] text-[#64776B] mt-3">
            Professional Title
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-600 mt-6">
            <p>Email Address</p>
            <p>Phone Number</p>
            <p>Location</p>
          </div>
        </div>
      </header>




      {/* CV BODY */}
      <main>
        <div className="grid grid-cols-[260px_1fr] gap-10 px-12 py-10">

          {/* LEFT COLUMN */}
          <aside className="bg-[#F1F4F1] px-6 py-8">
            {/* SKILLS */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#334B3D] mb-5">
                Skills
              </h2>

              <ul className="space-y-3 text-xs text-gray-600">
                <li>Skill 01</li>
                <li>Skill 02</li>
                <li>Skill 03</li>
                <li>Skill 04</li>
                <li>Skill 05</li>
              </ul>
            </section>


            {/* EDUCATION */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#334B3D] mb-5">
                Education
              </h2>

              <div className="space-y-4 text-xs text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800">School Name</p>
                  <p>Degree / Qualification</p>
                  <p className="text-gray-500">Start – End Date</p>
                </div>
              </div>
            </section>


            {/* CERTIFICATIONS */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#334B3D] mb-5">
                Certifications
              </h2>

              <div className="space-y-4 text-xs text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800">Certification Name</p>
                  <p>Issuing Organization</p>
                  <p className="text-gray-500">Year</p>
                </div>
              </div>
            </section>
          </aside>

          {/* RIGHT COLUMN */}
          <div>
            {/* PROFESSIONAL SUMMARY */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#334B3D] mb-4">
                Professional Summary
              </h2>

              <p className="text-xs text-gray-600 leading-6">
                Your professional summary will appear here, highlighting your
                background, strengths, experience, and career goals.
              </p>
            </section>


            {/* WORK EXPERIENCE */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#334B3D] mb-5">
                Work Experience
              </h2>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800">
                  Job Title
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Company Name | Start Date – End Date
                </p>

                <ul className="list-disc pl-4 mt-3 space-y-2 text-xs text-gray-600 leading-5">
                  <li>Describe a responsibility or achievement.</li>
                  <li>Describe another responsibility or achievement.</li>
                </ul>
              </div>
            </section>



            {/* PROJECTS */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#334B3D] mb-5">
                Projects
              </h2>

              <div className="mb-5">
                <h3 className="text-sm font-semibold text-gray-800">
                  Project Name
                </h3>

                <p className="text-xs text-gray-600 leading-5 mt-2">
                  Describe the project, your contribution, the tools used,
                  and the outcome.
                </p>
              </div>
            </section>


            {/* LANGUAGES */}
            <section className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#334B3D] mb-4">
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
              <h2 className="text-sm font-bold uppercase tracking-[2px] text-[#334B3D] mb-4">
                Awards
              </h2>

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  Award Name
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Issuing Organization · Year
                </p>
              </div>
            </section>
          </div>

        </div>
      </main>

    </div>
  );
}

export default ModernTemplate3;