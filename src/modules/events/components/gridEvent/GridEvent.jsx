import { Card } from '../card/Card'
import style from './gridEvent.module.css'

export const GridEvent = () => {
  return (
    <div className={style.cardContainer}>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
