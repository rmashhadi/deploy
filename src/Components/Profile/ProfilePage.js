import React from "react";
import TopMenu from "../GlobalComponents/TopMenu";
import AccountList from "../GlobalComponents/AccountList";
import PrefrencesMenu from "./PrefrencesMenu";
import AccountDisplay from "./AccountDisplay";
import { connect } from "react-redux";
import Devices from "./Devices";
import Audio from "./Audio";

import Options from "./Options";

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="WirePages">
        <TopMenu />
        <div className="under-menu">
          <AccountList />
          <PrefrencesMenu />
          {this.props.selectedMenu === "Account" && <AccountDisplay />}

          {this.props.selectedMenu === "Devices" && <Devices />}

          {this.props.selectedMenu === "Audio" && <Audio />}

          {this.props.selectedMenu === "Options" && <Options />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedMenu: state.selectedMenu
  };
};
export default connect(mapStateToProps)(ProfilePage);
