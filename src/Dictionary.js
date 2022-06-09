import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {

    let [keyword,setKeyword]=useState("");

    function handleSubmit(event){
        event.preventDefault();
    alert(`Search for ${keyword}`)
    }

    function Handlekeyword(event){
        event.preventDefault();
        setKeyword(event.target.value)
    }

  return (
    <div className="Dictionary mt-5">
        <h1>Dictionary</h1>
      <form className="Search-form mt-5 d-flex justify-content-center" onSubmit={handleSubmit}>
        <input type="text" autoFocus="on" placeholder="search" className="Search-bar" onChange={Handlekeyword} />
      </form>
    </div>
  );
}
