import React, { Component } from "react";
import PhotoIcon from "@material-ui/icons/Photo";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import FlareSharpIcon from "@material-ui/icons/FlareSharp";
import { conversationList } from "../../action/myActions";
import SendIcon from '@material-ui/icons/Send';
import { connect } from "react-redux";
class Footer extends Component {
  state = {
    txt: ""
  };
  sendMessage() {
    
      this.state.txt !== "" &&
        this.props.dispatch(conversationList(this.state.txt));
        this.setState({ txt: '' });
    
  }
  render() {
    return (
      <div className="new-message">
        <input
          placeholder="TYPE A MESSAGE"
          onFocus={event => (event.target.placeholder = "")}
          onBlur={event => (event.target.placeholder = "TYPE A MESSAGE")}
          onChange={event => this.setState({ txt: event.target.value })}
          value={this.state.txt}
          onKeyPress={e => {
            e.key === "Enter" && this.sendMessage();
          }}
        />

        <div className="icon-box" style={{ width: "200px",marginLeft:'10px' }}>
          <div onClick={() =>this.sendMessage()} style={{cursor:'pointer'}}>
          <SendIcon />
          </div>
          <PhotoIcon />
          <AttachFileIcon />
          <FlareSharpIcon />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Pic: state.connectionPicture,
    UserId: state.connectionID,
    lastMsg: state.payload,
    Email: state.connectionEmail,
    conversationId: state.conversationId
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
