import { useSelector } from "react-redux"
import { Nav } from "../components/nav/Nav"
import { EventFinder } from "./pages/EventFinder"
import { Footer } from "../components/footer/Footer"
import { EventModal } from "../modules/events/components/modal/EventModal"
import style from './app.module.css'

export const App = () => {
  
  const { eventModal } = useSelector( state => state.events );
  
  return (
      <div className={style.app}>
        <div className={style.content}>
          <Nav/>
          <EventFinder/>
          {/* <Footer/> */}
          { eventModal.active && <EventModal/> }
        </div>
      </div>
  )
}
