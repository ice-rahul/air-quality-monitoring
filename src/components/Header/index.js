import React from 'react';

function Header() {
  return (
    <div className="align-center box-shadow d-flex justify-space-between flex-column-small">
      <span className="text-bold text-1-2-5em m-10px text-center">AQI - Air Quality Index</span>
      <div className="d-flex gap-10px flex-wrap justify-center">
        <span className="border-light border-radius-4px p-10px user-select-none hover bg-black-hover text-white-hover">
          <span className="badge badge-good box-shadow-blue mr-5px">&emsp;</span>
          Good
        </span>
        <span className="border-light border-radius-4px p-10px user-select-none hover bg-black-hover text-white-hover">
          <span className="badge badge-satisfactory box-shadow-blue mr-5px">&emsp;</span>
          Satisfactory
        </span>
        <span className="border-light border-radius-4px p-10px user-select-none hover bg-black-hover text-white-hover">
          <span className="badge badge-moderate box-shadow-blue mr-5px">&emsp;</span>
          Moderate
        </span>
        <span className="border-light border-radius-4px p-10px user-select-none hover bg-black-hover text-white-hover">
          <span className="badge badge-poor box-shadow-blue mr-5px">&emsp;</span>
          Poor
        </span>
        <span className="border-light border-radius-4px p-10px user-select-none hover bg-black-hover text-white-hover">
          <span className="badge badge-very-poor box-shadow-blue mr-5px">&emsp;</span>
          Very Poor
        </span>
        <span className="border-light border-radius-4px p-10px user-select-none hover bg-black-hover text-white-hover">
          <span className="badge badge-severe box-shadow-blue mr-5px">&emsp;</span>
          Severe
        </span>
      </div>
    </div>
  );
}

export default Header;
