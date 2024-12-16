import { useState } from 'react'
import Student from './Student'

function App() {
  const [subject, setSubject] = useState("")
  const [time, setTime] = useState("")
  const [addItem, setAddItem] = useState([])
  function addone(e)
  {
    e.preventDefault();
    setAddItem([...addItem, { subject, time }]);
    setSubject("");
    setTime("");
    
    
  }
  return (
    <div>
      <form >
      <h1>Student Timetable</h1>
      <input type="text" value={subject} onChange={e=>setSubject(e.target.value)} placeholder='Subject' />
      <input type="text" value={time} onChange={e=>setTime(e.target.value)} placeholder='Time' />
      <button style={{backgroundColor:"blue", color:"white", borderRadius:"12px"}} onClick={addone}>Add</button>
      </form>
      <ul>
        {addItem?.map((item, index) => (
          <li key={index}>
            {item.subject} - {item.time}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App