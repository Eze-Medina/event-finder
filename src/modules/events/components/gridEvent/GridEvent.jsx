import { useEffect, useState } from 'react'
import { getEvents } from '../../helpers/getEvents'
import { format } from '../../helpers/format'
import { Card } from '../card/Card'
import style from './gridEvent.module.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const placeHolder = {
  name: '',
  startDate: '',
  startTime: '',
  eventType: '',
  location: ''
};

export const GridEvent = () => {
  
  const [eventsData, setEventsData] = useState()
  
  useEffect(() => {
    
    const recuperarInfo = async () => {
      const resp = await getEvents();
      const data = format(resp);
      setEventsData(data);
    }
    recuperarInfo();
  }, [])
  
  return (
    <div className={style.cardContainer}>
        { (eventsData === undefined) 
            ? Array.from({ length: 6 }).map((_, i) => <Card data={placeHolder} key={i} />)
            : eventsData.map((event, idx) => (
                <Card data={event} key={idx}/>
            ))
        }
        <div className={style.page}>
          <button><ChevronLeft/></button>
          <p>page</p>
          <button><ChevronRight/></button>
        </div>
    </div>
  )
}
