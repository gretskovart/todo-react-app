import React, {Component} from 'react';

import './search-panel.css';

export default class extends Component {
  state= {
    term: ``
  };

  onSearchChange = (evt) => {
    const term = evt.target.value;

    this.setState({term});
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <div className="search-panel active-purple-4">
        <input className="form-control"
        type="text"
        placeholder="Введите что-нибудь для поиска"
        onChange={this.onSearchChange}
        value={this.state.term}/>
      </div>
    );
  };
};