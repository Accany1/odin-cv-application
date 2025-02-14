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

function EducationInput({setSchool,school,label,title,startDate,endDate,setStartDate,setEndDate,setTitle, setDelete, description, setDescription}) {
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
          <label htmlFor={label}>Start Date: </label>
          <input type="date" name={label} value={startDate} onChange={setStartDate} />
        </div>
        <div className="education-holding">
          <label htmlFor={label}>End Date: </label>
          <input type="date" name={label} value={endDate} onChange={setEndDate} />
        </div>
        <div className="education-holding">
          <label htmlFor={label}>Description: </label>
          <textarea name={label} value={description} onChange={setDescription} />
        </div>
        <button className="delete-button" onClick={() => setDelete()}>Delete</button>
      </div>
  )
}

function EducationOutput({school, title, startDate, endDate, description}) {
  return (
    <div className="education-output">
      <div className="result-holding">
        <div className='school-title'>{school}</div>
      </div>
      <div className="result-holding">
        <div className='study-title'>{title}</div>
      </div>
      <div className="result-holding">
        <div className='date-title'>{startDate} - {endDate}</div>
      </div>
      <div className="result-holding">
        <div className='description'>{description}</div>
      </div>
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [schoolID, setSchoolID] = useState(0)
  const [educationVisibility, setEducationVisibility] = useState('none')
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  function EducationAdd() {
    setEducation([...education, {id: schoolID,school:'', title:'', startDate:'', endDate:'', description:''}])
    setEducationVisibility('block')
    setSchoolID(schoolID + 1)
  }

  function EducationDelete(index) {
    setEducation(education.filter((e) => e.id !== index))
    if (education.length === 0) {
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
            <h2> {educationVisibility === 'block' && 'Education'}</h2>
            {education.map((e) => {return <EducationOutput key={e.id} school={e.school} title={e.title} startDate={e.startDate} endDate={e.endDate} description={e.description} />})}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
