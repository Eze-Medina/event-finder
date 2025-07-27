import { useState } from 'react'
import { Calendar, MapPin} from 'lucide-react'
import style from './card.module.css'

export const Card = ({ data }) => {
  
  const [active, setActive] = useState(false)
  
  const toggleModal = () => {
    setActive(!active)
  }

  return (
    <div className={style.card}>
      <div className={style.type}>
        <p>{data.eventType}</p>
      </div>
      <img src="https://placehold.co/100x50" alt="" />
      <div className={style.eventDataContainer}>
        <h2>{data.name}</h2>
        <div>
          <p><Calendar size={20}/>{data.startDate}</p>
          <p><MapPin size={20}/>{data.location} {data.startTime}</p>
        </div>
        <div className={style.detail}>
          $50 - $275
          <button onClick={toggleModal}>
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
