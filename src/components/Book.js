/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import progressImage from '../images/progress-icon.png';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="book font2">
      <text className="category font1">{category}</text>
      <h2 className="title">{title}</h2>
      <h3 className="author">{author}</h3>
      <button className="delete" type="button" onClick={deleteBook} value={id}>Delete</button>

      <div className="status-container">
        <dt className="prog-report">
          <img src={progressImage} className="prog-image" alt="progress-icon" />
          <div className="status">
            <dl className="percent">85%</dl>
            <dl className="complete">Completed</dl>
          </div>
        </dt>

        <dt className="chapter-container">
          <dl className="chapter">CURRENT CHAPTER</dl>
          <dl className="topic">Chapter 8</dl>
          <button className="prog-btn" type="button">UPDATE PROGRESS</button>
        </dt>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
