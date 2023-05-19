import styles from "../style"

const Testimonial = () =>  (
    <section className={`${styles.paddingY}  ${styles.flexCenter} relative`}>
      <div className="absolute z-[0] rounded-full blue__gradient " />
      <div className="flex items-center md:flex-row flex-col sm:mb-10 mb-6">
        <p className={`font-poppins font-medium text-dimWhite text-[35px] leading-[55.8px]`}>Connect Personally - Value the Customer - <br className="sm:block hidden"/>Live Chat - Build Trust</p>
      </div>
    </section>
  )


export default Testimonial