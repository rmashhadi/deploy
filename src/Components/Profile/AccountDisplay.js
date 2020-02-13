import React from "react";
import { connect } from "react-redux";
import { colorName } from "../../action/myActions";

class AccountDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      SharedColor: "red"
    };
  }
  changer(e) {
    this.props.dispatch(colorName(e.target.name));
    this.setState({ SharedColor: e.target.name });
  }
  render() {
    return (
      <div className="Display1">
        <div className="right-top">
          <p>ACCOUNT</p>
        </div>
        <div className="right-bottom">
          <div className="name">
            <div className="name-left">
              <div className="Ps">
                <p className="p3">
                  <b>Rahele</b>
                </p>
                <p className="p1">rme1383@gmail.com</p>
                <p className="p2">{this.props.myuserName}</p>
              </div>

              <div className="dots-container">
                <div
                  className="colored-div"
                  style={{
                    border: "solid",
                    borderColor:
                      this.state.SharedColor === "blue"
                        ? this.state.SharedColor
                        : "transparent"
                  }}
                >
                  <button
                    className="colored-button"
                    name="blue"
                    style={{ backgroundColor: "blue" }}
                    type="button"
                    onClick={e => this.changer(e)}
                  ></button>
                </div>
                <div
                  className="colored-div"
                  style={{
                    border: "solid",
                    borderColor:
                      this.state.SharedColor === "greenyellow"
                        ? this.state.SharedColor
                        : "transparent"
                  }}
                >
                  <button
                    className="colored-button"
                    name="greenyellow"
                    style={{ backgroundColor: "greenyellow" }}
                    type="button"
                    onClick={e => this.changer(e)}
                  ></button>
                </div>
                <div
                  className="colored-div"
                  style={{
                    border: "solid",
                    borderColor:
                      this.state.SharedColor === "red"
                        ? this.state.SharedColor
                        : "transparent"
                  }}
                >
                  <button
                    className="colored-button"
                    name="red"
                    style={{ backgroundColor: "red" }}
                    type="button"
                    onClick={e => this.changer(e)}
                  ></button>
                </div>
                <div
                  className="colored-div"
                  style={{
                    border: "solid",
                    borderColor:
                      this.state.SharedColor === "orange"
                        ? this.state.SharedColor
                        : "transparent"
                  }}
                >
                  <button
                    className="colored-button"
                    name="orange"
                    style={{ backgroundColor: "orange" }}
                    type="button"
                    onClick={e => this.changer(e)}
                  ></button>
                </div>
                <div
                  className="colored-div"
                  style={{
                    border: "solid",
                    borderColor:
                      this.state.SharedColor === "palevioletred"
                        ? this.state.SharedColor
                        : "transparent"
                  }}
                >
                  <button
                    className="colored-button"
                    name="palevioletred"
                    style={{ backgroundColor: "palevioletred" }}
                    type="button"
                    onClick={e => this.changer(e)}
                  ></button>
                </div>
                <div
                  className="colored-div"
                  style={{
                    border: "solid",
                    borderColor:
                      this.state.SharedColor === "purple"
                        ? this.state.SharedColor
                        : "transparent"
                  }}
                >
                  <button
                    className="colored-button"
                    name="purple"
                    style={{ backgroundColor: "purple" }}
                    type="button"
                    onClick={e => this.changer(e)}
                  ></button>
                </div>
              </div>
            </div>

            <div className="name-image">
              <img
                className="one"
                src={this.props.Source}
                alt={this.props.Source}
              />
            </div>
          </div>
          <div className="info">
            <div className="info-text">
              <div className="top-text">
                <p className="p-top">INFO</p>
                <p className="gray-without">Email</p>
                <p className="p-bottom">{this.props.myuserName}</p>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="info-text">
              <div className="top-text">
                <p className="p-top">DATA USAGE PERMISSIONS</p>
              </div>
              <div className="checkbox-container">
                <input className="checkboxes" type="checkbox" />
                <p className="big">Send anonymous data</p>
              </div>
              <p className="gray">
                Help make Wire better by sending anonymous usage and crash
                reports.
              </p>
              <div className="checkbox-container">
                <input className="checkboxes" type="checkbox" />
                <p className="big">Receive newsletter</p>
              </div>
              <p className="gray">
                Receive news and product updates from Wire via email.
              </p>
            </div>
          </div>
          <div className="info">
            <div className="info-text">
              <div className="top-text">
                <p className="p-top">PRIVACY</p>
              </div>
              <div className="checkbox-container">
                <input className="checkboxes" type="checkbox" />
                <p className="big">Read receipts</p>
              </div>
              <p className="gray">
                When this is off, you won't be able to see read receipts from
                other people.
                <br />
                This setting does not apply to group coversations.
              </p>
            </div>
          </div>
          <div className="info">
            <div className="info-text">
              <div className="top-text">
                <p className="p-top">HISTORY</p>
              </div>
              <p
                className="colored-Text"
                style={{ color: this.state.SharedColor, marginLeft: "70px" }}
              >
                Back up conversations
              </p>
              <p className="gray">
                Create a backup to preserve your conversation history. you can
                use this to restore history if you lose your computer or switch
                to new one. The backup file is not protected by Wire end-to-end
                encryption, so store it in a safe place.
              </p>
              <p
                className="colored-Text"
                style={{ color: this.state.SharedColor, marginLeft: "70px" }}
              >
                Restore from backup
              </p>
              <p className="gray">
                You can only restore history from a backup of the same platform.
                Your backup will overwrite the conversations that you may have
                on this device.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myuserName: state.myuserName,
    Source: state.Source
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountDisplay);
