import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {

  constructor() {
    super();

    this.state = {
      label: ''
    }

    this.onLabelChange = (event) => {
      this.setState({   
        label: event.target.value
      }) 
      
    };

    this.onSubmit = (event) => {
      event.preventDefault();
      this.props.addItemInList(this.state.label);
      this.setState({
        label: ''
      });
    };
  }

  render() {
    return (
      <form className='add-item d-flex mt-3'
            onSubmit = {this.onSubmit}>

        <input
          type="text"
          className='form-control'
          onChange = {this.onLabelChange}
          placeholder = "Новая задача"
          value = {this.state.label}
          />
        <button
          className='btn btn-primary ml-3'
          ><i className="fa fa-plus-circle"></i>
        </button>
      </form>
    );
  }
}
