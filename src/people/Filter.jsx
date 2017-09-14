import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setFilterQuery } from '../actions/people'

class Filter extends Component {
  static propTypes = {
    filterQuery: PropTypes.string.isRequired,
    setFilterQuery: PropTypes.func.isRequired
  };

  render() {
    const { filterQuery } = this.props;

    return (
      <div className='App-box'>
        <input value={filterQuery} onChange={(event) => this.props.setFilterQuery(event.target.value)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterQuery: state.people.filterQuery
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setFilterQuery
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
