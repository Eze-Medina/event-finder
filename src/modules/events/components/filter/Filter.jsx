import style from './filter.module.css'
import { Search } from "lucide-react"

export const Filter = () => {

  const manejarClick = () => {
    console.log("¡Hiciste clic!");
  };


  return (
    <div className={style.inputCont}>
      <div className={style.element}>
        <input type="text" placeholder='Search events by name, city, or venue...'/>
        <button onClick={ manejarClick }>
          <Search color="rgb(212, 212, 212)"/>
        </button>
      </div>
    </div>
  )
}
