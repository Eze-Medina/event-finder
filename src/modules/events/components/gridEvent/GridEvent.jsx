import { Card } from '../card/Card'
import { getEvents } from '../../helpers/getEvents'
import style from './gridEvent.module.css'
import { useEffect, useState } from 'react'
import { format } from '../../helpers/format'

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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
