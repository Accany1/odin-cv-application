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

export default SectionInput