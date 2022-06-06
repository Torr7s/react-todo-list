import './Tasks.css';

import React from 'react';
import PropTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tasks({ handleEdit, handleDelete, tasks }) {
  return (
    <ul className="tasks">
      {
        tasks.map((task, index) => (
          <li key={task}>
            {task}

            <span>
              <FaEdit
                className="edit"
                onClick={
                  (event) => handleEdit(event, index)
                }
              />

              <FaWindowClose
                className="delete"
                onClick={
                  (event) => handleDelete(event, index)
                }
              />
            </span>
          </li>
        ))
      }
    </ul>
  )
}

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired 
}