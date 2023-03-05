import React  from "react";
import "./Form.module.css";
import { useState } from "react";
import validation from "./validation.js"

const Form = (props) =>{


    const [userData, setUserData] = useState({
        username: "",
        password: "", 
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "", 
    });

    const handleInputChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
		event.preventDefault();
		props.login(userData);
	};


    return(
        <>
            <form onSubmit={handleSubmit}>
            
                <label htmlFor="email" style={{color: "red"}}>Email: </label>
                <input type="text" name="email" value={userData.username} onChange={handleInputChange}></input>
                {errors.username && <p style={{color: "red"}}>{errors.username}</p>}
            
                <label htmlFor="password" style={{color: "red"}}>Password: </label>
                <input type="text" name="password" value={userData.password} onChange={handleInputChange}></input>
                {errors.password && <p className="danger">{errors.password}</p>}
            
                <button className="button-login">LOGIN</button>
            </form>
        </>
    );
}   

export default Form;