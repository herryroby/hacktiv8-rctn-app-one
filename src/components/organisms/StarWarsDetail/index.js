import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  person: PropTypes.object.isRequired,
};

class StarWarsDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {},
    };
  }

  componentDidMount() {
    const { person } = this.props;
    this.setState({ person });
  }

  componentDidUpdate(prevProps) {
    const { person } = this.props;
    if (person.name !== prevProps.person.name) {
      this.setState({ person }); // eslint-disable-line
    }
  }

  render() {
    const { person } = this.state;
    return (
      <>
        <p>
          <strong>Name:</strong> {person.name}
        </p>
        <p>
          <strong>Height:</strong> {person.height}
        </p>
        <p>
          <strong>Mass:</strong> {person.mass}
        </p>
        <p>
          <strong>Hair Color:</strong> {person.hair_color}
        </p>
      </>
    );
  }
}

StarWarsDetail.propTypes = propTypes;

export default StarWarsDetail;
