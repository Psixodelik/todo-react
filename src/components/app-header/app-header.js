import React from 'react';
import './app-header.css';

const AppHeader = ({ toDo, done }) => {
  return (
    <header>
      <div className="d-md-flex justify-content-md-between justify-content-sm-center align-items-center">
        <h1>Список дел</h1>
        <div className="status d-flex">
          <div className="active-status badge badge-primary p-3 mr-2">Активных: {toDo}</div>
          <div className="done-status badge badge-success p-3">Завершено: {done}</div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;