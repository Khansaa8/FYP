// import React from "react";

// const Button = ({ styles }) => (
//   <button type="button" className={`py-3 px-5 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
//     Submit
//   </button>
// );

// export default Button;
import React, { useState } from "react";
import axios from "axios";
import styles, { forms } from "../style";

const ContactForm = ({ buttonText }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleContactSubmit = async () => {
    try {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        company: company,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      };

      const response = await axios.post(
        "http://localhost:2004/api/contact/create",
        formData
      );

      const savedContact = response.data;
      // Process the saved contact data as needed

      // Reset form fields
      setFirstName("");
      setLastName("");
      setCompany("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setError("");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div className="">
        <label htmlFor="first-name" className={forms.label}>
          First Name
        </label>
        <div className="mt-2.5">
          <input
            className={`${forms.input1} text-gray-900`}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
      </div>

      <div className="">
        <label htmlFor="first-name" className={forms.label}>
          Last Name
        </label>
        <div className="mt-2.5">
          <input
            className={`${forms.input1} text-gray-900`}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="first-name" className={forms.label}>
          Company Name
        </label>
        <div className="mt-2.5">
          <input
            className={`${forms.input1} text-gray-900`}
            type="text"
            placeholder="Company"
            value={company}
            onChange={handleCompanyChange}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="first-name" className={forms.label}>
          Email
        </label>
        <div className="mt-2.5">
          <input
            className={`${forms.input1} text-gray-900`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="first-name" className={forms.label}>
          Phone Number
        </label>
        <div className="mt-2.5">
          <input
            className={`${forms.input1} text-gray-900`}
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="first-name" className={forms.label}>
          Message
        </label>
        <div className="mt-2.5">
          <textarea
            className={`${forms.input1} text-gray-900`}
            type="text"
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            rows={4}
          />
          {error && <p>{error}</p>}
        </div>
      </div>
      <div className="my-5">
        <button
          type="button"
          className={`py-3 px-5 w-[100%] my-[10px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline-none ${styles}`}
          onClick={handleContactSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
