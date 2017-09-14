import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class People extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    filterQuery: PropTypes.string.isRequired
  };

  renderPeople = () => {
    const { people, filterQuery } = this.props;
    const regexp = new RegExp(filterQuery, 'i');

    const filteredPeople = people.filter((person) => person.name.match(regexp));

    return filteredPeople.map((person) => (
      <div className='App-box' key={person.id}>
        {person.name}
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderPeople()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  people: state.people.people,
  filterQuery: state.people.filterQuery
});

export default connect(mapStateToProps)(People);
