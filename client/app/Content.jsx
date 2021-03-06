import React, {Component} from 'react';
import MapArea from './MapArea';
import Spinner from './Spinner';
import Endpoint from './Endpoint';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    };
  }

  componentDidMount() {
    setInterval(() => this.getVehicles(), 3000);
  }

  getVehicles() {
    const reqConfig = {
      method: 'GET',
      mode: 'cors'
    };

    fetch(`${Endpoint}/vehicles`, reqConfig)
      .then(res => res.json())
      .then(data => {
        this.setState({vehicles: data});
      })
      .catch(err => console.error('Error: ', err));
  }

  render() {
    let child;
    if (this.state.vehicles.length) {
      child = <MapArea vehicles={this.state.vehicles} />;
    } else {
      child = <Spinner />;
    }

    return <div>{child}</div>;
  }
}

export default Content;
