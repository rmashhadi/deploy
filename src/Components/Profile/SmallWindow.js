//.middle
import React from "react";
import { connect } from "react-redux";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import DevicesIcon from "@material-ui/icons/Devices";
import DvrRoundedIcon from "@material-ui/icons/DvrRounded";
import { MenuSelection } from "../../action/myActions";
import { Link } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
class SmallWindow extends React.Component {
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
      <div>
        <div
          onClick={e => this.setState({ ActiveMenu: "Account" })}
          className="prefrences-menu"
        >
          <span
            style={{
              color:
                this.state.ActiveMenu === "Account"
                  ? this.props.myColors
                  : "snow"
            }}
          >
            <AccountCircleRoundedIcon />
          </span>
          <div className="prefrences-menu-text"></div>
        </div>

        <div
          onClick={e => this.setState({ ActiveMenu: "Devices" })}
          className="prefrences-menu"
        >
          <span
            style={{
              color:
                this.state.ActiveMenu === "Devices"
                  ? this.props.myColors
                  : "snow"
            }}
          >
            <DevicesIcon />
          </span>
          <div className="prefrences-menu-text"></div>
        </div>
        <div
          onClick={e => this.setState({ ActiveMenu: "Options" })}
          className="prefrences-menu"
        >
          <span
            style={{
              color:
                this.state.ActiveMenu === "Options"
                  ? this.props.myColors
                  : "snow"
            }}
          >
            <TuneRoundedIcon />
          </span>
          <div className="prefrences-menu-text"></div>
        </div>
        <div
          onClick={e => this.setState({ ActiveMenu: "Audio" })}
          className="prefrences-menu"
        >
          <span
            style={{
              color:
                this.state.ActiveMenu === "Audio" ? this.props.myColors : "snow"
            }}
          >
            {" "}
            <DvrRoundedIcon />
          </span>

          <div
            style={{
              color:
                this.state.ActiveMenu === "Audio" ? this.props.myColors : "snow"
            }}
            className="prefrences-menu-text"
          ></div>
        </div>
        <Link
                to="/chat/"
                style={{textDecoration:'none' ,color:'snow'}}
                
              >
        <div className="prefrences-menu">
          <span>
            
              <CreateIcon />
            
          </span>
          <div
            style={{
              color:
                this.state.ActiveMenu === "Conversation"
                  ? this.props.myColors
                  : "snow"
            }}
            className="prefrences-menu-text"
          ></div>
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

export default connect(mapStateToProps)(SmallWindow);
