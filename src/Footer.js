import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      Hosted with{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
      <br />
      Open-source{" "}
      <a
        href="https://github.com/Stajgar/First-Weather-App"
        target="_blank"
        rel="noopener noreferrer"
      >
        code
      </a>
      , by{" "}
      <a
        href="https://www.linkedin.com/in/agnieszkaskupinska/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agnieszka Skupińska <i className="fab fa-linkedin"></i>
      </a>
      <br />
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  );
}
