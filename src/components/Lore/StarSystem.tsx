import React from 'react';
import Ellipsis from '../Ellipsis';

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
    atmosphericPressure:number;
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
    <h4>{star.name} - {star.classification} class Star</h4>
    <div className="divcol2">
        <div>{star.description}</div>
        <div>
            <b>Mass: </b>{star.mass} solar masses<br />
            <b>age: </b>{star.age} billion years old
    </div>
    </div>

    {star.planetoids.map(planet => Planet(planet, 0))}
</>;
const descriptionCuttOff = 400;
const Planet = (planet: IPlanetoid, gen: number): JSX.Element => <> {HGen(gen, `${planet.name} - ${planet.classification}`)}
    <div className="divcol2">
        <div><Ellipsis text={planet.description} cutOff={descriptionCuttOff} /></div>
        <div>
            <b>Surface gravity</b>: {planet.surfaceGravity}g<br />
            <b>Average temperature range</b>: {planet.temperatureRange}c<br />
            <b>Atmosphere</b>: {planet.atmosphericPressure > 0 ? `${floor4(planet.atmosphericPressure/101.325)}x ea` : null } {planet.atmosphere}<br />
            <b>Hydrosphere</b>: {planet.hydrosphere}<br />
            <b>Distance</b>: {planet.orbitDistance}<br />
            <b>Age</b>: {planet.age} billion years<br />
            <b>Mass</b>: {planet.mass} earths<br />
            {planet.feature && <><b>Feature</b>: {planet.feature}</>}
        </div>
    </div>
    {planet.satelites.length > 0 ? <><b>Satelites</b> <br /> {planet.satelites.map(sat => Planet(sat, gen + 1))}</> : null}
</>;

const cropOrAll = (text:string, length:number) => {
    if (text.length >= length) return text.substr(0,length);
    else return text;
}

const HGen = (gen: number, children: string) => {
    switch (gen) {
        case 0: return <h4>{children}</h4>;
        case 1: return <h5>{children}</h5>;
        default: return <h6>{children}</h6>;
    }
}

const floor4 = (n:number) => (Math.floor(n*10)/10).toPrecision(2);


export default StarSystem;