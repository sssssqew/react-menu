import React, { useState } from 'react'
import './App.css'
import logo from './logo.svg'

const Menu = ({ open, children, style={} }) => {
    return (
        <div 
            className={`menu-container ${open && 'on'}`} 
            style={style}
        >
            {children}
        </div>
    )
}
const MenuItem = ({ children, style={}, hoverStyle={}, handleClose }) => {
    const [hover, setHover] = useState(false)
    return (
        <div 
            className='menuItem-container'
            style={hover ? {...style, ...hoverStyle} : style} // 호버스타일 적용여부 판단
            onClick={handleClose} 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </div>
    )
}

function App(){
    const [menu, setMenu] = useState(null)

    const selectMenu = (e) => {
        if(e.currentTarget.id !== menu){ // 이전과 다른 메뉴 선택한 경우 메뉴 열기
            setMenu(e.currentTarget.id)
        }else{                           // 이전과 동일한 메뉴 선택한 경우 메뉴 닫기
            setMenu(null)
        }
    }
    const handleClose = (e) => {
        e.stopPropagation()
        setMenu(null)
    }

    return (
        <div className='App'>
            <nav>
                <ul>
                    <li onClick={selectMenu} id={0}>
                        HOME
                        <Menu open={menu==0}>
                            <MenuItem>HOME[1]</MenuItem>
                            <MenuItem>HOME[2]</MenuItem>
                            <MenuItem>HOME[3]</MenuItem>
                        </Menu>
                    </li>
                    <li onClick={selectMenu} id={1}>
                        ABOUT
                        <Menu open={menu==1}>
                            <MenuItem>ABOUT[1]</MenuItem>
                            <MenuItem>ABOUT[2]</MenuItem>
                            <MenuItem>ABOUT[3]</MenuItem>
                        </Menu>
                    </li>
                    <li onClick={selectMenu} id={2}>
                        CONTACT
                        <Menu open={menu==2}>
                            <MenuItem>CONTACT[1]</MenuItem>
                            <MenuItem>CONTACT[2]</MenuItem>
                            <MenuItem>CONTACT[3]</MenuItem>
                        </Menu>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default App