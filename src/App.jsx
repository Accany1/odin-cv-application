import { useState } from 'react'
import SectionInput from './components/section.jsx'
import {ExperienceInput, ExperienceOutput} from './components/experience.jsx'
import {EducationInput, EducationOutput} from './components/education.jsx'



function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [schoolID, setSchoolID] = useState(0)
  const [experienceID, setExperienceID] = useState(0)
  const [educationVisibility, setEducationVisibility] = useState('none')
  const [experienceVisibility, setExperienceVisibility] = useState('none')
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  function ExperienceAdd() {
    setExperience([...experience, {id: experienceID,company:'', position:'', startDate:'', endDate:'', description:''}])
    setExperienceVisibility('block')
    setExperienceID(experienceID + 1)
  }

  function ExperienceDelete(index) {
    setExperience(experience.filter((e) => e.id !== index))
    if (experience.length === 1) {
      setExperienceVisibility('none')
    }
  }

  const HandleCompanyChange = (a, e) => {
    const newData = a
    let newExperience = [...experience]

    for (let i = 0; i < newExperience.length; i++) {
      if (newExperience[i].id === e.id) {
        newExperience[i].company = newData
      }
    }
    return newExperience
  }

  const HandlePositionChange = (a, e) => {
    const newData = a
    let newExperience = [...experience]
    
    for (let i = 0; i < newExperience.length; i++) {
      if (newExperience[i].id === e.id) {
        newExperience[i].position = newData
      }
    }
    return newExperience
  }

  const HandleExperienceStartDateChange = (a, e) => {
    const newData = a
    let newExperience = [...experience]
    
    for (let i = 0; i < newExperience.length; i++) {
      if (newExperience[i].id === e.id) {
        newExperience[i].startDate = newData
      }
    }
    return newExperience
  }

  const HandleExperienceEndDateChange = (a, e) => {
    const newData = a
    let newExperience = [...experience]
    
    for (let i = 0; i < newExperience.length; i++) {
      if (newExperience[i].id === e.id) {
        newExperience[i].endDate = newData
      }
    }
    return newExperience
  }


  const HandleExperienceDescriptionChange = (a, e) => {
    const newData = a
    let newExperience = [...experience]
    
    for (let i = 0; i < newExperience.length; i++) {
      if (newExperience[i].id === e.id) {
        newExperience[i].description = newData
      }
    }
    return newExperience
  }

  function EducationAdd() {
    setEducation([...education, {id: schoolID,school:'', title:'', startDate:'', endDate:'', description:''}])
    setEducationVisibility('block')
    setSchoolID(schoolID + 1)
  }

  function EducationDelete(index) {
    setEducation(education.filter((e) => e.id !== index))
    if (education.length === 1) {
      setEducationVisibility('none')
    }
  }

  const HandleSchoolChange = (a, e) => {
    const newData = a
    let newEducation = [...education]
    
    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].id === e.id) {
        newEducation[i].school = newData
      }
    }
    return newEducation
  }

  const HandleTitleChange = (a, e) => {
    const newData = a
    let newEducation = [...education]
    
    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].id === e.id) {
        newEducation[i].title = newData
      }
    }
    return newEducation
  }

  const HandleStartDateChange = (a, e) => {
    const newData = a
    let newEducation = [...education]
    
    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].id === e.id) {
        newEducation[i].startDate = newData
      }
    }
    return newEducation
  }

  const HandleEndDateChange = (a, e) => {
    const newData = a
    let newEducation = [...education]
    
    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].id === e.id) {
        newEducation[i].endDate = newData
      }
    }
    return newEducation
  }

  const HandleDescriptionChange = (a, e) => {
    const newData = a
    let newEducation = [...education]
    
    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].id === e.id) {
        newEducation[i].description = newData
      }
    }
    return newEducation
  }

  return (
    <>
      <div className="overall-container">
        <div className="form-containers">
          <form className="general-info">
            <h1>Personal information</h1>
            <SectionInput name={name} label='Name: ' type="text" setFunction={(e) => setName(e.target.value)} />
            <SectionInput name={email} label='Email: ' type="email" setFunction={(e) => setEmail(e.target.value)} />
            <SectionInput name={phone} label='Phone: ' type="number" setFunction={(e) => setPhone(e.target.value)} />
            <h1>Experience</h1>
            <div className="experience-topline">
            {experience.map((e) => {return <ExperienceInput key={e.id} company={e.company} label="company" position={e.position} startDate={e.startDate} endDate={e.endDate} description={e.description} setCompany={(a) => setExperience(HandleCompanyChange(a.target.value,e))} setPosition={(a) => setExperience(HandlePositionChange(a.target.value,e))} setStartDate={(a) => setExperience(HandleExperienceStartDateChange(a.target.value,e))} setEndDate={(a) => setExperience(HandleExperienceEndDateChange(a.target.value,e))} setDescription={(a) => setExperience(HandleExperienceDescriptionChange(a.target.value,e))} setDelete={() => ExperienceDelete(e.id)} />})}
            <div className="add-experience" onClick={ExperienceAdd}>+ Add experience</div>
            </div>
            <h1>Education</h1>
            <div className="education-topline"></div>
            {education.map((e) => {return <EducationInput key={e.id} school={e.school} label="school" title={e.title} startDate={e.startDate} endDate={e.endDate} description={e.description} setSchool={(a) => setEducation(HandleSchoolChange(a.target.value,e))} setTitle={(a) => setEducation(HandleTitleChange(a.target.value,e))} setStartDate={(a) => setEducation(HandleStartDateChange(a.target.value,e))} setEndDate={(a) => setEducation(HandleEndDateChange(a.target.value,e))} setDescription={(a) => setEducation(HandleDescriptionChange(a.target.value,e))} setDelete={() => EducationDelete(e.id)} />})}
            <div className="add-education" onClick={EducationAdd}>+ Add education</div>
          </form>
        </div>
        <div className="result-container">
          <h1>Result</h1>
          <div className="result-page">
            <div className="personal-output">
                <h1>{name}</h1>
              <div className="personal-holding">
                <div>{email.length > 0 && 'Email:'}</div>
                <div>{email}</div>
              </div>
              <div className="personal-holding">
                <div>{phone.length > 0 && 'Phone:'}</div>
                <div>{phone}</div>
              </div>
            </div>
            <h2> {experienceVisibility === 'block' && 'Experience'}</h2>
            {experience.map((e) => {return <ExperienceOutput key={e.id} company={e.company} position={e.position} startDate={e.startDate} endDate={e.endDate} description={e.description} />})}
            <h2> {educationVisibility === 'block' && 'Education'}</h2>
            {education.map((e) => {return <EducationOutput key={e.id} school={e.school} title={e.title} startDate={e.startDate} endDate={e.endDate} description={e.description} />})}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
