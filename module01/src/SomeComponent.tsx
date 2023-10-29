import React from 'react';
import { ResultsSection } from './ResultsSection';
import { OneResult } from './types';

type State = {
  text: string;
  planets: OneResult[];
};
class SomeComponent extends React.Component {
  state = {
    text: '',
    planets: [],
  };

  readStorage = () => {
    console.log('Read');
    return JSON.parse(localStorage.getItem('searchText') || '{}');
  };

  writeStorage = () => {
    console.log('Write');
    localStorage.setItem('searchText', JSON.stringify(this.state.text));
  };

  getInfo = () => {
    console.log('getInfo');
    fetch(`https://swapi.dev/api/planets/`)
      .then((res) => res.json())
      .then((data) => this.setState({ planets: data.results }));
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onInputChange');
    this.setState({ text: event.target.value });
  };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('onFormSubmit');
    event.preventDefault();    
  };

  clickHandle = () => {
    console.log('Throw');
    this.setState({ text: '-1' });
    throw new Error('Fake error');
  };

  componentWillUnmount() {
    this.writeStorage();
  }

  componentDidUpdate() {
    console.log('Update');
    this.writeStorage();
  }

  componentDidMount() {
    console.log('Mount');
    this.readStorage();
    this.getInfo();
  }

  render() {
    console.log('Render');

    return (
      <>
        <section id='frst' className="search-bar">
          <form id="aform" onSubmit={this.onFormSubmit}>
            <label id="afield">Search: </label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.onInputChange}
              placeholder="id"
            />
            <button type="submit">Find</button>
          </form>
        </section>

        <ResultsSection planets={this.state.planets}/>

        <button onClick={this.clickHandle}>test err</button>
      </>
    );
  }
}

export default SomeComponent;
