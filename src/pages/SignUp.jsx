import styles, { forms } from "../style";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { signupValues } from "../constants";
import { SignupButton as Button } from "../components";
import { useState, useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  
  // Set States after clicking signup
  const [isLoginClicked, setLoginClicked] = useState(false);

  const handleLoginClick = () => {
    setLoginClicked(true);
  };

  // Filtered the input field for login page
  const filteredValues = isLoginClicked
    ? signupValues.filter((value, index) => index !== 1)
    : signupValues;
  

  return (
    <div className={`bg-primary ${styles.flexStart} h-screen `}>
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingY}  `}
      >
        <div
          className={`  bg-[#000514] border-solid border-cyan-700 border-[5px] p-10 px-24 items-center ${isLoginClicked ? "mt-[160px]" : "mt-[100px]"}`}
        >
          <div   className={`${styles.flexCenter} mb-7 `}>
            {" "}
            <Link to="/">
              <img
                src={logo}
                className="h-[70px] w-[277px]"
              ></img>
            </Link>
          </div>

          <h1
            className={` ${styles.flexCenter} font-poppins text-[28px] text-gradient font-bold `}
          >
            {isLoginClicked ? "Login" : "Create Account"}
          </h1>
          <form action="#" method="POST" class="mx-auto mt-6 max-w-xl sm:mt-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {filteredValues.map((values, index) => (
                <div key={values.id} className="sm:col-span-2">
                  <div className="mt-2.5">
                    <input
                      type={values.type}
                      name={values.id}
                      id={values.id}
                      className={`${forms.input1} text-gray-900 rounded-none `}
                      placeholder={values.label}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="my-8">
              <Button buttonText = { isLoginClicked ? "LOGIN" : "SIGN UP"} />
            </div>

            <div className={`${styles.paragraph} ${styles.flexCenter}`}>
              {isLoginClicked ? (
                <span>
                  Don't have an account?{" "}
                  <Link onClick={() => setLoginClicked(false)}>
                    <span className="text-gradient">Create Account</span>
                  </Link>
                </span>
              ) : (
                <span>
                  Already have an account?{" "}
                  <Link onClick={handleLoginClick}>
                    <span className="text-gradient">Login</span>
                  </Link>
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
