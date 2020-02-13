import React from "react";
import { connect } from "react-redux";
import { lastConversation } from "../../action/myActions";

class ConversationListNames extends React.Component {
  constructor() {
    super();
    this.state = {
      userLastMsg: "",
      userId: "",
      userPic: ""
    };
  }
  ConvRequestANDdispatching() {
    if (this.props.searching === "yes") {
      this.props.dispatch(
        lastConversation(
          this.props.latestMsg,
          this.props.name,
          this.props.picture,
          this.props.email
        )
      );
    } }
  render() {
    return (
      <div
        onClick={() => this.ConvRequestANDdispatching()}
        className="name-list"
      >
        <img className="list-pics" src={this.props.picture} alt="name" />
        <div className="name-id">
          <span style={{ color: "snow" }}>
           {this.props.email} 
          </span>
          <span style={{ color: "gray" }}>{this.props.latestMsg}</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapDispatchToProps)(ConversationListNames);
