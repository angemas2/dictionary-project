import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function getDefinition(response) {
    setResults(response.data[0]);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(getDefinition);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function Handlekeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary" >
        <h1>Dictionary</h1>
        <section>
          <h2>What word do you want to look up?</h2>
          <form
            className="Search-form d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              autoFocus="on"
              className="Search-bar text-capitalize"
              onChange={Handlekeyword}
              defaultValue={keyword}
            />
          </form>{" "}
          <p>i.e. paris, wine, yoga, coding</p>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
