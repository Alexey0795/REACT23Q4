import React, { ReactNode } from 'react';

type OneResult = {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
};

class SomeComponent extends React.Component {
  state = {
    text: '',
    info: {
      name: '--',
      rotation_period: '--',
      orbital_period: '--',
      diameter: '--',
      climate: '--',
    },
  };

  readStorage = () => {
    console.log('Read');
    return JSON.parse(localStorage.getItem('searchText') || '{}');
  };

  writeStorage = () => {
    console.log('Write');
    localStorage.setItem('searchText', JSON.stringify(this.state));
  };

  getInfo = (id: number) => {
    console.log('getInfo');
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ info: data }));
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onInputChange');
    this.setState({ text: event.target.value });
  };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('onFormSubmit');
    event.preventDefault();
    this.getInfo(+this.state.text);
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
    console.log(this.state.info);
  }

  componentDidMount() {
    console.log('Mount');
    this.getInfo(this.readStorage());
  }

  render() {
    console.log('Render');

    return (
      <>
        <section className="search-bar">
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

        <section className="results card">
          <p>name:{this.state.info.name}</p>
          <p>orbital_period:{this.state.info.orbital_period}</p>
          <p>climate:{this.state.info.climate}</p>
          <p>rotation_period:{this.state.info.rotation_period}</p>
        </section>

        <button onClick={this.clickHandle}>test err</button>
      </>
    );
  }
}

export default SomeComponent;
