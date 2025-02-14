import { useState } from 'react'

function SectionInput({name, type, setFunction, label}) {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        value={name}
        name = {name}
        onChange={setFunction}
      />
    </div>
  )
}

function EducationInput({setSchool,school,label,title,year,setYear,setTitle, setDelete}) {
  return (
      <div className="education-container">
        <div className="education-holding">
          <label htmlFor={label}>School: </label>
          <input type="text" name={label} value={school} onChange={setSchool} />
        </div>
        <div className="education-holding">
          <label htmlFor={label}>Title of study: </label>
          <input type="text" name={label} value={title} onChange={setTitle} />
        </div>
        <div className="education-holding">
          <label htmlFor={label}>Year of study: </label>
          <input type="number" name={label} value={year} onChange={setYear} />
        </div>
        <button className="delete-button" onClick={() => setDelete()}>Delete</button>
      </div>
  )
}

function EducationOutput({school, title, date}) {
  return (
    <div className="education-output">
      <p>{school}</p>
      <p>{title}</p>
      <p>{date}</p>
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [schoolID, setSchoolID] = useState(0)
  const [education, setEducation] = useState([])

  function EducationAdd() {
    setEducation([...education, {id: schoolID,school:'', title:'', year:''}])
    setSchoolID(schoolID + 1)
  }

  function EducationDelete(index) {
    setEducation(education.filter((e) => e.id !== index))
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

  const HandleYearChange = (a, e) => {
    const newData = a
    let newEducation = [...education]
    
    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].id === e.id) {
        newEducation[i].year = newData
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
            <h1>Education</h1>
            <div className="education-topline"></div>
            {/* <EducationInput school={education.school} label="school" title={education.title} year={education.year} setSchool={(e) => setEducation({...education, school:e.target.value})} setTitle={(e) => setEducation({...education, title:e.target.value})} setYear={(e) => setEducation({...education, year:e.target.value})} /> */}
            {education.map((e) => {return <EducationInput key={e.id} school={e.school} label="school" title={e.title} year={e.year} setSchool={(a) => setEducation(HandleSchoolChange(a.target.value,e))} setTitle={(a) => setEducation(HandleTitleChange(a.target.value,e))} setYear={(a) => setEducation(HandleYearChange(a.target.value,e))} setDelete={() => EducationDelete(e.id)} />})}
            <div className="add-education" onClick={EducationAdd}>+ Add education</div>
          </form>
        </div>
        <div className="result-container">
          <h1>Result</h1>
          <div className="result-page">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
