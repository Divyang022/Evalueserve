import "./DesignNewStrategy.css";
import DialogBox from "./DialogBox";
import RadioButton from "./RadioButton";
import { useState } from "react";
import ExcelTable from "./ExcelTable";
import ExcelTransposeTable from "./ExcelTransposeTable";
import ScheduleForm from "./ScheduleForm";

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const sampleData = [
    {
      ISIN: "",
      Ticker: "",
      RIC: "",
      Currency: "",
      DividendCurrency: "",
      ExchangeCountry: "",
      DataSource: "",
      Actions: "↓  👁",
    },
    {
      ISIN: "",
      Ticker: "",
      RIC: "",
      Currency: "",
      DividendCurrency: "",
      ExchangeCountry: "",
      DataSource: "",
      Actions: "↓  👁",
    },
    {
      ISIN: "",
      Ticker: "",
      RIC: "",
      Currency: "",
      DividendCurrency: "",
      ExchangeCountry: "",
      DataSource: "",
      Actions: "↓  👁",
    },
    {
      ISIN: "",
      Ticker: "",
      RIC: "",
      Currency: "",
      DividendCurrency: "",
      ExchangeCountry: "",
      DataSource: "",
      Actions: "↓  👁",
    },
  ];
  const sampleTransData = [
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
  ];

  return (
    <div className="container">
      {/* Section 1 */}
      <div className="section2">
        <div className="section2-content">
          <label>SELECT 1: </label>
          <RadioButton
            options={["Replicate Existing Strategy", "Create New Strategy"]}
            labelName={"strategyType"}
          ></RadioButton>
        </div>
        <div className="section2-content">
          <label>SELECT 2: </label>
          <RadioButton
            options={["Index", "Basket", "TWAPS/VWAPS"]}
            labelName={"assetType1"}
          ></RadioButton>
        </div>
        <div className="section2-content">
          <label>SELECT 3: </label>
          <RadioButton
            options={["Eq", "Eq Drv", "Rates", "Comm", "Multi Asset"]}
            labelName={"assetType2"}
          ></RadioButton>
        </div>
      </div>
      <div className="section">
          <ScheduleForm></ScheduleForm>
      </div>
      <div className="section section4">
        <div className="row">
          <h4>Underlying Instrument</h4>
          <button className="btn" onClick={() => setDialogOpen(true)}>
            Ticker Lookup
          </button>
          <DialogBox
            isOpen={isDialogOpen}
            onClose={() => setDialogOpen(false)}
            title="Hello Vikash!"
          >
            <p>This is a simple dialog box in React.</p>
          </DialogBox>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ width: "600px", height: "auto", margin: "10px 50px" }}>
            <ExcelTable data={sampleData} />
          </div>
        </div>
      </div>
      <div className="section section5">
        <h4>Parameters</h4>
        <ExcelTransposeTable data={sampleTransData} />
        <button className="btn" style={{ width: "150px" }}>
          Edit and Update
        </button>
      </div>
      <div className="section section6">
        <h4>Backtest Parameters</h4>
        <div className="backtest-grid">
          <div className="row">
            <label>From Date:</label>
            <input type="date" />
            <label>Data Sufficiency Check:</label>
            <input type="text" placeholder="check" />
          </div>
          <div className="row">
            <label>To Date:</label>
            <input type="date" />
            <label>Switch Date for Data Source:</label>
            <input type="date" />
          </div>
        </div>
      </div>
      <div className="generate-btn">
        <button className="btn">Generate Backtest</button>
      </div>
    </div>
  );
}

export default App;

    //   {/* Section 3 */}
    //   {/* <div className="section section3">
    //     <div className="col">
    //       <div className="row">
    //         <label>Select Underlying Strategy:</label>
    //         <select>
    //           <option>Dropdown</option>
    //           <option>Strategy 1</option>
    //         </select>
    //       </div>

    //       <div className="row">
    //         <label>Sub Category:</label>
    //         <select>
    //           <option>Dropdown</option>
    //           <option>Sub 1</option>
    //         </select>
    //       </div>

    //       <div className="row">
    //         <label>Rebalance:</label>
    //         <input type="text" />
    //       </div>
    //     </div>
    //     <div className="col">
    //       <label>Basic Description:</label>
    //       <br />
    //       <input
    //         type="textarea"
    //         placeholder="Basic Description"
    //         style={{ height: "60px", width: "370px" }}
    //       />
    //       <br />
    //       <label style={{ marginTop: "10px" }}>
    //         holiday o calc holt tradg holiday
    //       </label>
    //     </div>
    //     <div className="col">
    //       <button className="btn" onClick={() => setDialogOpen(true)}>
    //         UI Editor
    //       </button>
    //       <DialogBox
    //         isOpen={isDialogOpen}
    //         onClose={() => setDialogOpen(false)}
    //         title="Hello Vikash!"
    //       >
    //         <p>This is a simple dialog box in React.</p>
    //       </DialogBox>
    //     </div>
    //   </div> */}