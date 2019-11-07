import React, { useState, useEffect } from "react";
import Axios from "axios";
import NasaCard from "./NasaCard";



export default function NasaData() {

    const [pictures, setPicture] = useState([]);



    useEffect(() => {

        Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=81uPCTsZx5S8RPdsRyp15jmrdXXtdfz8fjfC3lfU") // 81uPCTsZx5S8RPdsRyp15jmrdXXtdfz8fjfC3lfU
        .then(response => {
            setPicture(response.data);
        
        })
        .catch ( error => {
            console.log(`Sorry there seems to be an error! ${error}`);
        })
    }, [] )

    return (


        <div className="cardData">


        <NasaCard 
        
        key={pictures.date}
        title={pictures.title}
        explanation={pictures.explanation}
        image={pictures.hdurl}
        date={pictures.date}
        />
        </div>
    );
    }