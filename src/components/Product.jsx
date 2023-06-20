import { apple, google } from "../assets"
import styles ,{layout} from "../style"
import { Mic } from "../assets"

const Product = () => (
    <section id="product" className={layout.sectionReverse} >
      <div className={layout.sectionImgReverse}>
      <img src={Mic} alt="card" className="animate-pulse-slow w-[70%] h-[100%]"  />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />

      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Communicate with customers <br className="sm:block hidden"/> in a personal way</h2>
        <p className={`${styles.paragraph} max-w-[460px] mt-5 `}> Engage with Your Audience and Clients through Seamless Online Voice Messaging.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
         <a href="https://www.apple.com/store"> <img src={apple} alt="apple_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" /></a>
         <a href="https://play.google.com/store/games?pli=1"> <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" /></a>

        </div>
      </div>
    </section>
  )

export default Product