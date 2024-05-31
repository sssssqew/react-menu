import React from 'react'
import './App.css'
import logo from './logo.svg'

function App(){
    console.log(process.env.REACT_APP_BASE_URL)

    return (
        <div className='App'>
            <h1>Hello, ebsuild ! </h1>
            <img src={logo} alt="logo" width={500} height={500}/>
        </div>
    )
}
export default App