import React, { Component } from 'react';
import './search-panel.css';

import ItemStatusFilter from '../item-status-filter';

export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      btn: [
        {label: 'Все', id: 'all', defaultChecked: true, className: 'btn btn-primary'},
        {label: 'Активные', id: 'active', defaultChecked: false, className: 'btn btn-secondary'},
        {label: 'Завершённые', id: 'done', defaultChecked: false, className: 'btn btn-secondary'},
      ],
    };

    this.onChangeSearch = (event) => {
      event.preventDefault();
      console.log();
      this.setState({
        search: event.target.value
      });
      this.props.searchItems(event.target.value);
    };

    this.clickButton = (event) => {
      const id = event.target.id;
      this.props.filterItems(id);
      this.setState(({ btn }) => {
        const newData = btn.map((item) => {
          item.className = 'btn btn-secondary';
          if (item.id === id) {
            item.className = 'btn btn-primary';
          }

          return item;
        });

        return {
          btn: newData
        }
      });
    }

  };

  render() {
    const btnElements = this.state.btn.map((btnItem) => {
      return (
        <label className={ btnItem.className } key = {btnItem.id}>
          <ItemStatusFilter 
            filterItems = { this.clickButton  }
            btn = { btnItem }        
          />
        { btnItem.label }
      </label>
      ); 
    });

    return (
      <div className="mb-3 mt-3">
        <div className="justify-content-between d-md-flex align-items-center">
          <input 
            className="form-control col"
            type="text"
            placeholder="Найти задачу"
            value = {this.state.search}
            onChange = {this.onChangeSearch}
          />
          <div className="btn-group btn-group-toggle ml-3 mt-3" data-toggle="buttons">
            { btnElements }
          </div>
        </div>  
      </div> 
    );
  };
};