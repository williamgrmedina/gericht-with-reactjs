import React from 'react';
import { SubHeading } from '../../components';
import Form from 'react-bootstrap/Form';
import { IoIosArrowDown } from 'react-icons/io';

import './BookTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const BookTable = () => (
  <div className="app__booktable flex__center section__padding" id='booktable'>
    <div className='app__box app__wrapper-sm'>
      <div className='app__booktable-title'>
        <SubHeading title="Reservations" ></SubHeading>
        <h1 className='headtext__cormorant'>Book a Table</h1>
      </div>
      <div className='booktable__options'>
        <Form.Select size="lg" className='custom-select'>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <IoIosArrowDown className='booktable__options-dropdown_arrow' />
        <Form.Select size="lg" className='custom-select'>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select size="lg" className='custom-select'>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div style={{ marginBottom: '3rem' }}>
        <button type='button' className='custom__button'>Book Now</button>
      </div>
    </div>
  </div>
);

export default BookTable;
