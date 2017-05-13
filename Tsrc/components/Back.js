import React from 'react';
import {Link} from 'react-router-dom';
class Back extends React.Component {
  render() {
    return (
      <div className="back-header">
        <Link to={this.props.url}>
          <div className="back"></div>
        </Link>
      </div>
    )
  }
}
export default Back;