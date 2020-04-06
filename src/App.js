import React from "react";
import "./App.css";
import UserForm from "./components/form/UserForm";
import Header from "./components/header/Header";
import Info from "./components/Info/Info";
import Footer from "./components/footer/Footer";
import { MuiThemeProvider } from "material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Logo from "./logo.png";

function App() {
  return (
    <MuiThemeProvider>
      <Grid container style={{ backgroundColor: "#f7f7f7" }}>
        <Grid
          item
          xs={12}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <a href="https://www.hubgets.com">
            <img src={Logo} className="logo" alt="header-logo" />
          </a>
        </Grid>
        <Grid item xs={12} style={{ backgroundColor: "#0da4d9" }}>
          <Header />
        </Grid>
        <Grid
          item
          container
          xs={12}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <UserForm className="userForm" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Info className="info" />
          </Grid>
        </Grid>
        <Grid container item xs={12} style={{ backgroundColor: "#0da4d9" }}>
          <Footer />
        </Grid>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "#0da4d9", textAlign: "center" }}
        >
          <p style={{ color: "#FFF", paddingTop: "30px", opacity: 0.7 }}>
            Copyright Tudor Entertainment Webservices 2020
          </p>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
