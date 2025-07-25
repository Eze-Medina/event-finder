import { Calendar, MapPin} from 'lucide-react'
import style from './card.module.css'

export const Card = () => {
  return (
    <div className={style.card}>
      <img src="https://placehold.co/100x50" alt="" />
      <h2>Event Name</h2>
      <p><Calendar size={20}/>Wed, Aug 14 at 18:00</p>
      <p><MapPin size={20}/>Hollywood Bowl, Los Angeles</p>
      <div className={style.detail}>
        price
        <button>View Details</button>
      </div>
    </div>
  )
}
