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

function EducationInput({setSchool,school,label,title,year,setYear,setTitle}) {
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
        <button className="delete-button" onClick={() => setEducation(education.filter((e, i) => i !== index))}>Delete</button>
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
  const [education, setEducation] = useState([{id:schoolID, school:'school of meh', title:'degree of meh', year:'2023'}])

  

  function EducationAdd() {
    // add school of study
    const container = document.querySelector('.education-topline')
    const eduDiv = document.createElement("div")
    eduDiv.classList.add("education-container")
    const holdingDiv1 = document.createElement("div")
    holdingDiv1.classList.add("education-holding")
    const schoolLabel = document.createElement("label")
    schoolLabel.htmlFor = "school"
    schoolLabel.innerText = "School: "
    holdingDiv1.appendChild(schoolLabel)
    const schoolNameInput = document.createElement("input")
    schoolNameInput.type = "text"
    holdingDiv1.appendChild(schoolNameInput)
    eduDiv.appendChild(holdingDiv1)

    // add title of study
    const holdingDiv2 = document.createElement("div")
    holdingDiv2.classList.add("education-holding")
    const titleLabel = document.createElement("label")
    titleLabel.htmlFor = "title"
    titleLabel.innerText = "Title of study: "
    holdingDiv2.appendChild(titleLabel)
    const titleNameInput = document.createElement("input")
    titleNameInput.type = "text"
    holdingDiv2.appendChild(titleNameInput)
    eduDiv.appendChild(holdingDiv2)

    // add date of study
    const holdingDiv3 = document.createElement("div")
    holdingDiv3.classList.add("education-holding")
    const dateLabel = document.createElement("label")
    dateLabel.htmlFor = "date"
    dateLabel.innerText = "Date of study: "
    holdingDiv3.appendChild(dateLabel)
    const dateNameInput = document.createElement("input")
    dateNameInput.type = "date"
    holdingDiv3.appendChild(dateNameInput)
    eduDiv.appendChild(holdingDiv3)

    // delete button
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-button")
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener("click", () => {
      container.removeChild(eduDiv)
    })
    eduDiv.appendChild(deleteButton)

    container.appendChild(eduDiv)
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
            {education.map((e, i) => {return <EducationInput key={i} school={e.school} label="school" title={e.title} year={e.year} setSchool={(e) => setEducation(
              education.map((education, index) => {
                if (index === i) {
                  return {...education, school:e.target.value}
                } else {
                  return education
                }
              })
            )} setTitle={(e) => setEducation(
              education.map((education, index) => {
                if (index === i) {
                  return {...education, title:e.target.value}
                } else {
                  return education
                }
              })
            )} setYear={(e) => setEducation(
              education.map((education, index) => {
                if (index === i) {
                  return {...education, year:e.target.value}
                } else {
                  return education
                }
              })
            )} />})}
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
