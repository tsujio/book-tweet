import React from 'react';
import BookItem from './BookItem';
import './SelectedBook.css';

export default class SelectedBook extends React.Component {
  constructor(props) {
    super(props)
  }

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
