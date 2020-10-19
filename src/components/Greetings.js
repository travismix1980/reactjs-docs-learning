import React from "react";

const Greetings = (props) => {
    if(props.isLoggedIn){
        return <h1>Welcome Back!</h1>;
    }else {
        return <h1>Please Sign up</h1>
    }
}

export default Greetings;