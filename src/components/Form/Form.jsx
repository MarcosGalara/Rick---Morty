import React  from "react";
import "./Form.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Validation } from "./validation";

const Form = (props) =>{

    const location = useLocation();

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
            [event.target.username]: event.target.value,
            [event.target.password]: event.target.value,
        })

        setErrors(Validation({
            ...userData,
            [event.target.username]: event.target.value,
            [event.target.password]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
		event.preventDefault();
		props.login(userData);
	};


    return(
    <>
        {location.pathname !== '/' ? (
        <div className="ashei">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    className = {errors.username}
                    type="text" 
                    name="email" 
                    value={userData.username} 
                    onChange={handleInputChange}>Username: </input>
                    {errors.username && <p className="danger">{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input 
                    className = {errors.password}
                    type="text" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleInputChange}>Password: </input>
                    {errors.password && <p className="danger">{errors.password}</p>}
                </div>
                <button className="button-login">LOGIN</button>
            </form>
        </div>
        ) : ("")}
    </>
    );
}

export default Form;