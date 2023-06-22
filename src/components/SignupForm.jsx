// // /* eslint-disable react/prop-types */
// // import styles from "../style";

// // const SignupButton = ({ buttonText }) => {
// //   return (
// //     <button
// //       type="button"
// //       className={`py-3 px-5 w-[100%] my-[10px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline-none ${styles}`}
// //     >
// //       {buttonText}
// //     </button>
// //   );
// // };

// // export default SignupButton;

/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import styles,{forms} from "../style";
import { Link } from "react-router-dom";

const SignupForm = ({ buttonText, showUsernameInput }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:2004/api/signup", {
        username,
        email,
        password,
      });
      const { token, user } = response.data;
      // Store the token and user details in the browser's local storage or state management system

      // Reset form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {showUsernameInput && (
    <div className="sm:col-span-2">

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`${forms.input1} text-gray-900 rounded-none `}
      /></div>
      )}
    <div className="sm:col-span-2">

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${forms.input1} text-gray-900 rounded-none `}
      /></div>
    <div className="sm:col-span-2">

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`${forms.input1} text-gray-900 rounded-none `}
      />
      {error && <p>{error}</p>}
      <div className="my-8">
      <Link to="/login">
      <button
        type="button"
        className={`py-3 px-5 w-[100%] my-[10px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline-none ${styles}`}
        onClick={handleSignup}
      >
        {buttonText}
      </button>
      </Link>

      </div>
  </div>
    </div>
  );
};

export default SignupForm;
// import React, { useState } from "react";
// import axios from "axios";
// import styles from "../style";

// const SignupForm = ({ buttonText }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [company, setCompany] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");


//   const handleContactSubmit = async () => {
//     try {
//       const formData = {
//         firstName: firstName,
//         lastName: lastName,
//         company: company,
//         email: email,
//         phoneNumber: phoneNumber,
//         message: message,
//       };
  
//       const response = await axios.post(
//         "http://localhost:2004/api/contact/create",
//         formData
//       );
  
//       const savedContact = response.data;
//       // Process the saved contact data as needed
  
//       // Reset form fields
//       setFirstName("");
//       setLastName("");
//       setCompany("");
//       setEmail("");
//       setPhoneNumber("");
//       setMessage("");
//       setError("");
//     } catch (error) {
//       setError(error.response.data.error);
//     }
//   };
  



//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleCompanyChange = (e) => {
//     setCompany(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <input
//         type="text"
//         placeholder="Company"
//         value={company}
//         onChange={handleCompanyChange}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={handleEmailChange}
//       />
//       <input
//         type="text"
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChange={handlePhoneNumberChange}
//       />
//       <input
//         type="text"
//         placeholder="Message"
//         value={message}
//         onChange={handleMessageChange}
//       />
//       {error && <p>{error}</p>}
//       <button
//         type="button"
//         className={`py-3 px-5 w-[100%] my-[10px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline-none ${styles}`}
//         onClick={handleContactSubmit}
//       >
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// export default SignupForm;
