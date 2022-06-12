import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic"

export default function Results(props) {
  if (props.results) {

    return (
      <div className="Results">
        <h3>{props.results.word}</h3>

        {props.results.phonetics.map(function(phonetic,index){
          return(
            <span key={index}>
              <Phonetic phonetic={phonetic}/>
            </span>
          )
        })}
       

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
