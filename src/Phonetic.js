import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="audio">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <span className="ms-3">{props.phonetic.text}</span>
      </div>
    );
  }
}
