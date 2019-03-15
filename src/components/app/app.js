import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component {

  constructor() {
    super();
    this.maxID = 100;
    this.state = {
      todoData: [
        // this.createTodoItem('Выпить чаёк'),
        // this.createTodoItem('Доделать приложение'),
        // this.createTodoItem('Лечь спать :('),
      ],
      
    };

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const newData = todoData.filter((data) => data.id !== id);
        return {
          todoData: newData
        }
      })
    };

    this.addItem = (text) => {
      const newItem = this.createTodoItem(text)
      this.setState(({ todoData }) => {
        const newData = [...todoData, newItem];
        return {
          todoData: newData
        };
      });
    }

    this.onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        const newData = todoData.map((item) => {
          if (item.id === id) {
            item.important = !item.important;
          }
          return item;
        });
        
        return {
          todoData: newData
        }     
      });
    };

    this.onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        const newData = todoData.map((item) => {
          if (item.id === id) {
            item.done = !item.done;
          }
          return item;
        });
        
        return {
          todoData: newData
        } 
      });
    };

    this.searchItems = (search) => {
      this.setState(({ todoData }) => {
        const newData = todoData.map((item) => {
          if (item.label.indexOf(search) === -1) {
            item.hide = true;
            return item;
          } else {
            item.hide = false;
            return item;
          }
        });
        return {
          todoData: newData
        }
      });
    };

    this.filterItems = (id) => {
      this.setState(({ todoData }) => {
        const newData = todoData.map((item) => {
          item.hide = false;
          switch (id) {
            case 'active':
              if (item.done) item.hide = true;
              break;
            case 'done':
              if (!item.done) item.hide = true;
              break;
            default:
              return item;
          }
          return item;
        });

        return {
          todoData: newData
        }
      });
    };
  }

  createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      hide: false,
      id: this.maxID++
    };
  };

  

  render = () => {

    const doneCount = this.state.todoData.filter((item) => item.done === true).length;
    const todoCount = this.state.todoData.filter((item) => item.done !== true).length;

    return (
      <div className="todo container mt-5">
        <div className="row justify-content-md-center">
          <div className="col-sm-12 col-md-8">
            <AppHeader 
              toDo = {todoCount}
              done = {doneCount}
            />
            <SearchPanel 
              searchItems = {this.searchItems}
              filterItems = {this.filterItems}
            />
            <TodoList 
              todos = {this.state.todoData}
              onDeleted = {this.deleteItem}
              onToggleImportant = {this.onToggleImportant}
              onToggleDone = {this.onToggleDone}
            />
            <AddItem 
              addItemInList = {this.addItem}
            />
          </div>  
        </div>
      </div>
    );
  }
};