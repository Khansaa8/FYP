import React from "react";
import MainLayout from "../Layout/MainLayout";
import styles, { layout } from "../style";
import { ExpVal } from "../constants";
import HexagonIcon from '@mui/icons-material/Hexagon';
import { Link } from "react-router-dom";


const Explore = () => {
  const TermsS = ({ title, content, index }) => (
    <div
      className={`flex flex-row p-5 rounded-[20px] `}
    >
      <div
      >
        <HexagonIcon fontSize="medium" sx={{color: "#00F6FF" }} />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-2 ">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
           {index === ExpVal.length - 1 && (
            <span className="font-semibold text-white underline underline-offset-2 hover:underline-offset-2" >
              <Link to="/SignUp" > Get Started</Link>.
            </span>)
           }
        </p>
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`${layout.section}`}>
            <div className={`sm:px-36 px-6 flex-1 flex-col `}>
              <h1 className={styles.heading2}>Welcome to <span className="text-gradient">Rec-Auto</span></h1>
              <p className={`${styles.paragraph} sm:w-[950px] my-5`}>
              Welcome to our audio-based chat box solution! Our innovative product revolutionizes customer support and enhances user experience on websites. With our chat box, website visitors can effortlessly record and send audio messages, enabling real-time communication with the website owner or customer support team.
              </p>
              <div className={`flex-1 flex flex-col justify-strat sm:w-[950px] relative`}>
              {ExpVal.map((values, index) => (
                <TermsS key={values.id} {...values} index={index} />
              ))}
            </div>
            </div>

          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Explore;
