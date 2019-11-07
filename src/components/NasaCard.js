import React from "react";
import { NasaCardStyle, Button } from "./styles/styles.js";
import formatDate from "./date";


const NasaCard = props => {
     console.log(props);
    return (
        <NasaCardStyle>
        <h1>{props.title}</h1>
        <img alt=" " src={props.image} />
        <p>{props.explanation}</p>
        <div className="buttonContainer">
        <Button primary >Previous</Button>
        <Button>Next</Button>
        </div>
        <span>{formatDate(props.date)}</span>
        </NasaCardStyle>
      
    )

}

export default NasaCard;