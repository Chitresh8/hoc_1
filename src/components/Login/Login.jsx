import styled from "styled-components";

const Heading2 = styled.h2`
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Soft shadow effect */
font-size: 24px; /* Adjust size */
font-weight: bold; /* Bold text */
color: #333; /* Text color */
margin: 20px 0; /* Spacing around */
border-bottom: 2px solid #ccc;
padding-bottom: 10px;
font-family: "Arial", sans-serif; /* Change font */
font-style: italic; /* Italic text */
background-color: #f0f0f0; /* Light gray background */
padding: 10px; /* Space around text */
border-radius: 5px; /* Rounded corners */
`;

const Button = styled.button`
background-color: #007bff;
color: white;
font-size: 16px;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s;

&:hover {
  background-color: #0056b3;
}

&:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}
`;
const Div = styled.div`
width: 100px;
height: 100px;
padding: 3px;
margin: auto;
`;

const Login = () => {

  const handleLogin = () => {
    localStorage.setItem('authenticated', 'true');
    window.location.reload(); // Reload to see the protected content
  };

  return (
    <Div>
      <Heading2>Login</Heading2>
      <Button onClick={handleLogin}>Click</Button>
    
    </Div>
  );
};

export default Login;



// 
// import React, { useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// export const Login = () => {
//   const [emailInput, setEmailInput] = useState("");
//   const [pwdInput, setPwdInput] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Object mapping emails and passwords for login validation
//   const loginData = {
//     "chitresh@gmail.com": "abcd1234",
//     "chitres@gmail.com": "abdc1234",
//   };

//   // Email change handler
//   const emailChangeHandler = useCallback((event) => {
//     setEmailInput(event.target.value);
//   }, []);

//   // Password change handler
//   const passwordChangeHandler = useCallback((event) => {
//     setPwdInput(event.target.value);
//   }, []);

//   // Login handler
//   const loginHandler = useCallback(() => {
//     if (emailInput in loginData) {
//       if (loginData[emailInput] === pwdInput) {
//         setError("Login Successful");
//         navigate("./cart"); // Navigate to cart on successful login
//       } else {
//         setError("Invalid Password. Please try again");
//       }
//     } else {
//       setError("Invalid Email Id. Please try again");
//     }
//   }, [emailInput, pwdInput, navigate, loginData]);

//   return (
//     <div className="loginForm">
//       <h1>Login Form</h1>
//       <label>Email Id</label>
//       <input
//         type="text"
//         name="email"
//         value={emailInput}
//         onChange={emailChangeHandler}
//       />
//       <label>Password</label>
//       <input
//         type="password"
//         name="password"
//         value={pwdInput}
//         onChange={passwordChangeHandler}
//       />
//       <button onClick={loginHandler}>Login</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

