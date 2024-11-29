import React from "react";

export default function Spinner() {
  return (
    <div className="spinner-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="spinner"></div>
    </div>
  );
}
