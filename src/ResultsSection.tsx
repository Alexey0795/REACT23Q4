import { Link } from 'react-router-dom';
import { PlanetInfo } from './PlanetPage';

type Props = {
  planets: PlanetInfo[];
};

export function ResultsSection(props: Props) {
  return (
    <ul className="list">
      {props.planets.map((planetData) => (
        <li key={planetData.name} id={planetData.name} className="card">
          <span>{planetData.name}</span>
          <Link to={`planets/${planetData.name}`}>{'>>>'}</Link>
        </li>
      ))}
    </ul>
  );
}
