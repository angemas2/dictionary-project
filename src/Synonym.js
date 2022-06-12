import React from "react";
import "./Synonyms.css"

export default function Synonym(props) {
  if (props.synonyms.length) {
  
    return (
    <div className="synonymes">
      
        {props.synonyms.map(function(synonym,index){
            return(
                <span key={index} className="list me-2">{synonym} </span>
            )
        })} </div>)
    
  } else {
    return null;
  }
}
