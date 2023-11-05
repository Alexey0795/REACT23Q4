import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export type PlanetInfo = {
  name: string;
  rotation_period: number | string;
  orbital_period: number | string;
  diameter: number | string;
  climate: string;
};

const defaultInfo: PlanetInfo = {
  name: '--',
  rotation_period: '--',
  orbital_period: '--',
  diameter: '--',
  climate: '--',
};

export function PlanetPage() {
  const [planetData, setplanetData] = useState<PlanetInfo>(defaultInfo);
  const [loading, setLoading] = useState<boolean>(false);
  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/planets?search=${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(`data.res: ${data.results[0]}`);
        setplanetData(data.results[0]);
        setLoading(false);
      });
  }, [name]);

  return (
    <>
      {loading && <p>Loading...</p>}
      <div key={planetData.name} id={planetData.name} className="planet">
        <p>name:{planetData.name}</p>
        <p>climate:{planetData.climate}</p>
        <p>orbital_period:{planetData.orbital_period}</p>
        <p>rotation_period:{planetData.rotation_period}</p>
        <Link to={`../`}>{'[x]'}</Link>
      </div>
    </>
  );
}
