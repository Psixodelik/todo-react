import React, { Component } from 'react';
import './todo-list-item.css';



export default class TodoListItem extends Component {

  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important,
    } = this.props;

    const importantStyle = important 
      ? 'todo-list-item__label text-primary font-weight-bold' 
      : 'todo-list-item__label';

    let classNames = 'todo-list-item d-flex justify-content-between align-items-center';

    if (done) {
      classNames += ' todo-list-item--done';
    }

    return (
      <div className={ classNames }>
          <span className={importantStyle} onClick={ onToggleDone }>{ label }</span>
        <div className="btn-group align-self-end">
          <button 
            className="btn btn-outline-primary mr-1" 
            onClick={ onToggleImportant }>
              <i className="fa fa-exclamation"></i>
          </button>
          <button className="btn btn-outline-danger"
            onClick = {onDeleted}>
              <i className="fa fa-trash-o"></i>
            </button>
        </div>
      </div>
    );
  }

}