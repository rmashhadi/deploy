import React from "react";
import {ProfileDispatching} from "../../action/myActions";

import { connect } from "react-redux";


class AccountList extends React.Component {
  Dispatching(){
    this.props.dispatch(ProfileDispatching('https://freedesignfile.com/upload/2019/10/Woman-face-illustration-vector.jpg'))
  }
  render() {
    return (
      <div className="left">
        <div
          id="Account1Pic"
          style={{ border: "solid", borderColor: this.props.myColors }}
        >
          {this.Dispatching()}
          <img className="my-image" src='https://freedesignfile.com/upload/2019/10/Woman-face-illustration-vector.jpg' alt="name" />
        </div>
        
        <button className="add-accounts"></button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    myColors: state.myColors
  };
};
const mapDispatchToProps = dispatch =>{
  return {
    dispatch:dispatch
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(AccountList);
