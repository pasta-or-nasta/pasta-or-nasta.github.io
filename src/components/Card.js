import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <div onClick={props.onClick} className="card-container">
            {props.children}
        </div>
    );
};


export default Card;
