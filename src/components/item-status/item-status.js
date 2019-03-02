import React, {Component} from 'react';

import './item-status.css';

export default class extends Component {
  render() {
    const {toDo, done} = this.props;

    return (
      <div className="item-status mb-2">
        <span>{toDo} осталось сделать, {done} сделано</span>
      </div>
    );
  }
};
