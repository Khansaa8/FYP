import { CustomerSupport } from "../assets"
import styles , {layout} from "../style"
import Button from "./Button"


const About = () =>(
    <section id="About" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better customer<br className="sm:block hidden" /> support service.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Customer can simply speak to their need, and get on their day, whether you're available to respond immediately or later.</p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={CustomerSupport} alt="card" className="animate-pulse-slow w-[70%] h-[100%]" />
      </div>
    </section>
  )


export default About