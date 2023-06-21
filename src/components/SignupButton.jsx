// /* eslint-disable react/prop-types */
// import styles from "../style";

// const SignupButton = ({ buttonText }) => {
//   return (
//     <button
//       type="button"
//       className={`py-3 px-5 w-[100%] my-[10px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline-none ${styles}`}
//     >
//       {buttonText}
//     </button>
//   );
// };

// export default SignupButton;

/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import styles from "../style";

const SignupButton = ({ buttonText }) => {
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
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button
        type="button"
        className={`py-3 px-5 w-[100%] my-[10px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline-none ${styles}`}
        onClick={handleSignup}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SignupButton;
