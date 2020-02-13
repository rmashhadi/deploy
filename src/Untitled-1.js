import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import ProfilePage from "./Components/Profile/ProfilePage";
import LoginPage from "./Components/Login/LoginPage";
import ChatPage from "./Components/Chat/ChatPage";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import infoSender from "./reducer/reducers";
import { Provider } from "react-redux";
import Starter from "./Components/Login/Starter";
import SignUp from "./Components/Login/SignUp";
import FloatingActionButtons from "./materials/ChatButton";
// import FormControlLabelPosition from "./materials/Checkbox";
const store = createStore(infoSender, applyMiddleware(logger));

function App() {
  return (
    <Provider store={store}>
      <div>
        <Route exact path="/" component={Starter} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile/" component={ProfilePage} />
        <Route exact path="/chat/" component={ChatPage} />
        <Route exact path="/button/" component={FloatingActionButtons} />
      </div>

      <Helmet>
        <title>Rahele's Messenger</title>
      </Helmet>
    </Provider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
