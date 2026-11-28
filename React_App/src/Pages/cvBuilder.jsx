import Header from '../Home_Components/Header.jsx';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import ModernTemplate1 from '../Template_Component/ModernTemplate1.jsx';
import ModernTemplate2 from '../Template_Component/ModernTemplate2.jsx';
import ModernTemplate3 from '../Template_Component/ModernTemplate3.jsx';

import ProfessionalTemplate1 from '../Template_Component/ProfessionalTemplate1.jsx';
import ProfessionalTemplate2 from '../Template_Component/ProfessionalTemplate2.jsx';
import ProfessionalTemplate3 from '../Template_Component/ProfessionalTemplate3.jsx';

import GraduateTemplate1 from '../Template_Component/GraduateTemplate1.jsx';
import GraduateTemplate2 from '../Template_Component/GraduateTemplate2.jsx';
import GraduateTemplate3 from '../Template_Component/GraduateTemplate3.jsx';


function CVBuilder() {
  // Work Experience functionality
  const [currentlyWorking, setCurrentlyWorking] = useState(false);


  // Skills functionality
  const [skills, setSkills] = useState([]);
  const [newSkills, setNewSkills] = useState("");

  const addSkills = () =>{
    if (!newSkills.trim()){
      return;
    }
    
    if (skills.includes(newSkills.trim())){
      return;
    }
    
    setSkills([...skills, newSkills.trim()])

    setNewSkills("");
  }


  const removeSkill = (indexToRemove) =>{
    setSkills(skills.filter((skill, index) => index !==indexToRemove));
  };




  //Certificate Functionality
  const [certifications, setCertifications] = useState([
    {
      id: Date.now(),
      name: "",
      organisation: "",
      issueDate: "",
      credentialUrl: "",
    },
  ]);

  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        id: Date.now(),
        name: "",
        organisation: "",
        issueDate: "",
        credentialUrl: "",
      },
    ]);
  };

  const removeCertification = (id) => {
    setCertifications(
      certifications.filter((certification) => certification.id !== id)
    );
  };




  // Education
  const [educations, setEducations] = useState([
    {
      id: Date.now(),
      name: "",
      qualification: "",
      fieldOfStudy: "",
      startDate: "",
      graduationDate: "",
    },
  ]);


  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now(),
        name: "",
        qualification: "",
        fieldOfStudy: "",
        startDate: "",
        graduationDate: "",
      },
    ]);
  };

  const removeEduction = (id) => {
    setEducations(
      educations.filter((education) => education.id !== id)
    );
  };




  //Work Experience 
  const [workExperience, setWorkExperience] = useState([
    {
      id: Date.now(),
      jobTitle: "",
      company: "",  
      employmentType: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      {
        id: Date.now(),
      jobTitle: "",
      company: "",  
      employmentType: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      },
    ]);
  };

  const removeWorkExperience = (id) => {
    setWorkExperience(
      workExperience.filter((experience) => experience.id !== id)
    )
  }




  // Project Functionality
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      name: "",
      description: "",
      technologies: "",
      projectUrl: "",
    },
  ]);

  const addProject = () => {
    setProjects([
      ...projects,
      {
      id: Date.now(),
      name: "",
      description: "",
      technologies: "",
      projectUrl: "",
    },
    ]);
  };

  const removeProject = (id) => {
    setProjects(
      projects.filter((project) => project.id !== id)
    );
  };






  // Language
  const [languages, setLanguages] = useState([
    {
      id: Date.now(),
      name: "",
      proficiency: "",
    },
  ]);


  const addLanguages = () => {
    setLanguages ([
      ...languages,
      {
        id: Date.now(),
        proficiency: "",
      },
    ]);
  };


  const removeLanguages = (id) => {
    setLanguages (
      languages.filter((language) => language.id !== id)
    );
  };




  //Voluntary Experience Functionality
  const [voluntaryExperiences, setVoluntaryExperiences] = useState([
    {
      id: Date.now(),
      name: "",
      role: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const addVoluntaryExperience = () => {
    setVoluntaryExperiences([
      ...voluntaryExperiences,
      {
        id: Date.now(),
        name: "",
        role: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  const removeVoluntaryExperience = (id) => {
    setVoluntaryExperiences(
      voluntaryExperiences.filter((experience) => experience.id !== id)
    );
  };



  //Award & Achievement Functionality
  const [awards, setAwards] = useState([
    {
      id: Date.now(),
      name: "",
      issuingOrganisation: "",
      date: "",
      description: "",
    },
  ]);


  const addAward = () => {
    setAwards ([
      ...awards,
      {
        id: Date.now(),
        name: "",
        issuingOrganisation: "",
        date: "",
        description: "",
      },
    ]);
  };


  const removeAward = (id) => {
    setAwards (
      awards.filter((award) => award.id !== id)
    );
  };








  //ERROR STATE
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);


  const [fullNameError, setFullNameError] = useState("");
  const [fullNameTouched, setFullNameTouched] = useState(false);


  const [formErrors, setFormErrors] = useState([]);




  //SUBMIT VALIDATION
  const handleSubmit = () => {
  const errors = [];

  if (!fullName.trim()) {
    errors.push("Full name is required.");
    setFullNameTouched(true);
    setFullNameError("Full name is required.");
  } else {
    setFullNameError("");
  }

  if (!email.trim()) {
    errors.push("Email address is required.");
    setEmailTouched(true);
    setEmailError("Email address is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Please enter a valid email address.");
    setEmailTouched(true);
    setEmailError("Please enter a valid email address.");
  } else {
    setEmailError("");
  }

  setFormErrors(errors);

  if (errors.length > 0) {
    return;
  }

  document.getElementById("cv-preview")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};





  //LIVE PREVIEW
  //State for full name
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [location, setLocation] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [portfolio, setPortfolio] = useState("");



  //State for Professional Summary
  const [professionalSummary, setProfessionalSummary] = useState("");




  // Connecting templates to CV-builder
  const locations = useLocation();
  const selectedTemplate = locations.state?.selectedTemplate;


  return (
    <>
    <Header/>
    
    <main className='bg-[#F3F4F6] flex justify-between align-start gap-8 px-6 py-5'>
      <section className='w-full md:w-1/2 bg-white min-h-screen p-6 rounded-xl shadow-md mb-4'>
        <div className='text-center'>
          <h1 className='text-gray-900 font-bold text-2xl p-3'>Build Your CV</h1>
          <p className='text-gray-600'>Fill in your details to create your professional CV</p>
        </div>

        <div>
          {/*First section: Persomal information */}

          {/* //the htmlFor attribute in the label and the id attribute in the input connects the label to its input field
            //whereas when someone clicks the label the cursor automatically moves into the required input
            //they must have matching value */}

          <h2 className='font-bold mt-5 text-lg text-gray-900'>Personal Information</h2>
          <form action="" className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-3'>
              <div>
                <label htmlFor="fullName" className='font-medium'>Full Name: </label>
                <input 
                type="text" 
                id='fullName' 
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => {
                  const value = e.target.value;
                  setFullName(value);
                  setFullNameTouched(true);

                  if (!value.trim()) {
                    setFullNameError("Full name is required.");
                  } else {
                    setFullNameError("");
                  }
                }}
                required
                className='border-2 px-2 py-2 block rounded-lg'/>

                {fullNameTouched && fullNameError && (
                  <p className="text-red-500 text-sm mt-1">
                    {fullNameError}
                  </p>
                )}
              </div>
           

              <div>
                <label htmlFor="email" className='font-medium'>Email Address: </label>
                <input 
                type="email" 
                id='email' 
                placeholder="Enter email" 
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  setEmailTouched(true);

                  if (!value.trim()) {
                    setEmailError("");
                  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    setEmailError("");
                  } else {
                    setEmailError("");
                  }
                }}

                onBlur={() => {
                  if (!email.trim()) {
                    setEmailError("");
                  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setEmailError("Please enter a valid email address.");
                  } else {
                    setEmailError("");
                  }
                }}
                required
                className='border-2 px-2 py-2 block rounded-lg'/>

                {emailTouched && emailError && (
                  <p className="text-red-500 text-sm mt-1">
                    {emailError}
                  </p>
                )}
              </div>
            </div>
            




            <div className='grid grid-cols-1 md:grid-cols-2 mt-2'>
              <div>
                <label htmlFor="phone" className='font-medium'>Phone Number: </label>
                <input 
                type="tel" 
                id='phone' 
                placeholder='Enter phone'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className='border-2 px-2 py-2 rounded-lg block'/>
              </div>

              <div>
                <label htmlFor="location" className='font-medium'>Location: (City & Country) </label>
                <input 
                type="text" 
                id='location' 
                placeholder='Enter Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)} 
                className='border-2 px-2 py-2 block rounded-lg'
                />
              </div>
            </div>
            
            <div className='mt-4'>
              <label htmlFor="linkedin" className='font-medium'>LinkedIn Profile: (Optional) </label>
              <input
               type="url" 
               id='linkedin' 
               placeholder='Enter LnkedIn URL' 
               value={linkedIn}
               onChange={(e) => setLinkedIn(e.target.value)}
               className='border-2 px-2 py-2 block w-full rounded-lg'
              />
            </div>

            <div className='mt-2'>
              <label htmlFor="portfolio" className='font-medium'>Portfolio Website: (Optional) </label>
              <input 
              type="url" 
              id='portfolio' 
              placeholder='Enter portfolio URL' 
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              className='border-2 px-2 py-2 block w-full rounded-lg'/>
            </div>
          </form>
        </div>



        


        {/*Second section: Professional SUMMARY */}
        <div className='mt-15'>
          <h2 className='font-bold text-lg text-gray-900'>Professional Summary</h2>
          <p className='mt-3 font-medium'>Write a brief introduction highlighting your experience, strengths and career goals</p>
          <textarea 
          name="summary" 
          id="summary" 
          maxLength={500} 
          placeholder='Write a brief professional summary...' 
          value={professionalSummary}
          onChange={(e) => setProfessionalSummary(e.target.value)}
          className='border-2 w-full min-h-32 p-2 mt-2 rounded-lg'></textarea>
          <p className='text-right font-bold'>(0/500)</p>
          {/* live character counter. REMMEMBER */}
        </div>







        {/* Education SEction */}
        <div className='mt-15'>
          <h2 className='font-bold text-lg text-gray-900'>Education</h2>
          
          <form action="" className='space-y-4'>
            {educations.map((education) => (
              <div key={education.id}>
                <div >
                  <label htmlFor="school" className='font-medium'>School/Institution</label>
                  <input 
                  type="text" 
                  id='school' 
                  placeholder='Enter school/institution' 
                  value={education.name}
                  onChange={(e) => {
                  setEducations(
                    educations.map((item) =>
                      item.id === education.id ? {...item, name: e.target.value} : item
                    )
                  );
                }}
                  className='border-2 px-2 py-2 block w-full rounded-lg'/>
                </div>
            
                <div>
                  <label htmlFor="degree/qualification" className='font-medium'>Degree/Qualification</label>
                  <input 
                  type="text" 
                  id='degree/qualification' 
                  placeholder='Enter degree/qualification' 
                  value={education.qualification}
                  onChange={(e) => {
                  setEducations(
                    educations.map((item) =>
                      item.id === education.id ? {...item, qualification: e.target.value} : item
                    )
                  );
                }}
                  className='border-2 px-2 py-2 block w-full rounded-lg'/>
                </div>

                <div>
                  <label htmlFor="field-of-study" className='font-medium'>Field of Study</label>
                  <input 
                  type="text" 
                  id='field-of-study'
                  placeholder='Enter field of study' 
                  value={education.fieldOfStudy}
                  onChange={(e) => {
                  setEducations(
                    educations.map((item) =>
                      item.id === education.id ? {...item, fieldOfStudy: e.target.value} : item
                    )
                  );
                }}
                  className='border-2 px-2 py-2 block w-full rounded-lg'/>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 mt-2'>
                  <div className='mt-2'>
                    <label htmlFor="start-date" className='font-medium'>Start Date</label>
                    <input 
                    type="date" 
                    id='start-date' 
                    placeholder='Enter start date' 
                    value={education.startDate}
                    onChange={(e) => {
                    setEducations(
                    educations.map((item) =>
                      item.id === education.id ? {...item, startDate: e.target.value} : item
                    )
                  );
                }}
                    className='border-2 px-2 py-2 block rounded-lg'/>
                  </div>
                </div>

                <div className='mt-2'>
                  <label htmlFor="graduation-date" className='font-medium'>Graduation Date</label>
                  <input 
                  type="date" 
                  id='graduation-date' 
                  placeholder='Enter graduation date' 
                  value={education.graduationDate}
                  onChange={(e) => {
                  setEducations(
                    educations.map((item) =>
                      item.id === education.id ? {...item, graduationDate: e.target.value} : item
                    )
                  );
                }}
                  className='border-2 px-2 py-2 block rounded-lg'/>
                </div>


                <button 
                type='button'
                onClick={() => removeEduction(education.id)}
                className='text-red-500 hover:text-red-700 font-medium text-sm cursor-pointer mt-3'
                >
                  Remove Education
                </button>
              </div>
            ))}

            <div className='flex justify-end'>
              <button type='button' className='cursor-pointer' onClick={addEducation}>+ Add Another Education</button>
            </div>
          </form>
        </div>





        {/* Work Experience Section */}
        <div className='mt-18'>
          <h2 className='font-bold text-lg text-gray-900'>Work Experience</h2>

          <form action="" className='space-y-4'>
            {workExperience.map((experience) => (
              <div key={experience.id}>
                <div>
                  <label htmlFor="job-title" className='font-medium'>Job Title</label>
                  <input 
                  type="text" 
                  id='job-title' 
                  placeholder='Enter your job title' 
                  value={experience.jobTitle}
                  onChange={(e) => {
                    setWorkExperience(
                      workExperience.map((item) => 
                        item.id === experience.id ? {...item, jobTitle: e.target.value} : item
                      )
                    );
                  }}
                  className='border-2 px-2 py-2 block w-full rounded-lg'/>
                </div>

                <div>
                  <label htmlFor="company-name" className='font-medium'>Company Name</label>
                  <input 
                  type="text" 
                  id='company-name' 
                  placeholder='Enter company name' 
                  value={experience.company}
                  onChange={(e) => {
                    setWorkExperience(
                      workExperience.map((item) => 
                        item.id === experience.id ? {...item, company: e.target.value} : item
                      )
                    );
                  }}
                  className='border-2 px-2 py-2 block w-full rounded-lg'/>
                </div>

                <div>
                  <label htmlFor="employment-type" className='font-medium'>Employment Type</label>

                  <select 
                  name="employment-type" 
                  id="employment-type"
                  value={experience.employmentType}
                  onChange={(e) => {
                    setWorkExperience(
                      workExperience.map((item) => 
                        item.id === experience.id ? {...item, employmentType: e.target.value} : item
                      )
                    );
                  }}
                  className='w-full border-2 rounded-lg px-2 py-2'>
                    <option value="" disabled className='text-gray-400'>Select Employment Type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="internship">Internship</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className='font-medium'>Location</label>
                  <input 
                  type="text" 
                  id='location' 
                  placeholder='Enter work location' 
                  value={experience.location}
                  onChange={(e) => {
                    setWorkExperience(
                      workExperience.map((item) => 
                        item.id === experience.id ? {...item, location: e.target.value} : item
                      )
                    );
                  }}
                  className='border-2 px-2 py-2 block w-full rounded-lg'/>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 mt-2'>
                  <div className='mt-2'>
                    <label htmlFor="start-date" className='font-medium'>Start Date</label>
                    <input 
                    type="date" 
                    id='start-date' 
                    placeholder='Enter start date'
                    value={experience.startDate}
                    onChange={(e) => {
                    setWorkExperience(
                      workExperience.map((item) => 
                        item.id === experience.id ? {...item, startDate: e.target.value} : item
                      )
                    );
                  }} 
                    className='border-2 px-2 py-2 block rounded-lg'/>
                  </div>

                  <div className='mt-2'>
                    <label htmlFor="end-date" className={`font-medium ${currentlyWorking ? "text-gray-800" : "text-black"}`}>End Date</label>
                    <input 
                    type="date" 
                    id='end-date' 
                    placeholder='Enter graduation date'
                    value={experience.endDate}
                    onChange={(e) => {
                      setWorkExperience(
                        workExperience.map((item) => 
                        item.id === experience.id ? {...item, endDate: e.target.value} : item
                        )
                      );
                    }} 
                    disabled={currentlyWorking}
                    className={`border-2 px-2 py-2 block rounded-lg ${currentlyWorking ? "bg-gray-100 text-gray-800 border-gray-300 cursor-not-allowed" : " text-black"}`}
                    />
                  </div>
                </div>

                <div className='mt-6 space-x-2'>
                  <input 
                  type="checkbox" 
                  checked={currentlyWorking}
                  onChange={(e) => setCurrentlyWorking(e.target.checked)}
                  className='cursor-pointer rounded-lg'/> 
                  <p className='inline-block font-medium'> I currently work here</p>
                </div>

                <div className='mt-8'>
                  <h2 className='font-medium'>Responsibilities & Achievements</h2>
                  <textarea 
                  name="summary" 
                  id="summary" 
                  maxLength={1000} 
                  placeholder='Describe your responsiblities and achievements...'
                  value={experience.description}
                  onChange={(e) => {
                    setWorkExperience(
                      workExperience.map((item) => 
                        item.id === experience.id ? {...item, description: e.target.value} : item
                      )
                    );
                  }} 
                  className='border-2 w-full min-h-32 p-2 mt-2 rounded-lg'></textarea>
                  <p className='text-right font-bold'>(0/1000)</p>
                  {/* live character counter. REMMEMBER */}
                </div>

                <button 
                type='button'
                onClick={() => removeWorkExperience(experience.id)}
                className='text-red-500 hover:text-red-700 font-medium text-sm cursor-pointer mt-3'
                >
                  Remove Work Experience
                </button>
              </div>
            ))}
            
            <div className='flex justify-end'>
              <button type='button' className='cursor-pointer' onClick={addWorkExperience}>+ Add Another Experience</button>
            </div>
          </form>
        </div>






        {/* Skills Section */}
        <div className='mt-18'>
          <h2 className='font-bold text-lg text-gray-900'>Skills</h2>

          <form action="">
            <div className='mt-3'>
              <label htmlFor="" className='font-medium'>Add your Skills</label>

              <div className='flex item-center gap-3'>
                <input 
                type="text" 
                placeholder="Enter a skill" 
                value={newSkills}
                onChange={(e) => setNewSkills(e.target.value)}
                className='flex-1 border-2 px-2 py-2 rounded-lg'/>

                <button 
                type="button" 
                onClick={addSkills}
                className='bg-blue-600 text-white px-5 py-3 rounded-lg'>+ Add</button>
              </div>

              <div>
                <h2 className='mt-5 font-medium'>Your Skills</h2>
              </div>

              <div className='flex flex-wrap gap-2 mt-3'>
                {skills.map((skill, index) => (
                  <span 
                  key={index}
                  className='inline-flex item-center gap-2 bg-blue-100 text-blue-700 border border-blue-200 px-3 py-2 rounded-full text-sm font-medium'
                  >
                    {skill}

                    <button type='button'
                    onClick={() => removeSkill(index)}
                    className='text-blue-500 hover:text-red-500 font-bold cursor-pointer'
                    >
                      x
                    </button>
                  </span>
                ))}
              </div>
              
            </div>

            
          </form>
        </div>







        {/* Certification Section */}
        <div className='mt-18'>
          <h2 className='font-bold text-lg text-gray-900'>Certification</h2>
          <p className='font-medium'>Add a certificate that showcase your knowledge and achievements</p>
        </div>

        <form action="" className='space-y-4'>
          {certifications.map((certification) => (
            <div key={certification.id} >

              <div className='mt-3'>
                <label htmlFor="certificationName" className='font-medium'>Certification Name</label>
                <input 
                type="text" 
                id='certificationName' 
                placeholder='e.g. Java Programming' 
                value={certification.name}
                onChange={(e) => {
                  setCertifications(
                    certifications.map((item) =>
                      item.id === certification.id ? {...item, name: e.target.value} : item
                    )
                  );
                }}
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div className='mt-3'>
                <label htmlFor="issuingOrganisation" className='font-medium'>Issuing Organisation</label>
                <input 
                type="text" 
                id='issuingOrganisation' 
                placeholder='e.g. Oracle'
                value={certification.organisation}
                onChange={(e) => {
                  setCertifications(
                    certifications.map((item) =>
                      item.id === certification.id ? {...item, organisation: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div className='mt-3'>
                <label htmlFor="issueDate" className='font-medium'>Issue Date</label>
                <input 
                type="date" 
                id='issueDate' 
                value={certification.issueDate}
                onChange={(e) => {
                  setCertifications(
                    certifications.map((item) =>
                      item.id === certification.id ? {...item, issueDate: e.target.value} : item
                    )
                  );
                }}
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div className='mt-3'>
                <label htmlFor="credentialUrl" className='font-medium'>Credential URL (Optional)</label>
                <input 
                type="url" 
                id='credentialUrl' 
                placeholder='https://example.com/certificate'
                value={certification.credentialUrl}
                onChange={(e) => {
                  setCertifications(
                    certifications.map((item) =>
                      item.id === certification.id ? {...item, credentialUrl: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <button 
              type='button'
              onClick={() => removeCertification(certification.id)}
              className='text-red-500 hover:text-red-700 font-medium text-sm cursor-pointer mt-3'
              >
                Remove Certification
              </button>
            </div>
          ))}

          <div className='flex justify-end'>
            <button type='button' className='cursor-pointer' onClick={addCertification}>+ Add Another Certification</button>
          </div>
        </form>







        {/* Project Section */}
        <div className='mt-18'>
          <h2 className='font-bold text-lg text-gray-900'>Projects</h2>
          <p className='font-medium'>Showcase projects you've worked on and highlight your practical experience</p>
        </div>
        
        <form action="" className='space-y-4 mt-3'>
          {projects.map((project) => (
            <div key={project.id}>
              <div>
                <label htmlFor="projectName" className='font-medium'>Project Name</label>
                <input 
                type="text" 
                id='projectName'
                placeholder='e.g. Student Management System'
                value={project.name}
                onChange={(e) => {
                  setProjects(
                    projects.map((item) =>
                      item.id === project.id ? {...item, name: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div>
                <label htmlFor="projectDescription" className='font-medium'>Project Description</label>
                <textarea 
                name="projectDescription" 
                id="projectDescription" maxLength={1000} 
                placeholder='Describe what the project does and the problem it solves...' 
                value={project.description}
                onChange={(e) => {
                  setProjects(
                    projects.map((item) =>
                      item.id === project.id ? {...item, description: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 w-full min-h-32 p-2 mt-2 rounded-lg'></textarea>
                <p className='text-right font-bold'>(0/1000)</p>
              </div>

              <div>
                <label htmlFor="technologiesUsed" className='font-medium'>Technologies Used</label>
                <input 
                type="text" 
                id='technologiesUsed' 
                placeholder='e.g. React, JavaScript, Tailwind CSS'
                value={project.technologies}
                onChange={(e) => {
                  setProjects(
                    projects.map((item) =>
                      item.id === project.id ? {...item, technologies: e.target.value} : item
                    )
                  );
                }}  
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div>
                <label htmlFor="projectUrl" className='font-medium'>Project URL (Optional)</label>
                <input 
                type="url" 
                id='projectUrl' 
                placeholder='https://github.com/your-project'
                value={project.projectUrl}
                onChange={(e) => {
                  setProjects(
                    projects.map((item) =>
                      item.id === project.id ? {...item, projectUrl: e.target.value} : item
                    )
                  );
                }}
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <button 
                type='button'
                onClick={() => removeProject(project.id)}
                className='text-red-500 hover:text-red-700 font-medium text-sm cursor-pointer mt-3'
                >
                Remove Project
              </button>
            </div>

          ))}
          
          <div className='flex justify-end'>
            <button type='button' onClick={addProject}> + Add Another Project</button>
          </div>
        </form>





        {/* Language */}
        <div className='mt-18'>
          <h2 className='font-bold text-lg text-gray-900'>Language</h2>
          <p className='font-medium'>Add the language you speak and indicate your proficiently</p>
        </div>

        <form action="" className='space-y-4 mt-3'>
          {languages.map((language) => (
            <div key={language.id}>
              <div>
                <label htmlFor="LangName" className='font-medium'>Language Name</label>
                <input 
                type="text" 
                id='LangName' 
                placeholder='e.g.English' 
                value={language.name}
                onChange={(e) => {
                  setLanguages(
                    languages.map((item) =>
                      item.id === language.id ? {...item, name: e.target.value} : item
                    )
                  );
                }}
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div>
                <label htmlFor="LangName" className='font-medium'>Proficiency Level</label>
                <select 
                name="profLevel" 
                id="profLevel" 
                value={language.proficiency}
                onChange={(e) => {
                  setLanguages(
                    languages.map((item) =>
                      item.id === language.id ? {...item, proficiency: e.target.value} : item
                    )
                  );
                }}
                className='w-full border-2 rounded-lg px-2 py-2'>
                  <option value="" disabled>Select Language Proficiency Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="elementary">Elementary</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="fluent">Fluent</option>
                  <option value="native">Native</option>
                </select>
              </div>

              <button 
                type='button'
                onClick={() => removeLanguages(language.id)}
                className='text-red-500 hover:text-red-700 font-medium text-sm cursor-pointer mt-3'
                >
                Remove Language
              </button>
            </div> 
          ))}

          <div className='flex justify-end'>
            <button type='button' onClick={addLanguages} className='cursor-pointer'> + Add Another Language</button>
          </div>
        </form>










        {/* Voluntary Experience */}
        <div className='mt-18'>
          <h2 className='font-bold text-lg text-gray-900'>Voluntary Experience</h2>
          <p className='font-medium'>Highlight volunteer work, community involvement and unpaid experience</p>
        </div>

        <form action="" className='space-y-4 mt-3'>
          {voluntaryExperiences.map((experience) => (
            <div key={experience.id}>
              <div>
                <label htmlFor="organisationName" className='font-medium'>Organisation Name</label>    
                <input 
                type="text" 
                id='organisationName' 
                placeholder='e.g. Red Cross' 
                value={experience.name}
                onChange={(e) => {
                  setVoluntaryExperiences(
                    voluntaryExperiences.map((item) =>
                      item.id === experience.id ? {...item, name: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div>
                <label htmlFor="Role/Position" className='font-medium'>Role/Position</label>
                <input 
                type="text" 
                id='Role/Position' 
                placeholder='e.g. Volunteer Coordinator' 
                value={experience.role}
                onChange={(e) => {
                  setVoluntaryExperiences(
                    voluntaryExperiences.map((item) =>
                      item.id === experience.id ? {...item, role: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div >
                <label htmlFor="description" className='font-medium'>Description of Responsiblities</label>
                <textarea 
                name="summary" 
                id="description" 
                maxLength={500} 
                placeholder='Describe your contributions...' 
                value={experience.description}
                onChange={(e) => {
                  setVoluntaryExperiences(
                    voluntaryExperiences.map((item) =>
                      item.id === experience.id ? {...item, description: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 w-full min-h-32 p-2 mt-2 rounded-lg'></textarea>
                <p className='text-right font-bold'>(0/1000)</p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                  <label htmlFor="start-date" className='font-medium'>Start Date</label>
                  <input 
                  type="date" 
                  id='start-date' 
                  placeholder='Enter start date' 
                  value={experience.startDate}
                  onChange={(e) => {
                    setVoluntaryExperiences(
                      voluntaryExperiences.map((item) =>
                        item.id === experience.id ? {...item, startDate: e.target.value} : item
                      )
                    );
                  }} 
                  className='border-2 px-2 py-2 block rounded-lg'/>
                </div>

                <div>
                  <label htmlFor="end-date" className='font-medium'>End Date</label>
                  <input 
                  type="date" 
                  id='end-date' 
                  placeholder='Enter graduation date' 
                  value={experience.endDate}
                  onChange={(e) => {
                    setVoluntaryExperiences(
                      voluntaryExperiences.map((item) =>
                        item.id === experience.id ? {...item, endDate: e.target.value} : item
                      )
                    );
                  }} 
                  className='border-2 px-2 py-2 block rounded-lg'/>
                </div>
              </div>

              <button 
              type='button'
              onClick={() => removeVoluntaryExperience(experience.id)}
              className='text-red-500 hover:text-red-700 font-medium text-sm cursor-pointer mt-3'
              >
                Remove Voluntary Experience
              </button>
            </div>
          ))}

          
          <div className='flex justify-end'>
            <button type='button' onClick={addVoluntaryExperience}> + Add Another Voluntary Experience</button>
          </div>
        </form>
          









        {/* Award & Experience */}
        <div className='mt-18'>
          <h2 className='font-bold text-lg text-gray-900'>Awards & Achievements</h2>
          <p className='font-medium'>Showcase recognitions, awards and notable accomplishments</p>
        </div>

        <form action="" className='space-y-4 mt-3'>
          {awards.map((award) => (
            <div key={award.id}>
              <div>
                <label htmlFor="awardName" className='font-medium'>Award Name</label>
                <input 
                type="text" 
                id='awardName' 
                placeholder='e.g. Student Management System' 
                value={award.name}
                onChange={(e) => {
                  setAwards(
                    awards.map((item) =>
                      item.id === award.id ? {...item, name: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div>
                <label htmlFor="issuingOrganisation" className='font-medium'>Issuing Organisation</label>
                <input 
                type="text" 
                id='issuingOrganisation' 
                placeholder='e.g. University of Lagos'
                value={award.issuingOrganisation}
                onChange={(e) => {
                  setAwards(
                    awards.map((item) =>
                      item.id === award.id ? {...item, issuingOrganisation: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div>
                <label htmlFor="dateReceived" className='font-medium'>Date Received</label>
                <input
                type="date" 
                id='dateReceived' 
                placeholder='Select date' 
                value={award.date}
                onChange={(e) => {
                  setAwards(
                    awards.map((item) =>
                      item.id === award.id ? {...item, date: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 px-2 py-2 block w-full rounded-lg'/>
              </div>

              <div >
                <label htmlFor="projectDescription" className='font-medium'>Description (Optional)</label>
                <textarea 
                name="summary" 
                id="projectDescription" 
                maxLength={1000} 
                placeholder='Briefly describe your achievement...' 
                value={award.description}
                onChange={(e) => {
                  setAwards(
                    awards.map((item) =>
                      item.id === award.id ? {...item, description: e.target.value} : item
                    )
                  );
                }} 
                className='border-2 w-full min-h-32 p-2 mt-2 rounded-lg'></textarea>
                <p className='text-right font-bold'>(0/1000)</p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                  <label htmlFor="start-date" className='font-medium'>Start Date</label>
                  <input 
                  type="date" 
                  id='start-date' 
                  placeholder='Enter start date' 
                  value={award.startDate}
                  onChange={(e) => {
                  setAwards(
                    awards.map((item) =>
                      item.id === award.id ? {...item, startDate: e.target.value} : item
                    )
                  );
                }} 
                  className='border-2 px-2 py-2 block rounded-lg'/>
                </div>

                <div>
                  <label htmlFor="end-date" className='font-medium'>End Date</label>
                  <input 
                  type="date" 
                  id='end-date' 
                  placeholder='Enter graduation date'
                  value={award.endDate}
                  onChange={(e) => {
                  setAwards(
                    awards.map((item) =>
                      item.id === award.id ? {...item, endDate: e.target.value} : item
                    )
                  );
                }} 
                  className='border-2 px-2 py-2 block rounded-lg'/>
                </div>
              </div>

              <button 
              type='button'
              onClick={() => removeAward(award.id)}
              className='text-red-500 hover:text-red-700 font-medium text-sm cursor-pointer mt-3'
              >
                Remove Award
              </button>
            </div>
          ))}
            
  
          <div className='flex justify-end'>
            <button type='button' className='cursor pointer' onClick={addAward}> + Add Another Award</button>
          </div>
        </form>
        

        {formErrors.length > 0 && (
          <div className="bg-red-50 border border-red-300 text-red-700 p-4 rounded-lg mb-4">
            <p className="font-semibold mb-2">
              Please correct the following errors:
            </p>

            <ul className="list-disc pl-5">
              {formErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className='flex gap-4 align-center mt-10'>
          <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
          Save CV
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
          Submit CV
        </button>
        </div>
        
      </section>



      

        
      
      {/* LIVE PEEVIEW SECTION */}
      {/* <section id='cv-preview' className='w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md mb-4'>
        <div className='text-center'>
          <h1 className='text-gray-900 font-bold text-2xl p-3'>Live Preview</h1>
          <p className='text-gray-600'>Your CV preview will appear here</p>
        </div> */}




        {/* personal info */}
        {/* <div className='mt-5'>
          <h2>{fullName || "Your Name"}</h2>
          <p>{email || "Your Email Address"} </p>
          <p>{phoneNumber || "Your Phone Number"}</p>
          <p>{location || "Your Location"}</p>
          <p>{linkedIn || "Your LinkedIn URL"}</p>
          <p>{portfolio || "Your portfolio URL"}</p>
        </div>   */}





        {/* Prof Summary */}
        {/* <div className='mt-10'>
          <h2>{professionalSummary || "Your Professional Summary"}</h2>
        </div> */}





        {/* Education */}
        {/* <div className='mt-10'>
          {educations.map((education) => (
            <div key={education.id}>
              <h3>{education.name || "Your School Name"}</h3>
              <p>{education.qualification || "Your Degree/Qualification"}</p>
              <p>{education.fieldOfStudy || "Your Field of Study"}</p>
              <p>{education.startDate || "Start Date"}</p>
              <p>{education.graduationDate || "Graduation Date"}</p>
            </div>
          ))}
        </div> */}





        {/* Work Experience */}
        {/* <div className='mt-10'>
          {workExperience.map((experience) => (
            <div key={experience.id}>
              <h3>{experience.jobTitle || "Your Job Title"}</h3>
              <p>{experience.company || "Your Company Name"}</p>
              <p>{experience.employmentType || "Your Employment Type"}</p>
              <p>{experience.location || "Your Location"}</p>
              <p>{experience.startDate || "Start Date"}</p>
              <p>{experience.endDate || "End Date"}</p>
              <p>{experience.description || "Responsibilities/Achievement"}</p>
            </div>
          ))}
        </div> */}



        

        {/* skills */}
        {/* <div className='mt-10'>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div> */}





        {/* certification */}
        {/* <div className='mt-10'>
          {certifications.map((certification) => (
            <div key={certification.id}>
              <h3>{certification.name || "Your Certification Name"}</h3>
              <p>{certification.organisation || "Issuing Organization"}</p>
              <p>{certification.issueDate || "Issue Date"}</p>
              <p>{certification.credentialUrl || "Your Credential URL"}</p>
            </div>
          ))}
        </div> */}


        

        {/* projects */}
        {/* <div className='mt-10'>
          {projects.map((project) => (
            <div key={project.id}>
              <h3>{project.name || "Your Project Name"}</h3>
              <p>{project.description || "Project Description"}</p>
              <p>{project.technologies || "Technologies Used"}</p>
              <a href={project.projectUrl}>
                {project.projectUrl || "Project URL"}
              </a>
            </div>
          ))}
        </div> */}




        {/* language */}
        {/* <div className='mt-10'>
          {languages.map((language) => (
            <div key={language.id}>
              <h3>{language.name || "Language Name"}</h3>
              <p>{language.proficiency || "Proficiency Level"}</p>
            </div>
          ))}
        </div> */}




        {/* Volunteer Experience */}
        {/* <div className='mt-10'>
          {voluntaryExperiences.map((experience) => (
            <div key={experience.id}>
              <h3>{experience.name || "Your Organisation Name"}</h3>
              <p>{experience.role || "Your Role/Position"}</p>
              <p>{experience.description || "Describe Responsibilities"}</p>
              <p>{experience.startDate || "Start Date"} - {experience.endDate || "End Date"}</p>
            </div>
          ))}
        </div> */}




        {/* Award & Achievement */}
        {/* <div className='mt-10'>
          {awards.map((award) => (
            <div key={award.id}>
              <h3>{award.name || "Award Name"}</h3>
              <p>{award.issuingOrganisation || "Issuing Organisation"}</p>
              <p>{award.date || "Date Received"}</p>
              <p>{award.description || "Describe your achievement"}</p>
              <p>{award.startDate || "Start Date"} - {award.endDate || "End Date"}</p>
            </div>
          ))}
        </div>
      </section> */}






      {/* LIVE PREVIEW SECTION */}
      <section
        id="cv-preview"
        className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md sticky top-6 self-start max-h-[calc(100vh-3rem)] overflow-y-auto">

        <div className="text-center">
          <h1 className="text-gray-900 font-bold text-2xl p-3">
            Live Preview
          </h1>
          <p className="text-gray-600">
            Your CV preview will appear here
          </p>
        </div>

        {/* MODERN TEMPLATES */}
        {selectedTemplate === "ModernTemplate1" && (
          <div className="w-full flex justify-center">
            <div className="origin-top scale-[0.80] mt-8">
              <ModernTemplate1
                formData={{
                  fullName,
                  email,
                  phoneNumber,
                  location,
                  linkedIn,
                  portfolio,
                  professionalSummary,
                  skills,
                  educations,
                  workExperience,
                  certifications,
                  projects,
                  languages,
                }}
              />
            </div>
          </div>
        )}


        {selectedTemplate === "ModernTemplate2" && (
          <div className="w-full flex justify-center">
            <div className="origin-top scale-[0.80] mt-8">
              <ModernTemplate2
                formData={{
                  fullName,
                  email,
                  phoneNumber,
                  location,
                  linkedIn,
                  portfolio,
                  professionalSummary,
                  skills,
                  educations,
                  workExperience,
                  certifications,
                  projects,
                  languages,
                }}
              />
            </div>
          </div>
        )}


        {selectedTemplate === "ModernTemplate3" && (
          <div className="w-full flex justify-center">
            <div className="origin-top scale-[0.80] mt-8">
              <ModernTemplate3
                formData={{
                  fullName,
                  email,
                  phoneNumber,
                  location,
                  linkedIn,
                  portfolio,
                  professionalSummary,
                  skills,
                  educations,
                  workExperience,
                  certifications,
                  projects,
                  languages,
                }}
              />
            </div>
          </div>
        )}


        

        {/* PROFESSIONAL TEMPLATES */}
        {selectedTemplate === "ProfessionalTemplate1" && (
          <div className="w-full flex justify-center">
            <div className="origin-top scale-[0.80] mt-8">
              <ProfessionalTemplate1
                formData={{
                  fullName,
                  email,
                  phoneNumber,
                  location,
                  linkedIn,
                  portfolio,
                  professionalSummary,
                  skills,
                  educations,
                  workExperience,
                  certifications,
                  projects,
                  languages,
                }}
              />
            </div>
          </div>
        )}
        


        {selectedTemplate === "ProfessionalTemplate2" && (
          <div className="w-full flex justify-center">
            <div className="origin-top scale-[0.80] mt-8">
              <ProfessionalTemplate2
                formData={{
                  fullName,
                  email,
                  phoneNumber,
                  location,
                  linkedIn,
                  portfolio,
                  professionalSummary,
                  skills,
                  educations,
                  workExperience,
                  certifications,
                  projects,
                  languages,
                }}
              />
            </div>
          </div>
        )}



        {selectedTemplate === "ProfessionalTemplate3" && (
          <div className="w-full flex justify-center">
            <div className="origin-top scale-[0.80] mt-8">
              <ProfessionalTemplate3
                formData={{
                  fullName,
                  email,
                  phoneNumber,
                  location,
                  linkedIn,
                  portfolio,
                  professionalSummary,
                  skills,
                  educations,
                  workExperience,
                  certifications,
                  projects,
                  languages,
                }}
              />
            </div>
          </div>
        )}
      </section>
    </main>
    
    </>
  )
}

export default CVBuilder;