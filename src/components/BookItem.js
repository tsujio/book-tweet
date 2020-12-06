import React from 'react';
import './BookItem.css';

export default class BookItem extends React.Component {
  constructor(props) {
    super(props)
  }

  extractISBN(book) {
    if (!book.volumeInfo.industryIdentifiers) {
      return ""
    }
    return book.volumeInfo.industryIdentifiers
      .filter(v => v.type.match(/isbn/i))
      .reduce((v1, v2) => (v1.identifier.length > v2.identifier.length ? v1 : v2),
              {identifier: ""})
      .identifier
  }

  render() {
    if (!this.props.book) {
      return null
    }

    const book = this.props.book
    return (
      <div className="book">
        <div className="book-img-container">
          <img src={book.volumeInfo.imageLinks.smallThumbnail} />
        </div>
        <div>
          <span className="book-title">{book.volumeInfo.title}</span>
          <span className="book-authors">{(book.volumeInfo.authors || []).join(', ')}</span>
          <span className="book-publisher">{book.volumeInfo.publisher}</span>
          <span className="book-published-date">{book.volumeInfo.publishedDate}</span>
          <span className="book-isbn">{this.extractISBN(book)}</span>

        </div>
      </div>
    )
  }
}
