import { Await, Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
function Inscri() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg,setMsg]= useState("");
  const handleInputChange = (e, type) => {
    switch (type) {
      case "firstname":
        setError("");
        setFirstName(e.target.value);
        if (e.target.value === "") {
          setError("Firsname ?");
        }
        break;
      case "lastname":
        setError("");
        setLastName(e.target.value);
        if (e.target.value === "") {
          setError("Lastname ?");
        }
        break;
      case "username":
        setError("");
        setUsername(e.target.value);
        if (e.target.value === "") {
          setError("Username ?");
        }
        break;
      case "mail":
        setError("");
        setMail(e.target.value);
        if (e.target.value === "") {
          setError("mail ?");
        }
        break;
      case "password":
        setError("");
        setPassword(e.target.value);
        if(e.target.value === ""){
          setError("password ?");
        }
        break;
    }
  };
  const handleSubmit= ()=>{    
     try {
       axios.post("http://localhost:3001/back/Register.php", {
        firstname,
        lastname,
        username,
        mail,
        password,
      });
      setMsg("successfully");
    } catch (error) {
      setError("Error");
      {
        alert("Failed");
      }
    }
  }
  return (
    <div className="inscri">
      <h1 className="titre">SIGN UP</h1>
      <form  onSubmit={handleSubmit}>
        <p>
          {
            error !==""?
            <span className="error">{error}</span>:
            <span className="success">{msg}</span>
          }
        </p>
        <label htmlFor="#"> FIRST NAME </label>
        <input
          type="text"
          value={firstname}
          onChange={(event) => handleInputChange(event, "firstname")}
        />
        <label htmlFor="#">Last Name</label>
        <input
          type="text"
          value={lastname}
          onChange={(event) => handleInputChange(event, "lastname")}
        />
        <label htmlFor="#">Username</label>
        <input
          type="text"
          value={username}
          onChange={(event) => handleInputChange(event, "username")}
        />
        <label htmlFor="#">Mail</label>
        <input
          type="mail"
          placeholder="Fname.Lname@gmail.com"
          value={mail}
          onChange={(event) => handleInputChange(event, "mail")}
        />
        <label htmlFor="#">Password</label>
        <input
          type="password"
          id="pass"
          value={password}
          onChange={(event) => handleInputChange(event, "password")}
        />
        <button type="submit" className="btn-12">
          <span>Sign Up</span>
        </button>
        <span> <Link to="/Login">Return Login page</Link>
        </span>
        <span>
          <Link to="/index">Return Home page</Link>
        </span>
      </form>
    </div>
  );
}
export default Inscri;
