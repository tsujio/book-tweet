import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CandidateBook from './CandidateBook';
import './BookSelector.css';

export default class BookSelector extends React.Component {
  render() {
    if (this.props.candidateBooks.length <= 0) {
      return null
    }
    const books = this.props.candidateBooks.Items.map((item, i) => {
      return (
        <ListGroup.Item className="candidate-books-item">
          <CandidateBook book={item.Item}
                         onClick={this.props.onSelect} />
        </ListGroup.Item>
      )
    })
    return (
      <ListGroup>
        {books}
      </ListGroup>
    )
  }
}
