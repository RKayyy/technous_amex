import React from "react";
import Navbar from "../components/Navbar";
import digitaldocuments from "../images/digitaldocuments.png";
import sustainablestocks from "../images/sustainablestocks.png";
import ecotokenmarketplace from "../images/ecotokenmarketplace.png";
import sustainablebudgeting from "../images/sustainablebudgeting.png";

function Home() {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="m-8 text-xl">
        <h1>Welcome dear Customer!</h1>
      </div>
      <div className="m-8 text-3xl">
        <h1>Services</h1>
      </div>
      
      <div className="button-container flex justify-center"> {/* Center the buttons */}
        <button className="button w-1/5 h-64 shadow-md m-2 flex flex-col justify-center items-center">
          <div className="text-center text-xl">Digital Services</div>
          <img src={digitaldocuments} alt="" className="mt-2 pt-4" />
        </button>
        <button className="button w-1/5 h-64 shadow-md m-2 flex flex-col justify-center items-center">
          <div className="text-center text-xl">Sustainable Stocks</div>
          <img src={sustainablestocks} alt="" className="mt-2 pt-4" />
        </button>
        <button className="button w-1/5 h-64 shadow-md m-2 flex flex-col justify-center items-center">
          <div className="text-center text-xl">Eco Token Marketplace</div>
          <img src={ecotokenmarketplace} alt="" className="mt-2 pt-4" />
        </button>
        <button className="button w-1/5 h-64 shadow-md m-2 flex flex-col justify-center items-center">
          <div className="text-center text-xl">Sustainable Budgeting</div>
          <img src={sustainablebudgeting} alt="" className="mt-2 pt-4" />
        </button>
      </div>
      <div className="m-8 flex flex-col justify-center items-center">
        <p className="flex"><p>Don't have an account?</p> <p className="text-blue-400 pl-2 pr-2">SignUp</p> <p>now</p></p>
      </div>
    </div>
  );
}

export default Home;
