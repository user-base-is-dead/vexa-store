import { Header } from "../../components/Header/Header"
import { HomeHero } from "./HomeHero/HomeHero"
import './Home.css'

export const Home = () => {
  return (
    <div className="home-page">
      <div className="first-section">
        <Header />
        <HomeHero />
      </div>

      <div className="second-section">

      </div>

    </div>
  )
}
