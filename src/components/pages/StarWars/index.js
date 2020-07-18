import axios from 'axios';
import React from 'react';
import StarWarsDetail from '../../organisms/StarWarsDetail';
import ErrorHandler from '../../templates/ErrorHandler';
import './style.css';

class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      person: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://swapi.dev/api/people/')
      .then((res) => {
        this.setState({
          data: res.data.results,
          person: res.data.results[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick = (person) => this.setState({ person });

  render() {
    const { data, person: personData } = this.state;
    return (
      <>
        <ErrorHandler>
          <div className="d-flex mb-50">
            <div className="text-center">
              <h2>Details</h2>
              <StarWarsDetail person={personData} />
            </div>
            <div className="d-flex text-center">
              <h2>Star Wars</h2>
              {data.length > 0 ? (
                data.map((person) => (
                  <div
                    role="presentation"
                    className="list-person"
                    key={person.name}
                    onClick={() => this.handleClick(person)}
                  >
                    {person.name}
                  </div>
                ))
              ) : (
                <div> Fetching Data... </div>
              )}
            </div>
          </div>
        </ErrorHandler>
      </>
    );
  }
}

export default StarWars;
