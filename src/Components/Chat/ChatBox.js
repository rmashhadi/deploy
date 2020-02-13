import React from "react";
import Speech from "./Speech";
import SearchIcon from "@material-ui/icons/Search";
import VideocamIcon from "@material-ui/icons/Videocam";
import CallIcon from "@material-ui/icons/Call";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Footer from "./Footer";
import { connect } from "react-redux";
import Navigation from "./Navigation";

class Chatting extends React.Component {
  render() {
    return (
      <div className="connection-profile">
        <h1 style={{ alignSelf: "center" }}>Chatting With</h1>
        <p style={{ alignSelf: "center" }}>{this.props.UserName}</p>

        <img
          src={this.props.Pic}
          alt="name"
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
        />
      </div>
    );
  }
}
class ChatTopMenu extends React.Component{
  render(){
    return(
      <div className="chat-page-top-menu">
      <SearchIcon />
      <span style={{ marginLeft: "90px" }}>Conversation Started</span>
      <div className="icon-box">
        <VideocamIcon />
        <CallIcon />
        <InfoOutlinedIcon />
      </div>
    </div>
    )
  }
}
class ChatBox extends React.Component {
  

  render() {
    let phase1,phase2
    if (this.props.startConv) {
      phase2=<ChatTopMenu />
      phase1 = <Chatting UserName={this.props.UserName} Pic={this.props.Pic} />;
    
    }
    let phase0
    if (this.props.Email==='') {phase0=<h1 style={{alignSelf:'center'}}>Choose Someone from your Connection List</h1>}
    else if (this.props.startConv===false) {phase0=<Navigation />}
    return (
      <div className="chat-page">
        {phase0}
      

        <div style={{border:'none'}} className="connection-profile">
          
          {phase2}
          {phase1}
          </div>

        <div className="message-area" style={{ overflow: "auto" }}>
          {this.props.SpeechList.map(messageItem => (
            <Speech
              id={messageItem.sender.id}
              name={messageItem.sender.email}
              message={messageItem.text}
              time={messageItem.date}
            />
          ))}

          {this.props.msgList.map((msg, index) => {
            if (msg.id !== "") {
              return (
                <Speech
                  key={index}
                  id={localStorage.MyId}
                  name={msg.name}
                  message={msg.msg}
                  time={msg.time}
                />
              );
            }
          })}
        </div>
        {this.props.startConv && <Footer />}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Pic: state.Pic,
    UserName: state.UserName,
    lastMsg: state.lastMsg,
    Email: state.Email,
    msgList: state.msgList,
    SpeechList: state.SpeechList,
    startConv:state.startConv
  };
};
export default connect(mapStateToProps)(ChatBox);
