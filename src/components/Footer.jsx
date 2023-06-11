import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import { Link } from "react-router-dom"

const Footer = () => (
    <section className={` ${styles.flexCenter} ${styles.padding} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start "> 
         {/* mr-[330px] */}
          <img  src={logo} alt="logo" className="w-[244px] h-[70px] object-obtain " />
          <p className={`${styles.paragraph} mt-4 max-w-[380px] `}>A new way to build customer relationships easy, secure and reliable.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium leading-[27px] text-white text-[18px] ">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link , index) => (
                  <li key={link.id} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                  ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0 '} `}>
                   <Link to={link.link}>{link.name}</Link>
     
                    
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3fe45]  " >
        <p className="font-poppins font-normal text-center leading-[27px] text-white text-[18px] ">2023 RecAuto. All Rights Reserved.</p>
        <div className="flex justify-center flex-row md:mt-0 mt-6">
          {socialMedia.map((social , index) =>(
            <img key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0 '}`} />
          ))}
        </div>
      </div>
    </section>
  )

export default Footer