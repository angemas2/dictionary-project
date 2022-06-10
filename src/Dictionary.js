import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function getDefinition(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(getDefinition);
  }

  function Handlekeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary mt-5">
      <h1>Dictionary</h1>
      <div>
        <form
          className="Search-form mt-5 d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            autoFocus="on"
            placeholder="Search"
            className="Search-bar"
            onChange={Handlekeyword}
          />
        </form>
      </div>
    </div>
  );
}
