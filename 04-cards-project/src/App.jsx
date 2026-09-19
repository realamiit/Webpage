import React from 'react'
import {Bookmark, User as UserIcon} from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const arr = ["Amit", "Neha", "Hiya","Roben", "Jeric"];
  return (
    <div className='parent'>
      <User name={arr[1]}/> 
      <User name={3} />
      <User name={arr[0]} />
      <User name={arr[2]} />
      <User name={arr[4]} />

    </div>
  )
}

export default App
