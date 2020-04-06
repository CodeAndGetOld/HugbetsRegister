import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: "#0da4d9" },
  },
});

const FormUserDetails = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState({ hasError: false, value: "" });
  const [lastName, setLastName] = useState({ hasError: false, value: "" });
  const [company, setCompany] = useState({ hasError: false, value: "" });
  const [email, setEmail] = useState({ hasError: false, value: "" });

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const checkErrors = () => {
    if (firstName.value.length === 0)
      setFirstName({ value: firstName.value, hasError: true });
    if (lastName.value.length === 0)
      setLastName({ value: lastName.value, hasError: true });
    if (company.value.length === 0)
      setCompany({ value: company.value, hasError: true });
    if (email.value.length === 0 || !validateEmail(email.value))
      setEmail({ value: email.value, hasError: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkErrors();
    if (
      firstName.hasError ||
      lastName.hasError ||
      company.hasError ||
      email.hasError
    ) {
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        helperText={firstName.hasError ? "Must enter a first name." : ""}
        error={firstName.hasError}
        label="First name"
        onChange={(e) =>
          setFirstName({ value: e.target.value, hasError: false })
        }
      />

      <TextField
        helperText={lastName.hasError ? "Must enter a last name." : ""}
        error={lastName.hasError}
        label="Last name"
        onChange={(e) =>
          setLastName({ value: e.target.value, hasError: false })
        }
      />

      <TextField
        helperText={company.hasError ? "Must enter company name." : ""}
        error={company.hasError}
        label="Company"
        onChange={(e) => setCompany({ value: e.target.value, hasError: false })}
      />

      <TextField
        helperText={email.hasError ? "Incorrect e-mail structure." : ""}
        error={email.hasError}
        label="E-mail"
        onChange={(e) => setEmail({ value: e.target.value, hasError: false })}
      />

      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: "100px", color: "#FFF", margin: "30px" }}
        >
          Register
        </Button>
      </ThemeProvider>
    </form>
  );
};

export default FormUserDetails;
