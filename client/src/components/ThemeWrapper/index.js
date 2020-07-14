import React from "react";

const ThemeWrapper = ({ children }) => (
  <div
    className="App m-0 h-full w-full" 
  >
    <div className="hidden sm:block" id="stripes">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div>
      {children}
    </div>
  </div>
);

export default ThemeWrapper;
