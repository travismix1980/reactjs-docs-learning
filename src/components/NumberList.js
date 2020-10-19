import React from "react";

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map(number =>(
        <li key={number.toString()} style={liStyle}>
            {number}
        </li>
    ));

    return(
        <ul style={listStyle}>{listItems}</ul>
    );
}

const listStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
}

const liStyle = {
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "1.5",
    color: "#333",
}
export default NumberList;