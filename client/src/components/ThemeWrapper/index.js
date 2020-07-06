import React from "react";

const ThemeWrapper = ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
    className="App"
  >
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "#B77E00",
      }}
    >
      {children}
    </div>
  </div>
);

export default ThemeWrapper;
