import React from "react";
import CustomizedButtons from "../../materials/Button.jsx";
import StyledCheckbox from "../../materials/Checkbox.jsx";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class InputBox extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  UserNamePlaceHolder() {
    let mode = "";
    this.props.name === "Log in"
      ? (mode = "EMAIL OR USER NAME")
      : (mode = "YOU@EMAIL.COM");
    return mode;
  }
  render() {
    return (
      <div className="right">
        <div className="close"></div>
        <div className="login">
          <h1 className="login-title">{this.props.name}</h1>
          {this.props.name === "Log in" && (
            <p>Enter your email address or username.</p>
          )}
        </div>
        <div className="userpass">
          <div className="back-container">
            <Link to="/">
              <button className="back-button"></button>
            </Link>
          </div>
          <div
            className="username-inputs"
            style={{ height: this.props.name === "Log in" ? "120px" : "180px" }}
          >
            {this.props.name === "New account" && (
              <input
                className="userinput"
                type="text"
                placeholder="NAME"
                onFocus={event => (event.target.placeholder = "")}
                onBlur={event => (event.target.placeholder = "NAME")}
                onChange={e => this.setState({ name: e.target.value })}
              />
            )}
            <input
              className="userinput"
              type="text"
              placeholder={this.UserNamePlaceHolder()}
              onChange={e => this.setState({ email: e.target.value })}
              onFocus={event => (event.target.placeholder = "")}
              onBlur={event =>
                (event.target.placeholder = this.UserNamePlaceHolder())
              }
            />

            <div className="inputbox">
              <input
                id="userpassword"
                style={{
                  width: this.props.name === "Log in" ? "300px" : "340px"
                }}
                type="password"
                placeholder="PASSWORD"
                onFocus={event => (event.target.placeholder = "")}
                onBlur={event => (event.target.placeholder = "PASSWORD")}
                onChange={e => this.setState({ password: e.target.value })}
              />
              {this.props.name === "Log in" && (
                <Link to="/profile/">
                  <button id="click"></button>
                </Link>
              )}
            </div>
          </div>
          <div className="nothing"></div>
        </div>
        {this.props.name === "Log in" && (
          <div className="footnotes">
            <p id="Invalid">INVALID USER NAME OR PASSWORD</p>
            <a href="#" target="-blank">
              FORGOT PASSWORD?
            </a>

            <div className="footnotes-bottom">
              <a href="#" target="-blank">
                COMPANY LOG IN
              </a>
              <a href="#" target="-blank">
                LOG IN WITH PHONE NUMBER
              </a>
            </div>
          </div>
        )}
        {this.props.name === "New account" && (
          <div className="footnotes">
            <p
              style={{
                fontSize: "12px",
                marginLeft: "30px",
                alignSelf: "center"
              }}
            >
              Use at least 8 characters, with one lowercase letter, one capital
              <br />
              letter, a number, and a special character.
            </p>
            <p
              style={{
                fontSize: "12px"
              }}
            >
              <StyledCheckbox /> I ACCEPT THE TERMS AND CONDITIONS
            </p>
            {/* <div onClick={() => this.CreatAccount()}> */}
            <Link to="/profile/">
              <CustomizedButtons />
            </Link>
          </div>
          // </div>
        )}
        <div></div>
      </div>
    );
  }
}

export default withRouter(InputBox);
