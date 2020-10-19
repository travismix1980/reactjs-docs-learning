import React from "react";

function WarningBanner(props){
    if(!props.warn){
        return null;
    }
    return(
        <div style={warning}>
            <h1>Warning</h1>
        </div>
    );
}

const warning = {
    backgroundColor: "#ff0000",
    color: "white",
};

export default WarningBanner;