import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Custom from './components/Custom'
import Select from './components/Select'
import Input from './components/Input'
import Button from './components/Button'
import Generate from './components/Generate'
import Table from './components/Table'
import './App.css'

const App = () => {
  return (
    <div>
      {/* Navbar component */}
      <Navbar/>
      {/* Sidebar  Component */}
      <Sidebar/>
      {/*  */}
      <Table/>
      {/* Input component */}
      <div className="custom-select-container">
        <Custom />
        <Select />
      </div>

      
      <div className="center-container">
        <Input className="input-box" />
        <Button />
      </div>
      {/* Generate Component */}
      <Generate/>
    </div>
  )
}

export default App
