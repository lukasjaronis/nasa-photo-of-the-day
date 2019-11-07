import React from "react";
import { NasaCardStyle, Button } from "./styles/styles.js";
import formateDate from "./date";


const NasaCard = props => {
     
    return (
        <NasaCardStyle>
        <h1>{props.title}</h1>
        <img alt=" " src={props.image} />
        <p>{props.explanation}</p>
        <div className="buttonContainer">
        <Button primary >Previous</Button>
        <Button>Next</Button>
        </div>
        <span>{formateDate(props.date)}</span>
        </NasaCardStyle>
      
    )

}

export default NasaCard;