import React from 'react';
import BookItem from './BookItem';

export default class SelectedBook extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <BookItem book={this.props.book} />
      </div>
    )
  }
}
