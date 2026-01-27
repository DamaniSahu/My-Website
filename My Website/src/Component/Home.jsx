import React from "react";
import { Form } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div>
        <h1>
          Welcome to <span className="text-red-500">Restaurant</span>, where
          flavour lives!
        </h1>
        <div>
          <button>Contact us</button>
          <button>Explore</button>
        </div>
      </div>
      <img />
    </div>
  );
};

export default Home;
