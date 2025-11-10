import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Cards from './MediaCard'
import building from "./images/building.jpg";
import bar from "./images/investing_facts_cover.jfif";
import ai from "./images/AI.png"
import analytics from "./images/analytics.png"
import gen_img from "./images/big-pic.png";
import calc from "./images/calculations.webp"

export default function MediaCoverage() {
  return (
    <div className="media-page">
      <div className="empty-page">
        <h2 style={{
          fontSize: 50,
          textAlign: "center",
          color: "rgb(55, 18, 100)",
          backgroundColor: "transparent"
        }}>IndexElevate</h2>
        <p style={{
          fontSize: 25,
          textAlign: "center"
        }}>Media coverage & insights from our experts</p>
      </div>
      <div className="d-flex flex-row justify-content-evenly" style={{flexWrap: "wrap", rowGap: "40px", columnGap: "0px"}}>
        <Cards title = "Backtesting and Rebalancing" image = {building}></Cards>
        <Cards title = "Index Calculation" image = {calc}></Cards>
        <Cards title = "Reporting and Analytics" image = {analytics}></Cards>
        <Cards title = "Portfolio Managment Services" image = {bar}></Cards>
        <Cards title = "AI Lab" image = {ai}></Cards>
      </div>
    </div>
  );
}
