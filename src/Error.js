import React from "react";
import "./Error.css";

export default function Error(props){
    if(props.status===404){
        return (
          <div className="Errormessage">
            <i className="fa-solid fa-face-frown-open"></i> Sorry we could not find this
            word, please enter a new one
          </div>
        );
    } else {
        return null;
    }
}