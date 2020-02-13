import React from "react";
import { Clicking } from "../../action/myActions";

import { connect } from "react-redux";
import ChatButton from "../../materials/ChatButton";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { startConv: false };
  }
  handleClick() {
    this.setState({ startConv: true }, () =>
      this.props.dispatch(Clicking(this.state.startConv))
    );
  }
  render() {
    console.log("startConv", this.state.startConv);
    return (
      <div onClick={() => this.handleClick()} style={{alignSelf:'center', marginTop:'60px'}}>
        <ChatButton />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};
export default connect(mapDispatchToProps)(Navigation);
