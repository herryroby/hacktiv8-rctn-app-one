import { Button } from 'antd';
import axios from 'axios';
import React from 'react';
import StarWarsDetail from '../../organisms/StarWarsDetail';
import './style.css';

const URL = 'https://swapi.dev/api/people/';

class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentUrlDetail: null,
    };
  }

  componentDidMount() {
    this.fetchData(URL);
  }

  fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      this.setState({
        data: res.data.results,
        currentUrlDetail: res.data.results[0].url,
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleClick = (person) => this.setState({ currentUrlDetail: person.url });

  render() {
    const { data, currentUrlDetail } = this.state;
    return (
      <>
        <div className="d-flex mb-50">
          <div className="text-center">
            <h1>Details</h1>
            {currentUrlDetail && <StarWarsDetail url={currentUrlDetail} />}
          </div>
          <div className="d-flex text-center">
            <h1>Star Wars</h1>
            {data.length > 0 ? (
              data.map((person) => (
                <Button type="link" key={person.name} onClick={() => this.handleClick(person)}>
                  <strong>{person.name}</strong>
                </Button>
              ))
            ) : (
              <div> Fetching Data... </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default StarWars;
