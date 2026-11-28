
function ModernTemplate1({ formData }) {
  return (
    <div className="bg-white text-slate-900 w-[794px] min-h-[1123px] border border-gray-300 rounded-lg shadow-md">
      
      {/* CV HEADER */}
      <header className="bg-[#080D2B] text-white px-8 py-10">
        <div className="flex items-center gap-6">
          
          {/* PROFILE IMAGE */}
          <div className="w-28 h-28 rounded-full border-4 border-purple-500 bg-slate-200">
          </div>

          {/* NAME AND TITLE */}
          <div>
            <h1 className="text-3xl font-bold">
              {formData?.fullName || "Your Name"}
            </h1>

            <p className="text-lg text-purple-300 mt-2">
              Your Professional Title
            </p>
          </div>
        </div>


        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300">

          {formData?.email || "yourname@gmail.com"}

          {formData?.phoneNumber || "+234 800 000 0000"}

          {formData?.location || "Lagos, Nigeria"}

          {formData?.linkedIn || "Linkedin Profile"}

          <p>{formData?.portfolio || "Portfolio URL"}</p>

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
              {formData?.skills?.length > 0 ? (
                formData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))
              ) : (
                <li>Your skills will appear here</li>
              )}
            </ul>
          </section>


          {/* Education */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              EDUCATION
            </h2>

            {formData?.educations?.length > 0 ? (
              formData.educations.map((education) => (
                <div key={education.id} className="mb-4">
                  <h3 className="font-semibold text-sm">
                    {education.qualification}
                  </h3>

                  <p className="text-sm text-gray-700">
                    {education.name}
                  </p>

                  <p className="text-sm text-gray-700">
                    {education.fieldOfStudy}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {education.startDate} – {education.graduationDate}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                Your education details will appear here.
              </p>
            )}
          </section>


          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              CERTIFICATIONS
            </h2>

            {formData?.certifications?.length > 0 ? (
              formData.certifications.map((certification) => (
                <div key={certification.id} className="mb-4">
                  <h3 className="font-semibold text-sm">
                    {certification.name}
                  </h3>

                  <p className="text-sm text-gray-700">
                    {certification.organisation}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {certification.issueDate}
                  </p>

                  {certification.credentialUrl && (
                    <p className="text-sm text-purple-700">
                      {certification.credentialUrl}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                Your certifications will appear here.
              </p>
            )}
          </section>


          {/* Languages */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              LANGUAGES
            </h2>

            {formData?.languages?.length > 0 ? (
              formData.languages.map((language) => (
                <div key={language.id} className="mb-3">
                  <p className="text-sm font-semibold text-gray-800">
                    {language.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language.proficiency}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                Your languages will appear here.
              </p>
            )}
          </section>
        </aside> 






        {/* RIGHT COLUMN */}
        <div className="col-span-2">
          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              PROFESSIONAL SUMMARY
            </h2>

            <p className="text-sm text-gray-700 leading-7 break-words">
              {formData?.professionalSummary || "Your professional summary will appear here."}
            </p>
          </section>






          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              WORK EXPERIENCE
            </h2>

            {formData?.workExperience?.length > 0 ? (
              formData.workExperience.map((experience) => (
                <div key={experience.id} className="mb-6">
                  <h3 className="font-bold text-sm text-slate-900">
                    {experience.jobTitle} 
                  </h3>

                  <p className="text-sm text-purple-700 font-medium mt-1">
                    {experience.company}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {experience.employmentType} {experience.location}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {experience.location}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {experience.startDate} – {experience.endDate}
                  </p>

                  <p className="text-sm text-gray-700 leading-6 mt-3 whitespace-pre-line break-words">
                    {experience.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                Your work experience will appear here.
              </p>
            )}
          </section>






          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-[#080D2B] border-b-2 border-purple-500 pb-2 mb-4">
              PROJECTS
            </h2>

            {formData?.projects?.length > 0 ? (
              formData.projects.map((project) => (
                <div key={project.id} className="mb-5">
                  <h3 className="font-semibold text-sm">
                    {project.name}
                  </h3>

                  <p className="text-sm text-gray-700 mt-1 break-words">
                    {project.description}
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    **Technologies:** {project.technologies}
                  </p>

                  {project.projectUrl && (
                    <p className="text-sm text-purple-700 mt-1">
                      {project.projectUrl}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                Your projects will appear here.
              </p>
            )}
          </section>
          
        </div>
      </main> 

    </div>
  );
}

export default ModernTemplate1;