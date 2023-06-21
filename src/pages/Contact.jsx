import MainLayout from "../Layout/MainLayout";
import styles, { layout } from "../style";
import { contacts } from "../constants";
import HexagonIcon from "@mui/icons-material/Hexagon";
import Form from "./form";

const ContatCard = ({ title, content, index }) => (
  <div
    className={`flex p-6 ${
      index !== contacts.length - 1 ? "mb-1" : "mb-0"
    } feature-card `}
  >
    <div>
      <HexagonIcon fontSize="medium" sx={{ color: "#00F6FF" }} />
    </div>
    <div className="ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[24px] mb-1 ">
        {content}
      </p>
    </div>
  </div>
);

const contact = () => {
  return (
    <MainLayout>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`${layout.section} ${styles.paddingX} `}>
            <div className={`${layout.sectionInfo} `}>
              <div className="flex felx-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[25px] text-white leading-[43px]">
                  Hi! What can we do for you?
                </h1>
              </div>
              <div className="">
                {contacts.map((contact, index) => (
                  <ContatCard key={contact.id} {...contact} index={index} />
                ))}
              </div>
            </div>
            <div
              className={`${layout.sectionImg}  ${styles.flexCenter} bg-[#000514] border-solid border-cyan-700 border-[5px] rounded-[13px] `}
            >
              {/* xl:mx-10 py-10 md:my-0 my-12 relative */}
              <Form />
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default contact;
