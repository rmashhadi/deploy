//.middle
import React from "react";
import { connect } from "react-redux";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import DevicesIcon from "@material-ui/icons/Devices";
import DvrRoundedIcon from "@material-ui/icons/DvrRounded";
import { MenuSelection } from "../../action/myActions";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
class PrefrenceMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      ActiveMenu: "Account",
      WindowSize: ""
    };
  }

  handler() {
    this.props.dispatch(MenuSelection(this.state.ActiveMenu));
  }

  render() {
    return (
      <div className="middle">
        <div className="prefrences">
          <div></div>
          <span>PREFERENCES</span>
          <img
            src="https://seed.uno/images/assets/close-icon.png"
            alt="prefrence"
          />
        </div>

        <div
          onClick={e => this.setState({ ActiveMenu: "Account" })}
          className="prefrences-menu"
        >
          <span
            style={{
              marginTop: "10px",

              color:
                this.state.ActiveMenu === "Account"
                  ? this.props.myColors
                  : "snow"
            }}
          >
            <AccountCircleRoundedIcon />
          </span>
          <div
            style={{
              color:
                this.state.ActiveMenu === "Account"
                  ? this.props.myColors
                  : "snow"
            }}
            className="prefrences-menu-text"
          >
            <span style={{ display: "hidden" }}>Account</span>
          </div>
        </div>

        <div
          onClick={e => this.setState({ ActiveMenu: "Devices" })}
          className="prefrences-menu"
        >
          <span
            style={{
              marginTop: "10px",
              color:
                this.state.ActiveMenu === "Devices"
                  ? this.props.myColors
                  : "snow"
            }}
          >
            <DevicesIcon />
          </span>
          <div
            style={{
              color:
                this.state.ActiveMenu === "Devices"
                  ? this.props.myColors
                  : "snow"
            }}
            className="prefrences-menu-text"
          >
            <span>Devices</span>
          </div>
        </div>
        <div
          onClick={e => this.setState({ ActiveMenu: "Options" })}
          className="prefrences-menu"
        >
          <span
            style={{
              marginTop: "10px",
              color:
                this.state.ActiveMenu === "Options"
                  ? this.props.myColors
                  : "snow"
            }}
          >
            <TuneRoundedIcon />
          </span>
          <div
            style={{
              color:
                this.state.ActiveMenu === "Options"
                  ? this.props.myColors
                  : "snow"
            }}
            className="prefrences-menu-text"
          >
            <span>Options</span>
          </div>
        </div>
        <div
          onClick={e => this.setState({ ActiveMenu: "Audio" })}
          className="prefrences-menu"
        >
          <span
            style={{
              marginTop: "10px",
              color:
                this.state.ActiveMenu === "Audio" ? this.props.myColors : "snow"
            }}
          >
            <DvrRoundedIcon />
          </span>
          <div
            style={{
              color:
                this.state.ActiveMenu === "Audio" ? this.props.myColors : "snow"
            }}
            className="prefrences-menu-text"
          >
            <span>Audio/Video</span>
          </div>
        </div>
        <Link to="/chat/" style={{ textDecoration: "none", color: "snow" }}>
          <div className="prefrences-menu">
            <span style={{ marginTop: "10px" }}>
              <CreateIcon />
            </span>
            <div className="prefrences-menu-text">
              <span>Start a Conversation</span>
            </div>
          </div>
        </Link>
        {this.handler()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myColors: state.myColors
  };
};

export default connect(mapStateToProps)(PrefrenceMenu);
