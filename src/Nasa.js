import React, { useState, useEffect } from 'react';
import axios from "axios";
import NasaCard from "./NasaCard.js";

function Nasa() {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=7pkGQ2TpQLg4kYbGovdSN3B5bFEgRkqcjo8hLOUE")
            .then(response => {
                setArticle(response.data);
            });
    }, []);
    useEffect(() => {

    }, [article])

    console.log(article.date);
    return <NasaCard
        date={article.date}
        title={article.title}
        explaination={article.explanation}
        url={article.url}
    />
}

export default Nasa;
