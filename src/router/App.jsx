import { Nav } from "../components/nav/Nav"
import { Footer } from "../components/footer/Footer"
import { EventFinder } from "./pages/EventFinder"
import style from './app.module.css'
import { EventModal } from "../modules/events/components/modal/EventModal"

export const App = () => {
  return (
    <div className={style.app}>
      <div className={style.content}>
        <Nav/>
        <EventFinder/>
        <Footer/>
        {/* <EventModal/> */}
      </div>
    </div>
  )
}
