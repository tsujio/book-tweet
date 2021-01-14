import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { getTweetText } from '../lib/tweet';
import './TweetButton.css';

export default class TweetButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.book) {
      return null
    }

    const text = getTweetText(this.props.book)
    const url = `http://twitter.com/share?url=${encodeURIComponent(text)}`

    return (
      <Row>
        <Col>
          <Button className="tweet-button"
                  variant="primary"
                  href={url}
                  block
                  target="_blank">この本をツイートする</Button>
        </Col>
      </Row>
    )
  }
}
