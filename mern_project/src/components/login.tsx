import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

type email = string;
type password = string;

function Login() {
  const [email, setEmail] = useState<email>("");
  const [password, setPassword] = useState<password>("");

  const navigate = useNavigate();
  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:1337/api/login", {
            email: email,
            password: password,
        });
        console.log("res", response);
          if (response.data.user === false || response.data.status === 'error') {
              toast.error("Please enter a valid email and password");
            } else {
            navigate("/home");
          }
    }
    catch(error){
        console.log(error);
        
    }
    // await axios
    //   .post("http://localhost:1337/api/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((res) => {
    //     console.log("res", res);
    //     if(res.data.user === false || res.data.status ==='error')
    //     {
    //         toast.error("Please enter a valid email and password");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // alert("please valid email and password ");

    //   });

   
  };

  return (
    <div>
      <h1>Login Form</h1>
      <div className="">
        {/* <form onSubmit={handleSubmit}> */}

        <input
          type="email"
          value={email}
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Login;
