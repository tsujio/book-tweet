import React from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './BookSearchForm.css';

export default class BookSearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.value.length <= 0) {
      this.props.onCandidateBooksUpdate(null)
      return
    }

    fetch('https://www.googleapis.com/books/v1/volumes?q=' +
          encodeURIComponent(this.state.value))
      .then(response => response.json())
      .then(data => this.props.onCandidateBooksUpdate(data))
  }

  render() {
    return (
      <Form className="book-search-form" onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl placeholder="本を検索します"
                       value={this.state.value}
                       onChange={this.handleChange} />
          <InputGroup.Append>
            <Button variant="primary" type="submit"><Search /></Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    )
  }
}
