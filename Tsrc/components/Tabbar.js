import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Tabbar extends Component {
  render() {
    return (
      <div className="tab-bar">
        <div className="item">
          <Link to="/"/>
        </div>
        <div className="item">
          <Link to="/hot"/>
        </div>
        <div className="item">
          <Link to="/discover"/>
        </div>
        <div className="item">
          <Link to="/me"/>
        </div>
      </div>
    )
  }
}

export default Tabbar;
