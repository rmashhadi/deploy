const init = {
  myColors: "red",
  selectedMenu: "Account",
  Pic: "",
  UserId: "",
  lastMsg: "",
  Email: "",
  conversationId: "",
  startConv:false,
  msgList: [
    {
      msg: "",
      time: "",
      id: ""
    }
  ],
  Source:'',
  convList: [],
  SpeechList: []
};

export default function infoSender(state = init, action) {
  
  switch (action.type) {
    case "CHAT":
      return {
        ...state,
        msgList: [
          ...state.msgList,
          {
            msg: action.payload,
            time: new Date().toLocaleTimeString()
          }
        ]
      };

    case "CONVERSATION_LIST_FROM_SERVER":
      return {
        ...state,
        convList: action.payload
      };
      case "PROFILE_DISPATCHING":
        return {
          ...state,
          Source: action.payload
        };
  
    case "SEND_COLOR":
      return {
        ...state,
        myColors: action.payload
      };
    case "MENU_SELECTION":
      return {
        ...state,
        selectedMenu: action.payload
      };

    case "LAST_CONVERSATION":
      return {
        ...state,
        Pic: action.connectionPicture,
        UserName: action.connectionName,
        lastMsg: action.payload,
        Email: action.connectionEmail,
        
      };
    case "GET_MSG_LIST":
      return {
        ...state,
        SpeechList: action.payload
      };
      case "CLICKED":
        return {
          ...state,
          startConv: action.payload
        };
  
    default:
      return state
      
  }
}
