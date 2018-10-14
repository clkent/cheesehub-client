import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const cheeseList = this.props.cheeses.map((cheese, index) => {
      return <li key={index}>{cheese}</li>;
    });
    return <ul>{cheeseList}</ul>;
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(CheeseList);
