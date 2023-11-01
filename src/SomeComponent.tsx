import React from 'react';
import { ResultsSection } from './ResultsSection';
import { OneResult } from './types';

type State = {
  textInput: string;
  planets: OneResult[];
  loading: boolean;
};
class SomeComponent extends React.Component<unknown, State> {
  state = {
    textInput: '',
    planets: [],
    loading: false,
  };

  readStorage = (): string => {
    console.log('Read');
    const value = localStorage.getItem('searchText') || false;
    return value ? JSON.parse(value) : '';
  };

  writeStorage = (): void => {
    console.log('Write');
    localStorage.setItem('searchText', JSON.stringify(this.state.textInput));
  };

  getInfo = (params: string): void => {
    console.log(`getInfo: ${params}`);
    this.setState({ loading: true });
    fetch(`https://swapi.dev/api/planets${params}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ planets: data.results, loading: false });
      });
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(`onInputChange: ${event.target.value}`);
    console.log(`change.this: ${this}`);
    this.setState({ textInput: event.target.value });
    console.log(`change.state.text.after: ${this.state.textInput}`);
  };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log('onFormSubmit');
    event.preventDefault();
    this.writeStorage();
    this.getInfo(`?search=${this.state.textInput}`);
  };

  clickHandle = (): void => {
    console.log('Throw');
    this.setState({ textInput: '-1' });
    throw new Error('Fake error');
  };

  componentWillUnmount = () => {
    console.log('WillUnmount');
  };

  componentDidUpdate = () => {
    console.log(`DidUpdate.state: ${this.state.textInput}`);
    this.writeStorage();
  };

  componentDidMount = () => {
    console.log('DidMount');
    const value = this.readStorage();
    console.log(`mount.value: ${value}`);
    if (value == '') {
      this.getInfo('?page=1');
    } else if (value !== '--') {
      this.setState({ textInput: value });
      this.getInfo(`?search=${value}`);
    }
  };

  render() {
    console.log('Render');
    return (
      <>
        <section id="frst" className="search-bar">
          <form id="aform" onSubmit={this.onFormSubmit}>
            <label id="afield">Search: </label>
            <input
              type="text"
              value={this.state.textInput}
              onChange={this.onInputChange}
              placeholder="id"
            />
            <button type="submit">Find</button>
          </form>
        </section>

        {this.state.loading && <p>Loading...</p>}

        <ResultsSection planets={this.state.planets} />
        <button onClick={this.clickHandle}>test err</button>
      </>
    );
  }
}

export default SomeComponent;
