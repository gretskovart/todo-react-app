import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    {name: `all`, label: `Все`},
    {name: `active`, label: `Активные`},
    {name: `done`, label: `Выполненные`}
  ]
  render() {
    const {filter, onBtnClick} = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const classList = isActive ? `btn-info` : `btn-outline-secondary`;

      return (
        <button type="button"
        className={`btn ${classList}`}
        key={name}
        onClick={() => onBtnClick(name)}>{label}</button>
      )
    });

    return (
      <div className="btn-group item-status-filter mb-3" role="group" aria-label="Basic example">
        {buttons}
    </div>
    );
  }
};
