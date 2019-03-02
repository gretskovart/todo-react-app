import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const {label, onDeleted,
          onToggleImportant, onToggleDone,
          important, done} = this.props;

    let classNames = `todo-list-item`;

    if (done) {
      classNames += ` todo-list-item--done`
    }

    if (important) {
      classNames += ` todo-list-item--important`
    }

    return (
      <span className={classNames}>
        <span 
          onClick={onToggleDone}>
          {label}
        </span>
        <span className="todo-list-item__icons">
          <button type="button"
          className="btn btn-default btn-sm"
          onClick={onDeleted}>
            <i className="far fa-trash-alt"></i>
          </button>
          <button type="button"
            className="btn btn-default btn-sm"
            onClick={onToggleImportant}>
            <i className="fas fa-exclamation"></i>
          </button>
        </span>
      </span>
    );
  } 
};
