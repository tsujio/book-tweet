import React from 'react';
import { Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CardText } from 'react-bootstrap-icons';
import { getTweetText } from '../lib/tweet';
import './TweetTextCopyButton.css';

export default class TweetTextCopyButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tooltipShown: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleTooltipToggle = this.handleTooltipToggle.bind(this)
  }

  handleClick(event) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(getTweetText(this.props.book))
    }
  }

  handleTooltipToggle(show) {
    this.setState({tooltipShown: show})
    setTimeout(() => {
      this.setState({tooltipShown: false})
    }, 1000)
  }

  render() {
    if (!this.props.book) {
      return null
    }

    return (
      <Row>
        <Col>
          <OverlayTrigger placement="bottom"
                          trigger="click"
                          show={this.state.tooltipShown}
                          onToggle={this.handleTooltipToggle}
                          overlay={(props) => (
                            <Tooltip {...props}>Copied</Tooltip>
                          )}>
            <Button className="tweet-text-copy-button"
                    variant="light"
                    onClick={this.handleClick}><CardText /></Button>
          </OverlayTrigger>
        </Col>
      </Row>
    )
  }
}
