import { CustomerSupport } from "../assets"
import styles , {layout} from "../style"
import Button from "./Button"
import { Link } from "react-router-dom"


const About = () =>(
    <section id="about" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better customer<br className="sm:block hidden" /> support service.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Customer can simply speak to their need, and get on their day, whether you're available to respond immediately or later.</p>
        <Link to="/SignUp">
        <Button styles=" mt-10"/>

        </Link>
      </div>
      <div className={layout.sectionImg}>
        <img src={CustomerSupport} alt="card" className="animate-pulse w-[70%] h-[100%]" />
      </div>
    </section>
  )


export default About