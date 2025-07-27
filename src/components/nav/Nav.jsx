import { useTheme } from '../../hooks/useTheme'
import { Calendar, Moon, Sun } from "lucide-react"
import style from './nav.module.css'

export const Nav = () => {
  
  const { theme, toggleTheme } = useTheme();

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
        { theme === "light"
          ? <Moon onClick={toggleTheme} size={20} />
          : <Sun onClick={toggleTheme} size={20} color='white'/>
        }
      </div>  
    </div>
  )
}
