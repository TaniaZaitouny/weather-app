import React from "react";
import './App.css'

function Content({location, temp, stat}){
    const temperature = Math.floor(temp);
    return(
        <div className="content">
            <p className="title"> {location} </p>
            <div className="tempStat">
                <div className="temp">{temperature}°C</div>
                <div className="status">{stat}</div>
            </div>

        </div>
    )
}

export default Content;