import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaCheckCircle, FaTimes } from "react-icons/fa"; 
import "./LoginSignup.css";
import emailjs from "@emailjs/browser";

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const existingUsers = {
    "user1@example.com": "password123",
    "keerthanam0809@gmail.com": "securepass"
};

const LoginSignup = ({ closeModal }) => { 
    const [action, setAction] = useState("Sign Up");
    const [showReset, setShowReset] = useState(false);
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [showNotification, setShowNotification] = useState(false);
    const [formVisible, setFormVisible] = useState(true); 
    const [showError, setShowError] = useState(false); 
    const [showResetNotification, setShowResetNotification] = useState(false);

    const sendEmailNotification = (action, email, firstName = "", lastName = "", password = "", message = "") => {
        let templateId;
    
        if (action === "Reset Password") {
            templateId = "template_iaeais8"; 
        } else {
            templateId = "template_aarj86e";
        }
    
        const emailData = {
            action: action,
            email: email || "No Email Provided",
            message: message || `A user performed ${action} on the website.`,
        };
    
        if (action === "Sign Up") {
            emailData.firstName = firstName || "N/A";
            emailData.lastName = lastName || "N/A";
        }
    
        if (action === "Reset Password") {
            emailData.password = password || "No Password Provided";
        }
    
        emailjs.send("service_4hbkajn", templateId, emailData, "mjNvnJDOahB2Yr9Sc")
            .then(response => {
                console.log("✅ Email sent successfully!", response);
            })
            .catch(error => {
                console.error("❌ Email failed to send", error);
            });
    };       
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;
        
        if (name === "firstName" || name === "lastName") {
            formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
        }

        setFormData({ ...formData, [name]: formattedValue });
        setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        let newErrors = {};

        if (action === "Sign Up") {
            if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
            if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
            if (existingUsers[formData.email]) {
                newErrors.email = "This email already exists";
            }            
        }

        if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
            newErrors.email = "Enter a valid email (example@gmail.com)";
        }

        if (formData.password.length < 4) {
            newErrors.password = "Password must be at least 4 characters";
        }

        if (action === "Login") {
            if (!existingUsers[formData.email]) {
                newErrors.email = "This Email does not exist";
            } else if (existingUsers[formData.email] !== formData.password) {
                newErrors.password = "Incorrect password";
            }
        }        
        
        if (action === "Reset Password") {
            const oldPassword = existingUsers[formData.email];
        
            if (!oldPassword) {
                newErrors.email = "This Email does not exist"; 
            } 
            else if (formData.password === oldPassword) {
                newErrors.password = "Please choose a different password"; 
            } 
            else if (formData.password.length < 4) {
                newErrors.password = "Password must be at least 4 characters"; 
            }
        }                              
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAction = async (newAction) => {
        let isValid = validateForm();
    
        if (isValid) {
            try {
                await new Promise((resolve) => setTimeout(resolve, 2500));
    
                sendEmailNotification(
                    newAction, 
                    formData.email, 
                    formData.firstName,  
                    formData.lastName,  
                    "********",  
                    `A user performed ${newAction} on the website.`
                );                
    
                setShowNotification(true);
                setShowError(false);
                setFormVisible(false);
    
                setTimeout(() => {
                    setShowNotification(false);
                    if (typeof closeModal === "function") {
                        closeModal();
                    }
                }, 2500);
            } catch {
                setShowError(true);
                setShowNotification(false);
                setFormVisible(false);
    
                setTimeout(() => {
                    setShowError(false);
                    if (typeof closeModal === "function") {
                        closeModal();
                    }
                }, 2500);
            }
        } else {
            setAction(newAction);
        }
    };

    const handleResetPassword = async () => {
        let newErrors = {};
    
        if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
            newErrors.email = "Enter a valid email (example@gmail.com)";
        }
        if (formData.password.length < 4) {
            newErrors.password = "Password must be at least 4 characters";
        }
    
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    
        try {
            await new Promise((resolve) => setTimeout(resolve, 2500));
    
            sendEmailNotification(
                "Reset Password",
                formData.email,  
                "",  
                "",  
                formData.password,  
                "The user has successfully reset their password."
            );            
    
            setShowResetNotification(true);
            setShowError(false);
            setFormVisible(false);
    
            setTimeout(() => {
                setShowResetNotification(false);
                if (typeof closeModal === "function") {
                    closeModal();
                }
            }, 2500);
        } catch {
            setShowError(true);
            setShowResetNotification(false);
            setFormVisible(false);
    
            setTimeout(() => {
                setShowError(false);
                if (typeof closeModal === "function") {
                    closeModal();
                }
            }, 2500);
        }
      };

      const handleCloseError = () => {
        setShowError(false); 
      };

    return (
        <>
            {showNotification && (
                <div className="notification">
                    <FaCheckCircle className="success-icon" />
                    <span>{action} Successful!</span>
                    <FaTimes className="close-icon" onClick={() => setShowNotification(false)} />
                </div>
            )}

            {showResetNotification && (
            <div className="notification">
                <FaCheckCircle className="success-icon" />
                <span>Reset Password Successful! <br/> Please Login Again!</span>
                <FaTimes className="close-icon" onClick={() => setShowResetNotification(false)} />
            </div>
            )}

            {showError && (
                <div className="notification error">
                    <div className="error-circle">
                      <FaTimes className="error-icon" />
                    </div>
                    <span>Something went wrong!</span>
                    <FaTimes className="close-icon" onClick={handleCloseError} />
                </div>
            )}

            {formVisible && (
                <div className="form-container">
                    <div className="header">
                        <div className="text">{showReset ? "Reset Password" : action}</div>
                        <div className="underline"></div>
                    </div>

                    <div className="inputs">
                        {showReset ? (
                            <>
                                <div className="input">
                                    <img src={email_icon} alt="Email" />
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Enter your email" 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {errors.email && <p className="error">{errors.email}</p>}
                                <div className="input">
                                    <img src={password_icon} alt="New Password" />
                                    <input 
                                        type="password" 
                                        name="password"
                                        placeholder="Enter new password" 
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {errors.password && <p className="error">{errors.password}</p>}
                            </>
                        ) : (
                            <>
                                {action === "Login" ? null : (
                                <>
                                    <div className="input">
                                        <img src={user_icon} alt="User Icon" /> 
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            placeholder="First Name" 
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    {errors.firstName && <p className="error">{errors.firstName}</p>}

                                    <div className="input">
                                        <img src={user_icon} alt="User Icon" /> 
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            placeholder="Last Name" 
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                                </>
                                )}
                                <div className="input">
                                    <img src={email_icon} alt="Email Icon" /> 
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Email" 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {errors.email && <p className="error">{errors.email}</p>}
                                <div className="input">
                                    <img src={password_icon} alt="Password Icon" /> 
                                    <input 
                                        type="password" 
                                        name="password"
                                        placeholder="Password" 
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {errors.password && <p className="error">{errors.password}</p>}
                            </>
                        )}
                    </div>

                    {action === "Login" && !showReset && (
                        <div className="forgot-password">
                            Lost Password? <span onClick={() => setShowReset(true)} className="forgot-link">Click Here!</span>
                        </div>
                    )}

                    <div className="submit-container">
                        {showReset ? (
                            <>
                                <div className="submit" onClick={() => setShowReset(false)}>Back to Login</div>
                                <div className="submit gray" onClick={handleResetPassword}>Reset</div>
                            </>
                        ) : (
                            <>
                                <div className={`submit ${action === "Sign Up" ? "active" : "gray"}`} onClick={() => handleAction("Sign Up")}>
                                    Sign Up
                                </div>
                                <div className={`submit ${action === "Login" ? "active" : "gray"}`} onClick={() => handleAction("Login")}>
                                    Login
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )};
        </>
    );
};

LoginSignup.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LoginSignup;
