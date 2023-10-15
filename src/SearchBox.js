import React from "react";
import './App.css'
function SearchBox({ location, setLocation}){

    function onSearch(event){
        if(event.key === "Enter")
        {
            setLocation(event.target.value);
        }

      }
    return (
     
        <div className="container">
           <input className="searchBox" type="text"
           placeholder=" search country..."
           onKeyDown={onSearch}>
            
           </input>
        </div>
    )
}
export default SearchBox;