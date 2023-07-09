import React, { useState } from "react";
import axios from "axios";

type name=string
type email=string
type password=string

function Register() {
  const [name, setName] = useState<name>("");
  const [email, setEmail] = useState<email>("");
  const [password, setPassword] = useState<password>("");

  const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    // console.log("data", name, email, password);

    axios.post("http://localhost:1337/api/register",{
      name:name,
      email:email,
      password:password
    })
    .then((res)=>console.log("res",res))
    .catch((error)=>console.log(error))
   

  //  const response = await axios.post("http://localhost:1337/api/register",{
  //     method:'post',
  //     headers:{
  //       'Content-Type':"application/json"
  //     },
  //     body:JSON.stringify({
  //       name,
  //       email,
  //       password
  //     }),
  //   })
  //   console.log("response",response);
    
  };

  return (
    <div>
      <h1>Register Form</h1>
      <div className="">
        {/* <form onSubmit={handleSubmit}> */}
          <input
            type="name"
            value={name}
            placeholder="enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
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
          <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Register;
