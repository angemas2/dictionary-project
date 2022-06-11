import React from "react";

export default function Synonym(props) {
  if (props.synonyms.length) {
    console.log(props.synonyms);
    return (
    <div className="synonymes">
        <strong>Synonyms : </strong>
        {props.synonyms.map(function(synonym,index){
            return(
                <span key={index} className="me-2">{synonym} |</span>
            )
        })} </div>)
    
  } else {
    return null;
  }
}
