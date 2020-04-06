import React from "react";
import "./Footer.css";
import Logo from "../../logo.png";
import Grid from "@material-ui/core/Grid";

export default function Footer() {
  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        style={{ paddingTop: "30px", textAlign: "center" }}
      >
        <a href="https://www.hubgets.com">
          <img
            src={Logo}
            className="logo"
            style={{ opacity: 0.2 }}
            alt="footer-logo"
          />
        </a>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        style={{ paddingTop: "30px", textAlign: "center" }}
      >
        <div className="grid-text">
          <h3>Our company</h3>
          <p>About us</p>
          <p>Blog</p>
          <p>We are hiring</p>
          <p>Terms of Service</p>
          <p>Contact us</p>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        style={{ paddingTop: "30px", textAlign: "center" }}
      >
        <div className="grid-text">
          <h3>Hubgets</h3>
          <p>Join the program</p>
          <p>Features</p>
          <p>Current status</p>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        style={{ paddingTop: "30px", textAlign: "center" }}
      >
        <div className="grid-text">
          <h3>Social</h3>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>
      </Grid>
    </React.Fragment>
  );
}
