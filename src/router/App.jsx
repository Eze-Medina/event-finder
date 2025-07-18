import { Nav } from "../components/nav/Nav"
import { Footer } from "../components/footer/Footer"
import { EventFinder } from "./pages/EventFinder"
import style from './app.module.css'

export const App = () => {
  return (
    <div className={style.app}>
      <div className={style.content}>
        <Nav/>
        <EventFinder/>
        <Footer/>
      </div>
    </div>
  )
}
