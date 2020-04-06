import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div
      style={{
        dispslay: "flex",
        flex: 1,
        height: "200px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ paddingTop: "30px" }}>
        <h1 style={{ textAlign: "center" }}>Create Organization</h1>
        <h6 style={{ textAlign: "center" }}>
          Small or large, any team will increase productivity with Hubgets. It
          allows teams to filter noise and focus on results.
        </h6>
      </div>
    </div>
  );
}
