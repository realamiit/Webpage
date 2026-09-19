import React from 'react'
import {Bookmark, User as UserIcon} from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const arr = [
    20,30,40
  ];

  
  return (
    <div className='parent'>
    {arr.map(function(elem){
    return <User name={elem}/>
  }) }
    </div>
  )
}

export default App
