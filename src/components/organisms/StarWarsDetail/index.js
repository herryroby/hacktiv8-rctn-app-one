import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  url: PropTypes.string.isRequired,
};

class StarWarsDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {},
    };
  }

  componentDidMount() {
    const { url } = this.props;
    this.fetchData(url);
  }

  componentDidUpdate(prevProps) {
    const { url } = this.props;
    if (url !== prevProps.url) {
      this.fetchData(url);
    }
  }

  fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      this.setState({ person: res.data });
    } catch (err) {
      console.error(err);
    }
  };

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
