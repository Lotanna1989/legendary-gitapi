import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotfoundPage.css"; // Import the CSS file

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <p>Oops! The page you're looking for cannot be found.</p>
        <button className="home-button" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
