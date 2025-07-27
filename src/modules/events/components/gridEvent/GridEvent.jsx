import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chagenPage, loadEvent } from '../../../../store/slices/event'
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
  
  const dispatch = useDispatch();
  const { eventList, page } = useSelector( state => state.events );

  useEffect(() => {
    dispatch(loadEvent(page));
  }, [page]);
  
  const alterPage = (move) => {
    if(page > 0 | move > 0){
      dispatch(chagenPage(move))
    }
  }

  return (
    <div className={style.cardContainer}>
        { (eventList === undefined) 
            ? Array.from({ length: 6 }).map((_, i) => <Card data={placeHolder} key={i} />)
            : eventList.map((event, idx) => (
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
