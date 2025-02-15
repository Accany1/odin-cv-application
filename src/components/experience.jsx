function ExperienceInput({setCompany,company,label,position,startDate,endDate,setStartDate,setEndDate,setPosition, setDelete, description, setDescription}) {
    return (
        <div className="experience-container">
          <div className="experience-holding">
            <label htmlFor={label}>Company: </label>
            <input type="text" name={label} value={company} onChange={setCompany} />
          </div>
          <div className="experience-holding">
            <label htmlFor={label}>Position: </label>
            <input type="text" name={label} value={position} onChange={setPosition} />
          </div>
          <div className="experience-date">
            <label htmlFor={label}>Start Date: </label>
            <label htmlFor={label}>End Date: </label>
            <input className="date-input" type="date" name={label} value={startDate} onChange={setStartDate} />
            <input className="date-input" type="date" name={label} value={endDate} onChange={setEndDate} />
          </div>
          <div className="experience-holding">
            <label htmlFor={label}>Description: </label>
            <textarea name={label} value={description} onChange={setDescription} />
          </div>
          <button className="delete-button" onClick={() => setDelete()}>Delete</button>
        </div>
    )
  }
  
  function ExperienceOutput({company, position, startDate, endDate, description}) {
    return (
      <div className="experience-output">
        <div className="result-holding">
          <div className='company-title'>{position} at {company}</div>
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

export {ExperienceInput, ExperienceOutput}