import React from "react";
import ForumTwoToneIcon from "@material-ui/icons/ForumTwoTone";
import CenterFocusStrongTwoToneIcon from "@material-ui/icons/CenterFocusStrongTwoTone";
import AssessmentTwoToneIcon from "@material-ui/icons/AssessmentTwoTone";

export default function Info() {
  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <CenterFocusStrongTwoToneIcon />
        <h5
          style={{
            marginLeft: "30px",
          }}
        >
          Centralizes communication channels and reduces overhead.
        </h5>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <ForumTwoToneIcon />
        <h5
          style={{
            marginLeft: "30px",
          }}
        >
          Brings together instant messaging, voice and video communciation in
          the browser.
        </h5>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <AssessmentTwoToneIcon />
        <h5
          style={{
            marginLeft: "30px",
          }}
        >
          Captures information across the organization, retains the knowledge,
          analyzes and improves it.
        </h5>
      </div>
    </div>
  );
}

// Brings together instant messaging, voice and video communciation in the
// browser.

// Captures information across the organization, retains the knowledge,
//analyzes and improves it.
