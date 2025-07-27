import { useEffect, useState } from 'react'
import { getEvents } from '../../helpers/getEvents'
import { format } from '../../helpers/format'
import { Card } from '../card/Card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import style from './gridEvent.module.css'

const placeHolder = {
  name: '',
  startDate: '',
  startTime: '',
  eventType: '',
  location: ''
};

export const GridEvent = () => {
  
  const [eventsData, setEventsData] = useState()
  const [page, setPage] = useState(0)

  useEffect(() => {
    
    const recuperarInfo = async () => {
      const resp = await getEvents(page);
      const data = format(resp);
      setEventsData(data);
    }
    recuperarInfo();
  }, [page])
  
  const alterPage = (move) => {
    if(page > 0 | move > 0){
      setPage( c => c + move)
    }
  }

  return (
    <div className={style.cardContainer}>
        { (eventsData === undefined) 
            ? Array.from({ length: 6 }).map((_, i) => <Card data={placeHolder} key={i} />)
            : eventsData.map((event, idx) => (
                <Card data={event} key={idx}/>
            ))
        }
        <div className={style.page}>
          <button
            onClick={() => alterPage(-1)}>
              <ChevronLeft/></button>
          <p>{page + 1}</p>
          <button
            onClick={() => alterPage(1)}>
              <ChevronRight/></button>
        </div>
    </div>
  )
}
