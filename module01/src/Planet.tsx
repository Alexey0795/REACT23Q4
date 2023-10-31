import React from 'react';
import { OneResult } from './types';

type Props = {
  info: OneResult;
};

export class Planet extends React.Component<Props> {
  render() {
    const { name, orbital_period, climate, rotation_period } = this.props.info;
    return (
      <li className="card">
        <p>name:{name}</p>
        <p>climate:{climate}</p>
        <p>orbital_period:{orbital_period}</p>
        <p>rotation_period:{rotation_period}</p>
      </li>
    );
  }
}
