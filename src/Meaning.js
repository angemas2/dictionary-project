import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="def">
              {definition.definition}
              <div className="example">{definition.example}</div>
              <Synonym synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
