import React from 'react';
import BookItem from './BookItem';
import './CandidateBook.css';

export default class CandidateBook extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick(this.props.book)
  }

  render() {
    return (
      <div className="candidate-book" onClick={this.handleClick}>
        <BookItem book={this.props.book} />
      </div>
    )
  }
}
