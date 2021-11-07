import React from "react";
import NotFound from "assets/img/icons/404.png";
import { Link } from "react-router-dom";

function notFoundPage() {
  return (
    <div className="not-found-container">
      <img src={NotFound} alt="Not Found 404" />
      <h2>Page not found</h2>
      <p>Sorry, we couldn't find the page you are looking for</p>
      <p>
        click <Link to="/">here</Link> to back home
      </p>
    </div>
  );
}

export default notFoundPage;
