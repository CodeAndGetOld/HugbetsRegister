import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import Paper from "@material-ui/core/Paper";
import PermContactCalendarTwoToneIcon from "@material-ui/icons/PermContactCalendarTwoTone";

export class UserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  };

  handleChange = (input) => (e) =>
    this.setState({
      [input]: e.target.value,
    });
  render() {
    const { firstName, lastName, company, email } = this.state;
    const values = { firstName, lastName, company, email };

    return (
      <div
        style={{
          padding: "30px",
          backgroundColor: "#FFF",
        }}
      >
        <Paper
          elevation={3}
          style={{
            borderRadius: "50%",
            height: "60px",
            width: "60px",
            margin: "0 auto",
            marginTop: "-60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,

              height: "60px",
              width: "60px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PermContactCalendarTwoToneIcon style={{ fontSize: "36px" }} />
          </div>
        </Paper>
        <FormUserDetails
          values={values}
          handleChange={this.handleChange}
          nextStep={this.nextStep}
        />
      </div>
    );
  }
}

export default UserForm;
