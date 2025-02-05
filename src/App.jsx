import { useState } from 'react'
import './App.css'

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

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [generalVisibility, setGeneralVisibility] = useState('flex')

  const SubmitName = () => {
    event.preventDefault()
    if (generalVisibility === 'none') {
      setGeneralVisibility('flex')
    } else {
      setGeneralVisibility('none')
    }
  }

  return (
    <>
      <form className="general-info" style={{display: generalVisibility}}>
        <SectionInput name={name} label='Name: ' type="text" setFunction={(e) => setName(e.target.value)} />
        <SectionInput name={email} label='Email: ' type="email" setFunction={(e) => setEmail(e.target.value)} />
        <SectionInput name={phone} label='Phone: ' type="number" setFunction={(e) => setPhone(e.target.value)} />
        <button onClick={SubmitName}>Submit</button>
      </form>
    </>
  )
}

export default App
