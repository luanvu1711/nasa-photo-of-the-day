import React, { Component } from 'react';
import ReactPlayer from 'react-player';
const NasaCard = props => {
    return (
        <div className="nasa-card">
            <h2>{props.date}</h2>
            <h1>{props.title}</h1>
            <p>{props.explaination}</p>
            <span><ReactPlayer url={props.url} /></span>
        </div>
    )
}
export default NasaCard;