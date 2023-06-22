import React, { useState } from "react";
import axios from "axios";
import styles from "../style";

const Formback = () => {
    {
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
}
}

export default Formback