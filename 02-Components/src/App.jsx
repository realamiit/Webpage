import React from 'react'
 
const user = 'Amit'
const age = 23
const location = "Greater Noida"
const course = "MCA"
const College = "G.L Bajaj Instuite of Tecnology & Management"


const App = () => {
  return (
    <>
    <div className='card'>
      <h1>{user} Gupta</h1>
      <p>I Am {age} year old!!</p>
      <p>I live in {location} And I' am persuing My Post Graduation {course} from {College}  </p>
    </div>
    </>
  )
}

export default App
