import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Slides from "./components/Slides";
import MediaCoverage from "./components/MediaCoverage";
import customImg from "./components/images/custom-filter.webp";
import preBuilt from "./components/images/pre-built.webp";
// import Screener from './screener/Screener';
import Sidebar from "./sidebar/Sidebar";
import Home from "./sidebar/Home";
import GeneralRules from "./sidebar/GeneralRules";
import UniverseBuilder from "./sidebar/UniverseBuilder";
import Chart from "./Chart/Chart";

function App() {
  const [link, setLink] = useState("Home");
  const [page, setPage] = useState("Home");

  return (
    <div>
      {/* ✅ HOME PAGE */}
      {link === "Home" && (
        <div className="App">
          <Navbar />
          <div className="slides">
            <Slides />
          </div>

          <div className="d-flex flex-row justify-content-evenly"
            style = {{
              marginTop: "-100px"  
            }}>
            <Cards title="Pre-built Screen" image={preBuilt} />
            <Cards title="Create custom filter" image={customImg} />
          </div>

          <div className="d-flex flex-row mb-3 justify-content-evenly">
            <button
              onClick={() => setLink("Screener")}
              id="screener-link"
            >
              STOCKS SCREENER
            </button>
          </div>

          <MediaCoverage />

          {/* ✅ Indices section ONLY on Home page */}
          <div className="indices-wrapper">
            <p className="title">Indices</p>
            <p className="subtitle">
              "We offer high-tech design and calculation services of a wide range
              of indices to multiple players in the financial and insurance
              industry."
            </p>
          </div>

          {/* ✅ Chart also only on Home */}
          <Chart />
        </div>
      )}

      {/* ✅ SCREENER PAGE */}
      {link === "Screener" && (
        <div id="home-root">
          <Sidebar page={page} setPage={setPage} setLink={setLink} />

          {page === "Home" && <Home />}
          {page === "General Rules" && <GeneralRules />}
          {page === "Universe Builder" && <UniverseBuilder />}
        </div>
      )}
    </div>
  );
}

export default App;
