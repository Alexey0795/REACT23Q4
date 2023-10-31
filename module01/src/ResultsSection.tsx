import { Component } from 'react';
import { OneResult } from './types.ts';
import { Planet } from './Planet.tsx';

type Props = {
  planets: OneResult[];
};

export class ResultsSection extends Component<Props> {
  render() {
    return (
      <section id="scnd">
        <ul className="list">
          {this.props.planets.map((planetData) => (
            <Planet info={planetData} />
          ))}
        </ul>
      </section>
    );
  }
}
