import React from 'react';
import BookItem from './BookItem';
import './SelectedBook.css';

export default class SelectedBook extends React.Component {
  render() {
    if (!this.props.book) {
      return null
    }

    return (
      <div className="selected-book">
        <BookItem book={this.props.book} />
      </div>
    )
  }
}
