import React, {Component} from 'react';

import './item-add.css';

export default class ItemAdd extends Component {
  state = {
    label: ``
  };

  onLabelChange = (evt) => {
    const val = evt.target.value;

    this.setState({
      label: val
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();

    this.props.onAdded(this.state.label);
    this.setState({
      label: ``
    })
  }
  render() {
    return (
      <form className="item-add mt-3 d-flex"
            onSubmit={this.onSubmit}>
        <input type="text" 
              className="form-control"
              placeholder="Что нужно добавить?"
              onChange={this.onLabelChange}
              value={this.state.label}/>
        <button type="submit"
          className="btn btn-primary">Добавить</button>
      </form>
    );
  }
};
