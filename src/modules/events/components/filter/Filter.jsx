import style from './filter.module.css'
import { Search } from "lucide-react"

export const Filter = () => {
  return (
    <div className={style.inputCont}>
      <div className={style.searchCont}>
        <Search/>
      </div>
      <input type="text" placeholder='Search events by name, city, or venue...'/>
    </div>
  )
}
