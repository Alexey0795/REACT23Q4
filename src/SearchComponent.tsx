import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ResultsSection } from './ResultsSection';
import { PlanetInfo } from './PlanetPage';

export function SearchComponent() {
  const [textInput, setTextInput] = useState<string>('');
  const [planets, setPlanets] = useState<PlanetInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let value: string = localStorage.getItem('searchText') || '';
    value = value ? JSON.parse(value) : '';

    setTextInput(value);
    setLoading(true);
    getInfo(value);
    setLoading(false);
  }, []);

  const getInfo = (value: string): void => {
    let params: string = '';

    if (value == '') {
      params = '?page=1';
    } else if (value !== '--') {
      params = `?search=${value}`;
    }

    console.log(`getInfo: ${params}`);
    fetch(`https://swapi.dev/api/planets${params}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data.results);
      });
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTextInput(event.target.value);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    localStorage.setItem('searchText', JSON.stringify(textInput));
    setLoading(true);
    getInfo(textInput);
    setLoading(false);
  };

  const onClickError = (): void => {
    console.log('Throw');
    throw new Error('Fake error');
  };

  console.log('Render');
  return (
    <div id="app-container">
      <div id="side-left">
        <section id="frst" className="search-bar">
          <button className="errbtn" onClick={onClickError}>
            test err
          </button>

          <form id="aform" onSubmit={onFormSubmit}>
            <label id="afield">Search: </label>
            <input
              type="text"
              value={textInput}
              onChange={onInputChange}
              placeholder="id"
            />
            <button type="submit">Find</button>
          </form>
        </section>

        {loading && <p>Loading...</p>}

        <section id="scnd">
          <ResultsSection planets={planets} />
        </section>
      </div>

      <div id="side-right">
        <Outlet />
      </div>
    </div>
  );
}
