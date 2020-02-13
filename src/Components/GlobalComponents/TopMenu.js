import React from "react";
import MenuListComposition from "../../materials/MenuListComposition";
class TopMenu extends React.Component {
  render() {
    return (
      <div className="menu">
        <span style={{ marginLeft: "20px" }} className="menu-item">
          <MenuListComposition name="Wire" />
        </span>
        <span className="test">
          <MenuListComposition name="Conversation" />
        </span>
        <span className="test">
          <MenuListComposition name="Edit" />
        </span>
        <span className="test">
          <MenuListComposition name="View" />
        </span>
      </div>
    );
  }
}

export default TopMenu;
