import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookSearchForm from './components/BookSearchForm';
import BookSelector from './components/BookSelector';
import SelectedBook from './components/SelectedBook';
import TweetButton from './components/TweetButton';
import TweetTextCopyButton from './components/TweetTextCopyButton';
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
    if (!candidateBooks) {
      this.setState({
        candidateBooks: [],
        selectedBook: null,
      })
    } else {
      this.setState({
        candidateBooks: candidateBooks,
        selectedBook: null,
      })
    }
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
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="header">
              <h1>本をよむよむ会</h1>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <BookSearchForm onCandidateBooksUpdate={this.handleCandidateBooksUpdate} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <BookSelector candidateBooks={this.state.candidateBooks}
                          onSelect={this.handleBookSelect} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <SelectedBook book={this.state.selectedBook} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={6}>
            <TweetButton book={this.state.selectedBook} />
          </Col>
          <Col xs={2} md={1} lg={1}>
            <TweetTextCopyButton book={this.state.selectedBook} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="footer">
              <span>&copy; <a href="https://www.tsujio.org">辻尾研</a></span>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
