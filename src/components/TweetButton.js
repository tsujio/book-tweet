import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './TweetButton.css';

export default class TweetButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.book) {
      return null
    }

    const book = this.props.book
    const text = `"${book.volumeInfo.title}",` +
          ` ${(book.volumeInfo.authors || []).join(', ')},` +
          ` ${book.volumeInfo.publisher},` +
          ` ${book.volumeInfo.publishedDate}` +
          ` ${book.volumeInfo.previewLink}` +
          `\n#yonda https://www.tsujio.org`
    const url = `http://twitter.com/share?url=${encodeURIComponent(text)}`

    return (
      <Row>
        <Col>
          <Button variant="primary"
                  href={url}
                  block
                  target="_blank">この本をツイートする</Button>
        </Col>
      </Row>
    )
  }
}
