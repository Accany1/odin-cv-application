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
        <div className="education-date">
          <label htmlFor={label}>Start Date: </label>
          <label htmlFor={label}>End Date: </label>
          <input className="date-input" type="date" name={label} value={startDate} onChange={setStartDate} />
          <input className="date-input" type="date" name={label} value={endDate} onChange={setEndDate} />
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

export {EducationInput, EducationOutput}