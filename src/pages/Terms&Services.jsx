import React from "react";
import MainLayout from "../Layout/MainLayout";
import styles, { layout } from "../style";
import { termsServices } from "../constants";
import HexagonIcon from '@mui/icons-material/Hexagon';
import { Link } from "react-router-dom";


const TermsServices = () => {
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
           {index === termsServices.length - 1 && (
            <span className="font-semibold text-white underline underline-offset-2 hover:underline-offset-2" >
              <Link to="/contact" >Contact us</Link>.
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
            <div className='flex-1 flex-col '>
              <h1 className={styles.heading2}>Terms of Services</h1>
              <p className={`${styles.paragraph} my-5`}>
                Welcome to <b>RecAuto</b>. By using our website, you agree to be
                bound by these Terms of Service. If you do not agree to these
                Terms of Service, you may not use our website.
              </p>
              <div className={`flex-1 flex flex-col relative`}>
              {termsServices.map((terms, index) => (
                <TermsS key={terms.id} {...terms} index={index} />
              ))}
            </div>
            </div>

          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsServices;
