// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { logo } from "../assets";
 

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const response = await fetch("http://localhost:2004/api/signin", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         if (data.user) {
//           if (data.user.role === 0) {
//             localStorage.setItem(
//               "user",
//               JSON.stringify({
//                 id: data.user._id,
//                 email: data.user.email,
//                 role: data.user.role,
//                 token: data.token,
//               })
//             );
//             let role = data.user.role;
//             if (role === 0) {
//               navigate("/home");
//             }
//             window.location.reload();
//           } else if (data.user.role === 1) {
//             localStorage.setItem(
//               "user",
//               JSON.stringify({
//                 id: data.user._id,
//                 email: data.user.email,
//                 role: data.user.role,
//                 token: data.token,
//               })
//             );
//             let role = data.user.role;
//             if (role === 1) {
//               navigate("/adminDashboard");
//             }
//             window.location.reload();
//           }
//         }
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#E6E5E3",
//       }}
//     >
//       <div
//         style={{
//           height: "80%",
//           width: "80%",
//           backgroundColor: "white",
//           display: "flex",
//           flexDirection: "row",
//         }}
//       >
//         <div
//           style={{
//             flex: "0 0 25%",
//             backgroundColor: "white",
//             marginRight: "10px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             maxHeight: "100%",
//           }}
//         >
//           <img
//             src={logo}
//             alt="image1"
//             style={{
//               maxWidth: "100%",
//               maxHeight: "48%",
//               marginBottom: "0",
//               backgroundColor: "#E6E5E3",
//               marginTop: "20px",
//             }}
//           />
//           <img
//             src={logo}
//             alt="image2"
//             style={{ maxWidth: "100%", maxHeight: "48%", marginBottom: "20px" }}
//           />
//         </div>
//         <div
//           style={{
//             flex: "1 1 75%",
//             backgroundColor: "white",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <h1 style={{ letterSpacing: "5px", fontSize: "38px" }}>Login</h1>
//           <br />
//           <form
//             onSubmit={handleSubmit}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               width: "60%",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 width: "100%",
//                 marginBottom: "20px",
//               }}
//             >
//               <label
//                 htmlFor="email"
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "25px",
//                   marginRight: "10px",
//                 }}
//               >
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 style={{ fontSize: "25px" }}
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 width: "100%",
//                 marginBottom: "20px",
//               }}
//             >
//               <label
//                 htmlFor="password"
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "25px",
//                   marginRight: "10px",
//                 }}
//               >
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 style={{ fontSize: "25px" }}
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//               />
//             </div>
//             <button
//               type="submit"
//               style={{
//                 fontSize: "25px",
//                 marginTop: "20px",
//                 borderRadius: "10px",
//                 backgroundColor: "#89651D",
//                 color: "white",
//                 width: "150px",
//                 height: "40px",
//               }}
//             >
//               Login
//             </button>
//             <div style={{ textAlign: "center" }}>
//               <p>
//                 Don't have an account?{" "}
//                 <Link to="/SignUp" style={{ color: "black" }}>
//                   Sign Up
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import MainLayout from "./MainLayout"
import styles ,{layout} from "../style"

const LoginButton = () => {
  return (
    <MainLayout>  
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${layout.section}`}>
          <div className={`sm:px-36 px-6 flex-1 flex-col `}>
          <div>
          <h1 className={`${styles.heading2} ${styles.flexCenter}`}>Welcome to <span className="text-gradient"> &nbsp; Rec-Auto</span></h1>          
          </div>
          <div className={`my-10 font-poppins text-[20px] leading-[30.8px] border-sky-500 rounded-md border-solid border-4 p-5 `}>
            <p className="font-normal text-dimWhite"><span className="font-bold text-[25px] text-gradient"> Link : &nbsp; </span> &lt; iframe src="https://6493c8eb7952ca1bf1bb1a2f--dreamy-fenglisu-a80c14.netlify.app/" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="20px" height="400px" width="600px" allowfullscreen &gt; &lt;/iframe&gt;
            </p>
          </div>
            </div>
            </section>
            </div>
            </div>
            </MainLayout>
  )
}

export default LoginButton