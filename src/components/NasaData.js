import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import Axios from "axios";

export default function NasaData() {

    const [pictures, setPicture] = useState([]);

    useEffect(() => {

        Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=81uPCTsZx5S8RPdsRyp15jmrdXXtdfz8fjfC3lfU")
        .then(response => {
            setPicture(response.data)
        })
        .catch ( error => {
            console.log(`Sorry there seems to be an error! ${error}`);
        })
    }, [] )

    return (

        <div>

        <NasaCard 
        
        key={pictures.index}
        title={pictures.title}
        explanation={pictures.explanation}
        image={pictures.hdurl}
        
        
        />

        </div>
    );
}