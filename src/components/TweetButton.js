import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { TwitterShareButton, TwitterIcon } from 'react-share';
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

    return (
      <Row>
        <Col>
          <TwitterShareButton url={text}>
            <div className="tweet-button">
              <div>
                <TwitterIcon size={48} round={true} />
              </div>
              <div>
                この本をツイートする
              </div>
            </div>
          </TwitterShareButton>
        </Col>
      </Row>
    )
  }
}
