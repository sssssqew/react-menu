import React, { useState, useEffect } from 'react'
import './App.css'
import logo from './logo.svg'

function App(){
    const [user, setUser] = useState(null)

    console.log(process.env.REACT_APP_BASE_URL)
    useEffect(() => {
        console.log('서버주소 @: ', process.env.REACT_APP_BASE_URL)
    
        fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: "esbuild",
                email: "esbuild@gmail.com",
                userId: "esbuild",
                password: "esbuild123@"  
            })
        })
        .then(res => res.json())
        .then(result => {
          console.log(result)
          setUser(result.newUser)
        })
      }, [])

    return (
        <div className='App'>
            <h1>Hello, ebsuild ! </h1>
            <img src={logo} alt="logo" width={500} height={500}/>
            {user ? (
                        <>
                        <h1>회원정보</h1>
                        <p>이름: {user.name}</p>
                        <p>연락처: {user.email}</p>
                        <p>아이디: {user.userId}</p>
                        </>
                    ) : "사용자정보 조회중..."}
        </div>
    )
}
export default App