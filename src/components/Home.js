import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import React from 'react';

const home = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='blackLayoutLinear'></div>
        <div
          id='qwe'
          className='wrapper_content'
        >
          <NavLink
            to='/creationCV'
            className='list-of-item'
          >
            <Button
              id='bt'
              variant='contained'
              color='primary'
            >
              Create
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default home;
