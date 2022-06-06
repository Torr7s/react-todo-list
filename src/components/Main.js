import './Main.css';

import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1
  }

  /* Called as soon as a component is mounted */
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks.length) return;

    this.setState({ tasks });
  };

  /* Callend as soon as a component is updated */
  componentDidUpdate(previousProps, previousState) {
    const { tasks } = this.state;

    if (tasks === previousState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  };

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    this.setState({
      tasks: [
        ...newTasks
      ]
    });
  };

  handleEdit = (event, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index]
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let { newTask, tasks, index } = this.state;

    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [
          ...newTasks,
          newTask
        ],
        newTask: ''
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1
      })
    }
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
  };
}
