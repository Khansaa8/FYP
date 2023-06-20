import styles from '../style'

const SignupButton = ({buttonText}) => {
    return(
    <button type="button" className={`py-3 px-5 w-[100%] my-[10px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline-none ${styles}`}>
    {buttonText}
  </button>
)}

export default SignupButton