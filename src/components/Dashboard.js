import React, { Fragment } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Dashboard = () => {
  return (
    <Fragment>
      <BookList />
      <BookForm />
    </Fragment>
  );
};

export default Dashboard;
