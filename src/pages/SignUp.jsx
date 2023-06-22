import styles, { forms } from "../style";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { SignupForm as Button } from "../components";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  // Set States after clicking signup
  const [isLoginClicked, setLoginClicked] = useState(false);
  const handleLoginClick = () => {
    setLoginClicked(true);
  };

  return (
    <div className={`bg-primary ${styles.flexStart} sm:h-screen `}>
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingY}  `}
      >
        <div
          className={`  bg-[#000514] border-solid border-cyan-700 border-[5px] p-10 sm:px-24 px-5 sm-mx-0 mx-3 items-center ${
            isLoginClicked ? "sm:mt-[140px] mt-[50px]" : "sm:mt-[78px] mt-0"
          }`}
        >
          <div className={`${styles.flexCenter} mb-7 `}>
            {" "}
            <Link to="/">
              <img src={logo} className="h-[70px] w-[277px]"></img>
            </Link>
          </div>

          <h1
            className={` ${styles.flexCenter} font-poppins text-[28px] text-gradient font-bold `}
          >
            {isLoginClicked ? "Login" : "Create Account"}
          </h1>
          <form action="#" method="POST" class="mx-auto mt-6 max-w-xl sm:mt-8">
            <Button
              buttonText={isLoginClicked ? "LOGIN" : "SIGN UP"}
              showUsernameInput={!isLoginClicked}
            />

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
