import React , { useState } from "react";
import './Styles.css';


function App (props){
    const [fullName, setfullName] = useState({
        fname : "",
        lname :""
    });
    function handleChange (event) {
        const newValue = event.target.value;
        const inputName = event.target.name;
        setfullName(prevValue => {
            if (inputName === "fname") {
                return {
                    fname: newValue,
                    lname: prevValue.lname
                }
            } else if (inputName === "lname") {
                return {
                    fname: prevValue.fname,
                    lname: newValue
                } 
            }
        });
    }
    
    return (
        <div className="container">
           <form className="form">
                <h1>Hello {fullName.fname} {fullName.lname} </h1>
                <input
                    name="fname"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={fullName.fname}
                />
                <input
                    name="lname"
                    type="text"
                    placeholder="Last Name"
                    // value={fullName.lname}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit" className="btn">
                    {props.isRegitered ? "Login" : "Register"}
                </button>
            </form>
        </div>
    )
}

export default App;