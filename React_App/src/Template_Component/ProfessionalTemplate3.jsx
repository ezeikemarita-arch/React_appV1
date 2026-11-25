const ProfessionalTemplate3 = () => {
  return (
    <div className="bg-[#c5c3dc] p-10 min-h-screen">
      <div className="bg-white w-[800px] min-h-[1100px] mx-auto">
        <div className="grid grid-cols-[1.2fr_0.8fr] min-h-[1100px]">

          {/* Left Column */}
          <div className="p-10">
            <div className="mb-10">
              <h1 className="text-4xl font-bold tracking-wide text-gray-900">
                Alex Morgan
              </h1>

              <p className="text-sm tracking-[4px] text-gray-500 mt-2">
                MARKETING SPECIALIST
              </p>
            </div>


            {/* PROFILE */}
            <div className="mb-10">
              <h2 className="text-sm font-bold tracking-[3px] text-gray-900 mb-4 border-b border-[#b7a9c9] pb-2">
                PROFILE
              </h2>

              <p className="text-sm text-gray-600 leading-7">
                A dedicated and results-driven professional with experience in
                managing projects, collaborating with teams, and delivering
                quality results. Passionate about continuous learning,
                professional growth, and solving problems effectively.
              </p>
            </div>



            {/* EXPERIENCE */}
            <div className="mb-10">
              <h2 className="text-sm font-bold tracking-[3px] text-gray-900 mb-4 border-b border-[#b7a9c9] pb-2">
                EXPERIENCE
              </h2>

              <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-800">
                  Marketing Manager
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Bright Media Studio | 2022 – 2025
                </p>

                <ul className="text-sm text-gray-600 leading-7 mt-3 list-disc pl-5">
                  <li>Managed marketing campaigns and brand development.</li>
                  <li>Collaborated with teams to improve project outcomes.</li>
                  <li>Analyzed performance and developed growth strategies.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  Marketing Assistant
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Creative Hub | 2020 – 2022
                </p>

                <ul className="text-sm text-gray-600 leading-7 mt-3 list-disc pl-5">
                  <li>Supported marketing activities and daily operations.</li>
                  <li>Prepared reports and assisted with team projects.</li>
                  <li>Maintained communication with clients and stakeholders.</li>
                </ul>
              </div>
            </div>



            {/* PROJECTS */}
            <div className="mb-8">
              <h2 className="text-sm font-bold tracking-[3px] text-gray-900 mb-4 border-b border-[#b7a9c9] pb-2">
                PROJECTS
              </h2>

              <div className="mb-5">
                <h3 className="text-sm font-semibold text-gray-800">
                  Marketing Campaign Redesign
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  2024
                </p>

                <p className="text-sm text-gray-600 leading-6 mt-2">
                  Redesigned a marketing campaign to improve brand visibility
                  and customer engagement.
                </p>
              </div>
            </div>
          </div>







          {/* Right Column */}
          <div className="bg-[#f1f1f3] p-8">

            {/* CONTACT */}
            <div className="bg-[#252525] text-white p-5 mb-10">
              <h2 className="text-xs font-bold tracking-[3px] mb-4">
                CONTACT
              </h2>

              <div className="space-y-3 text-xs text-gray-300">
                <p>alex@email.com</p>
                <p>+234 800 000 0000</p>
                <p>Lagos, Nigeria</p>
                <p>linkedin.com/in/alexmorgan</p>
                <p>alexmorgan.com</p>
              </div>
            </div>



            {/* EDUCATION */}
            <div className="mb-8">
              <h2 className="text-sm font-bold tracking-[3px] text-gray-900 mb-4 border-b border-[#b7a9c9] pb-2">
                EDUCATION
              </h2>

              <div className="mb-5">
                <h3 className="text-sm font-semibold text-gray-800">
                  University of Lagos
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  B.Sc. Computer Science
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  2021 – 2025
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  Lagos State Polytechnic
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Diploma in Computer Science
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  2019 – 2021
                </p>
              </div>
            </div>



            {/* SKILLS */}
            <div className="mb-8">
              <h2 className="text-sm font-bold tracking-[3px] text-gray-900 mb-4 border-b border-[#b7a9c9] pb-2">
                SKILLS
              </h2>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>Project Management</li>
                <li>Communication</li>
                <li>Team Collaboration</li>
                <li>Problem Solving</li>
                <li>Microsoft Office</li>
                <li>Leadership</li>
              </ul>
            </div>



            {/* CERTIFICATIONS */}
            <div className="mb-8">
              <h2 className="text-sm font-bold tracking-[3px] text-gray-900 mb-4 border-b border-[#b7a9c9] pb-2">
                CERTIFICATIONS
              </h2>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Google Digital Marketing
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Google | 2024
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  Project Management Fundamentals
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Coursera | 2023
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate3;