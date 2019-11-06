import React from "react";

const NasaCard = props => {

console.log(props);

    return (
        <div className="nasa-card">
        <h1>{props.title}</h1>
        <img className="nasa-image" alt=" " src={props.image} />
        <p>{props.explanation}</p>
        <span>{props.date}</span>
        </div>
    )
}

export default NasaCard;