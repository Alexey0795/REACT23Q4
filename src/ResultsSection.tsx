import { OneResult } from './types.ts';

type Props = {
  planets: OneResult[];
};

export function ResultsSection(props: Props) {
  return (
    <ul className="list">
      {props.planets.map((planetData) => (
        <li key={planetData.name} id={planetData.name} className="card">
          <p>name:{planetData.name}</p>
          <p>climate:{planetData.climate}</p>
          <p>orbital_period:{planetData.orbital_period}</p>
          <p>rotation_period:{planetData.rotation_period}</p>
        </li>
      ))}
    </ul>
  );
}
