import React from "react";
import styles , { forms } from "../style";
import { fValues } from "../constants";
import { FormButton } from "../components";

const form = () => {
  return (
    <div className=" text-white">
      <div className="text-center">
        <h2 className={`${styles.heading2} mt-5 text-gradient`}>
          Contact Us
        </h2>
      </div>
      <form  action="#" method="POST" class="mx-auto mt-6 max-w-xl sm:mt-10">
       
        <FormButton />

        {/* {fValues.map((values, index) => (
          <div key={values.id} className={`${index === 0 || index === 1 ? "" : "sm:col-span-2" }`}>
            <label
              
              htmlFor="first-name"
              className={forms.label}
            >
              {values.label}
            </label>
            <div className="mt-2.5">
              <input
                type={values.type}
                name={values.id}
                id={values.id}
                className={`${forms.input1} text-gray-900`}
              />
            </div>
          </div>
          ))} */}
{/* 
        <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className={forms.label}
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className={`${forms.input1} text-gray-900`}
                defaultValue={""}
              />
            </div>
          </div> */}

        {/* <div className="my-10">
        </div> */}
      </form>
    </div>
  );
};

export default form;