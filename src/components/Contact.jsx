import { Link } from "react-router-dom"
import styles from "../style"
import Button from "./Button"

const Contact = () => (
    <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col ">
        <h2 className={styles.heading2}>Ready to try RecAuto?</h2>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to="/SignUp">
        <Button />

        </Link>
      </div>
    </section>
  )

export default Contact