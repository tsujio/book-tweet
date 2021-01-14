import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { CardText } from 'react-bootstrap-icons';
import { getTweetText } from '../lib/tweet';
import './TweetTextCopyButton.css';

export default class TweetTextCopyButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(getTweetText(this.props.book))
    }
  }

  render() {
    if (!this.props.book) {
      return null
    }

    return (
      <Row>
        <Col>
          <Button className="tweet-text-copy-button"
                  variant="light"
                  onClick={this.handleClick}><CardText /></Button>
        </Col>
      </Row>
    )
  }
}
