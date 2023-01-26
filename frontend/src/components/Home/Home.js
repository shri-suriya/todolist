import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
function Home() {
  return (
    <div>
      <Navbar />
      <div className='Main-Comp'>
        <h1 className='ToDo'>To Do List</h1>
      </div>
    </div>
  )
}
export default Home;