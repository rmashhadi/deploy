import React from "react";
import ConversationListNames from "./ConversationListNames";
import SearchIcon from "@material-ui/icons/Search";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
import { connect } from "react-redux";
import TopPeople from "./TopPeople";

class ConversationList extends React.Component {
  constructor() {
    super();
    this.state = {
      searching: false,
      chatList: [
        {
          name:'Zahra',
          email:'Z@gmail.com',
          picture:'https://images.all-free-download.com/images/graphicthumb/woman_vector_266374.jpg'
        },
        {
          name:'Mahdi',
          email:'M@gmail.com',
          picture:'data:image/jpeg;base64,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'
        },{
          name:'Mohammad',
          email:'Mo@gmail.com',
          picture:'https://static.vecteezy.com/system/resources/previews/000/141/703/non_2x/headshot-of-smiling-young-businessman-vector.jpg'
        },{
          name:'Ali',
          email:'A@gmail.com',
          picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4E0LvFx4wxH-YrfuLWMW1nDItly8tzVTEyhqtcuHwXWF6g-W&s'
        },
      ]
    };
  }
  
  render() {
    return (
      <div style={{backgroundImage:'linear-gradient(black, rgb(66, 51, 48), black)',display:'flex', justifyContent:'flex-start',flexShrink:'0',alignContent:'stretch',flexDirection:'column',width:'304px',color: 'snow', fontWeight: 'bold',backgroundColor:'black'}}>
   
    
        <div className="prefrences-searchbox">
          <div className="prefrences">
            <div></div>
            <span>{this.props.name}</span>
            <img src="https://seed.uno/images/assets/close-icon.png" />
          </div>
          <div className="prefrences-menu">
            <div className="search-box">
              <SearchIcon />
              <input
                onChange={e => this.handleSearch(e.target.value)}
                type="text"
                placeholder="SEARCH BY NAME OR USERNAME"
              />
            </div>
          </div>
        </div>
        <div>
          {this.state.searching == "" && (
            <div>
              <div className="prefrences-menu">
                <a>
                  <GroupWorkOutlinedIcon />
                </a>
                <div className="prefrences-menu-text">
                  <span className="Menu1" >
                    Creat Group
                  </span>
                </div>
              </div>
              
              <TopPeople
                picture={this.props.picture}
                id={this.props.UserId}
                email={this.props.Email}
                family={this.props.family}
              />

            </div>
          )}
          <div>
            {this.state.searching !== "" &&
              this.state.chatList.map(chatList => {
                return (
                  <ConversationListNames
                    name={chatList.name}
                    latestMsg={chatList.latestMsg}
                    email={chatList.email}
                    searching="yes"
                    picture={chatList.picture}
                  />
                );
              })}
          </div>
        </div>
      </div>
  
  )
  }
}

const mapStateToProps = state => ({
  Pic: state.Pic,
  UserId: state.UserId,
  lastMsg: state.lastMsg,
  Email: state.Email,
  convList: state.convList
});
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationList);
