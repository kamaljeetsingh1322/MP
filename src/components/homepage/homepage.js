import React from "react";
import "./homepage.css";

const Homepage = ({ setLoginUser }) => {
  return (
    <div className="homepage">
      <h3>Hello Homepage</h3>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
