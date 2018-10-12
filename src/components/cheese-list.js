import React from 'react';

export default class CheeseList extends React.Component {
  render() {
    const cheese = this.props.cheeses.map(cheese => {
      return <li>{cheese}</li>;
    });
    return <ul>{cheese}</ul>;
  }
}
