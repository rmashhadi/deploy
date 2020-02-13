export const colorName = myColors => {
  return {
    type: "SEND_COLOR",
    payload: myColors
  };
};
export const conversationList = text => {
  return {
    type: "CHAT",
    payload: text
  };
};
export const conversationListFromServer = data => {
  return {
    type: "CONVERSATION_LIST_FROM_SERVER",
    payload: data
  };
};

export const ProfileDispatching = source => {
  return {
    type: "PROFILE_DISPATCHING",
    payload: source
  };
};

export const lastConversation = (lastMsg, name, Pic, Email) => {
  return {
    type: "LAST_CONVERSATION",
    payload: lastMsg,
    connectionName: name,
    connectionPicture: Pic,
    connectionEmail: Email,
    
  };
};
export const Clicking = (startConv) => {
  return {
    type: "CLICKED",
    payload: startConv,
    };
};

export const getMsgList = SpeechList => {
  return {
    type: "GET_MSG_LIST",
    payload: SpeechList
  };
  
};
export const MenuSelection = MenuName => {
  return {
    type: "MENU_SELECTION",
    payload: MenuName
  };
  
};