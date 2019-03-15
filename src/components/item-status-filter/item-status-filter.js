import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  render() {

    const { filterItems, btn } = this.props;
    return (
        <input type = 'radio'
        name = 'filter'
        id = { btn.id }
        defaultChecked = { btn.defaultChecked }
        onClick = {filterItems}
        />
        
    );   
  }
  
};