import React from 'react';
import { OneResult } from './types';

type Props = {
  info: OneResult;
};

export class Planet extends React.Component<Props> {
  render(): React.ReactNode {
    const { name, orbital_period, climate, rotation_period } = this.props.info;
    return (
      <li className="card">
        <p>name:{name}</p>
        <p>orbital_period:{orbital_period}</p>
        <p>climate:{climate}</p>
        <p>rotation_period:{rotation_period}</p>
      </li>
    );
  }
}
