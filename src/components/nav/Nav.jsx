import { useState } from 'react'
import { Calendar, Moon, Sun } from "lucide-react"
import style from './nav.module.css'

export const Nav = () => {
  
  const [active, setActive] = useState(true)
  
  const toggle = () => {
    setActive(!active)
  }

  return (
    <div className={style.container}>
      <div className={style.icon}>
          <Calendar 
            style={{
              background: 'linear-gradient(to right, #2c3e50, #2980b9)',
              padding: '6px',
              borderRadius: '7px',
              color: 'white'
            }}
            size={20} className={style.calendar} />
        <h1>EventHub</h1>
      </div>
      <div className={style.theme}>
        {
          active ? 
            <Moon onClick={toggle} size={20}/> : 
            <Sun onClick={toggle} size={20}/>
        }
      </div>  
    </div>
  )
}
