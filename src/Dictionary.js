import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos,setPhotos]=useState(null);
 


  function getDefinition(response) {
    setResults(response.data[0]);

  }

  function getPhotos(response){
setPhotos(response.data.photos)
  }


  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(getDefinition);

    let pexelApiKey="563492ad6f91700001000001e5a4f15376204d9fb826c066e13fd40a";
    let header = { Authorization: `Bearer ${pexelApiKey}` };
    let pexelURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelURL, { headers: header }).then(getPhotos);
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
      <div className="Dictionary">
        <h1 className="animate-charcter">Dictionary</h1>
        <section>
          <h2>What word do you want to look up?</h2>
          <form
            className="Search-form d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="Search-bar text-capitalize"
              onChange={Handlekeyword}
              defaultValue={keyword}
            />
          </form>{" "}
          <p>i.e. wine, yoga, coding</p>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  }  else  {
    load();
    return "loading...";
  }
}
