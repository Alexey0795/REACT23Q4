import { OneResult } from './types';

type Props = {
  key: string;
  id: string;
  info: OneResult;
};

export function PlanetCard(props: Props) {
  const { name, orbital_period, climate, rotation_period } = props.info;
  return (
    <li id={props.id} className="card">
      <p>name:{name}</p>
      <p>climate:{climate}</p>
      <p>orbital_period:{orbital_period}</p>
      <p>rotation_period:{rotation_period}</p>
    </li>
  );
}
