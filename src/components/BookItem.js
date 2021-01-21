import React from 'react';
import { parseSalesDate } from '../lib/tweet';
import './BookItem.css';

export default class BookItem extends React.Component {
  render() {
    if (!this.props.book) {
      return null
    }

    const book = this.props.book
    return (
      <div className="book">
        <div className="book-img-container">
          <img src={book.mediumImageUrl} alt={book.title} />
        </div>
        <div>
          <span className="book-title">{book.title}</span>
          <span className="book-authors">{book.author}</span>
          <span className="book-publisher">{book.publisherName}</span>
          <span className="book-published-date">{parseSalesDate(book.salesDate).slice(0, 2).filter(v => v).join('/')}</span>
          <span className="book-isbn">{book.isbn}</span>
        </div>
      </div>
    )
  }
}
