import './Main.css';

import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: []
  }

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    this.setState({
      tasks: [
        ...newTasks
      ]
    });
  }
  
  handleEdit = (event, index) => {

  }

  handleSubmit = (event) => {
    event.preventDefault();

    let { newTask, tasks } = this.state;

    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    this.setState({
      tasks: [
        ...newTasks,
        newTask
      ],
      newTask: ''
    });
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Todo List</h1>

        <form action="#" className="form" onSubmit={this.handleSubmit}>
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
            tasks.map((task, index) => (
              <li key={task}>
                {task}

                <span>
                  <FaEdit onClick={(event) => this.handleEdit(event, index)} className="edit" />
                  <FaWindowClose onClick={(event) => this.handleDelete(event, index)} className="delete" />
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
