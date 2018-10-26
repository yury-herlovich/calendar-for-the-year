import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form';
import Input from '../Form/Input';
import Checkbox from '../Form/Checkbox';
import Button from '../Form/Button';

import './AddEditForm.css';

const AddEditForm = ({eventData, year, handleSubmit, handleInputChange}) => (
  <Form handleSubmit={handleSubmit} className="form add-edit-form">
    <div className='form-group'>
      <Input
        type='text'
        name='title'
        placeholder='Add title'
        value={eventData.title}
        handleChange={handleInputChange} />
    </div>

    <div className='form-group'>
      <Input
        type='date'
        name='startDate'
        value={eventData.startDate}
        handleChange={handleInputChange} />

      { !eventData.allDay &&
        <Input
          type='time'
          name='startTime'
          value={eventData.startTime}
          handleChange={handleInputChange} />
      }

      &nbsp;-&nbsp;

      <Input
        type='date'
        name='endDate'
        value={eventData.endDate}
        handleChange={handleInputChange} />

      { !eventData.allDay &&
        <Input
          type='time'
          name='endTime'
          value={eventData.endTime}
          handleChange={handleInputChange} />
      }
    </div>

    <div className="form-group">
      <Checkbox name="allDay" value={eventData.allDay} handleChange={handleInputChange} />
      <label htmlFor="allDay">All day</label>
    </div>

    <div className="form-buttons form-group">
      <Button name='submit' text='Save' handleClick={handleSubmit} />
      <Link to={'/year/' + year}>
        <Button name='cancel' text='Cancel' />
      </Link>
    </div>
  </Form>
);

export default AddEditForm;