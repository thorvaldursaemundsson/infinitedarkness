import React, { CSSProperties } from 'react';
import Section from '../playermanual/Section';

interface IHeavelyBody {

    mass: number;
    age: number;
    name: string;
    description: string;
}

interface IStarSystem {
    stars: IStar[];
    roguePlanetoids: IPlanetoid[];
    name: string;
    description: string;
}

interface IStar extends IHeavelyBody {
    classification: 'A' | 'F' | 'G' | 'K' | 'M';
    planetoids: IPlanetoid[];
}

interface IPlanetoid extends IHeavelyBody {
    classification: string;
    surfaceGravity: number;
    temperatureRange: string;
    atmosphere: string;
    hydrosphere: string;
    satelites: IPlanetoid[];
    orbitDistance: string;
    feature?: string;
}

const StarSystem: React.FC<IStarSystem> = ({ stars, roguePlanetoids, name, description }) =>
    <>
        <h3>{name}</h3>
        <i>{description}</i>
        {stars.map(star => Star(star))}
    </>;

const Star = (star: IStar) => <>
    <h4>{star.name} - {star.classification} class</h4>
    <p>{star.description}</p>
    <Section title='info'>
        <b>Mass: </b>{star.mass} solar masses<br />
        <b>age: </b>{star.age} billion years old
    </Section>
    {star.planetoids.map(planet => Planet(planet))}
</>;

const Planet = (planet: IPlanetoid): JSX.Element => <> <h4>{planet.name} - {planet.classification}</h4>
    <p>{planet.description}</p>
    <Section title='info'>
        <b>Surface gravity</b>: {planet.surfaceGravity}g<br />
        <b>Average temperature range</b>: {planet.temperatureRange}g<br />
        <b>Atmosphere</b>: {planet.atmosphere}<br />
        <b>Hydrosphere</b>: {planet.hydrosphere}<br />
        <b>Distance</b>: {planet.orbitDistance}<br />
        <b>Age</b>: {planet.age} billion years<br />
        <b>Mass</b>: {planet.mass} earths<br />
        {planet.feature && <><b>Feature</b>: {planet.feature}</>}
    </Section>
    {planet.satelites.length > 0 ? <><b>Satelites</b><br />{planet.satelites.map(sat => Satelite(sat))}</> : null}
</>;

const Satelite = (planet: IPlanetoid): JSX.Element => <> <h5>{planet.name} - {planet.classification}</h5>
    <p>{planet.description}</p>
    <Section title='info'>
        <b>Surface gravity</b>: {planet.surfaceGravity}g<br />
        <b>Average temperature range</b>: {planet.temperatureRange}g<br />
        <b>Atmosphere</b>: {planet.atmosphere}<br />
        <b>Hydrosphere</b>: {planet.hydrosphere}<br />
        <b>Distance</b>: {planet.orbitDistance}<br />
        <b>Age</b>: {planet.age} billion years<br />
        <b>Mass</b>: {planet.mass} earths<br />
        {planet.feature && <><b>Feature</b>: {planet.feature}</>}
    </Section>
    {planet.satelites.length > 0 ? <><b>Satelites</b><br />{planet.satelites.map(sat => Satelite(sat))}</> : null}
</>;

export default StarSystem;