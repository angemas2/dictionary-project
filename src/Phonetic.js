import React from "react";

export default function Phonetic(props) {
  return (
    <div className="audio">
      <a href={props.phonetic.audio}> listen </a>
      <span className="ms-2">{props.phonetic.text}</span>
    </div>
  );
}
