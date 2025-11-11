import React, { useState } from "react";
import Select from "react-select";
import "./ScheduleForm.css";

const monthOptions = [
  { value: "Jan", label: "Jan" },
  { value: "Feb", label: "Feb" },
  { value: "Mar", label: "Mar" },
  { value: "Apr", label: "Apr" },
  { value: "May", label: "May" },
  { value: "Jun", label: "Jun" },
  { value: "Jul", label: "Jul" },
  { value: "Aug", label: "Aug" },
  { value: "Sep", label: "Sep" },
  { value: "Oct", label: "Oct" },
  { value: "Nov", label: "Nov" },
  { value: "Dec", label: "Dec" }
];

const calendarOptions = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" }
];

const ScheduleForm = () => {
  const [rebalanceType, setRebalanceType] = useState("ad-hoc");

  return (
    <div className="schedule-container">
      {/* Left Column */}
      <div className="left-column">
        <div className="row">
          <label>Select Underlying Strategy:</label>
          <select>
            <option>Dropdown</option>
            <option>Strategy 1</option>
          </select>
        </div>
        <div className="row">
          <label>Sub Category:</label>
          <select>
            <option>Dropdown</option>
          </select>
        </div>
        <div className="row">
          <label>CA:</label>
          <Select options={calendarOptions} />
        </div>
        <div className="row">
          <label>Calculation Calendar:</label>
          <Select options={calendarOptions} />
        </div>
        <div className="row">
          <label>Trading Calendar:</label>
          <Select options={calendarOptions} />
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="row">
          <label>Rebalance Frequency:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="rebalance"
                value="ad-hoc"
                checked={rebalanceType === "ad-hoc"}
                onChange={() => setRebalanceType("ad-hoc")}
              />
              Ad-hoc
            </label>
            <label>
              <input
                type="radio"
                name="rebalance"
                value="schedule"
                checked={rebalanceType === "schedule"}
                onChange={() => setRebalanceType("schedule")}
              />
              Create Schedule
            </label>
          </div>
        </div>

        {rebalanceType === "schedule" && (
          <div className="schedule-form">
            <div className="row">
              <label>Start Date:</label>
              <input type="date" />
              <label>End Date:</label>
              <input type="date" />
            </div>
            <div className="row">
              <label>Rebalance Months:</label>
              <select>
                <option>Jan</option>
                <option>Feb</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="row">
              <label>Recurrence: Week of Month:</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="row">
              <label>Recurrence: Weekday:</label>
              <select>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thrusday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleForm;