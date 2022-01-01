import React from "react";
import "./Card.css"

const Card = ({image, name, email, phone}) => {
    return (
        <div className = "bg-washed-blue tc b--solid bw2 dib br3 pa3 ma2 grow shadow-3">
            <img src={image} alt= {`${name} profile`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    );
}

export default Card;