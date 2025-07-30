import { Filter } from '../../modules/events/components/filter/Filter'
import { GridEvent } from '../../modules/events/components/gridEvent/GridEvent'
import style from './eventFinder.module.css'

export const EventFinder = () => {
  return (
    <div>
      <Filter/>
      <GridEvent/>
    </div>
  )
}
