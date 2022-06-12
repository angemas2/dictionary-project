import React from "react";
import "./Footer.css"

export default function Footer(){
    return (
      <div className="Footer">
        Coded by Angélique.M{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/angemas2/dictionary-project"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    );
}