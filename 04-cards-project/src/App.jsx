import React from 'react'
import {Bookmark, User as UserIcon} from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const arr = [
    {
      user:'Nitin',
      age: 22,
      class: 'MCA'
    },
    {
      user:'Sumit',
      age: 23,
      class: 'MCA'
    },
    {
      user:'Ashish',
      age: 24,
      class: 'MCA'
    },
    {
      user:'Amit',
      age: 21,
      class: 'MCA'
    }
  ];

  arr.map(function(elem){
    console.log(elem.class)
  }) 
  return (
    <div className='parent'>
    

    </div>
  )
}

export default App
