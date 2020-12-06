import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookSearchForm from './components/BookSearchForm';
import BookSelector from './components/BookSelector';
import SelectedBook from './components/SelectedBook';
import TweetButton from './components/TweetButton';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      candidateBooks: [],
      selectedBook: null,
    }
    this.handleCandidateBooksUpdate = this.handleCandidateBooksUpdate.bind(this)
    this.handleBookSelect = this.handleBookSelect.bind(this)
  }

  handleCandidateBooksUpdate(candidateBooks) {
    this.setState({
      candidateBooks: candidateBooks,
      selectedBook: null,
    })
  }

  handleBookSelect(book) {
    this.setState({
      candidateBooks: [],
      selectedBook: book,
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <BookSearchForm onCandidateBooksUpdate={this.handleCandidateBooksUpdate} />
            <BookSelector candidateBooks={this.state.candidateBooks}
                          onSelect={this.handleBookSelect} />
            <SelectedBook book={this.state.selectedBook} />
            <TweetButton book={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    )
  }
}
