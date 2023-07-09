import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"black"}}>
        <li>
          <NavLink to="/" style={{color:"white"}}>Login</NavLink>
        </li>
        <li>
            <NavLink to="/register" style={{color:"white"}}>Register</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
