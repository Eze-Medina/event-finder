import { Calendar, MapPin} from 'lucide-react'
import style from './card.module.css'

export const Card = ({ data }) => {
  
  return (
    <div className={style.card}>
      <img src="https://placehold.co/100x50" alt="" />
      <h2>{data.name}</h2>
      <p><Calendar size={20}/>{data.startDate}</p>
      <p><MapPin size={20}/>{data.location} {data.startTime}</p>
      <div className={style.detail}>
        $50 - $275
        <button>View Details</button>
      </div>
    </div>
  )
}
