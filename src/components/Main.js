import './Main.css';

import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Make coffee',
      'Drink watter',
      'Study React'
    ]
  }

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Todo List</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {
            tasks.map((task) => (
              <li key={task}>
                {task}

                <div>
                  <FaEdit className="edit" />
                  <FaWindowClose className="delete" />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
