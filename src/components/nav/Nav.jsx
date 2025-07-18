import style from './nav.module.css'
import { Calendar, Moon, Sun } from "lucide-react"

export const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.icon}>
        <div className={style.appIcon}>
          <Calendar className={style.calendar} />
        </div>
        <h1>EventHub</h1>
      </div>
      <Moon/>
    </div>
  )
}
