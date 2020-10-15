import React from 'react';
import Ellipsis from '../general/Ellipsis';
import { IStarSystem, IStar, IPlanetoid, Distance, HeavenlyBodyType } from './IStarSystem'
import Section from '../playermanual/Section';
import Threejs from '../Threejs';

const StarSystem: React.FC<IStarSystem> = ({ stars, roguePlanetoids, name, description }) =>
    <>
        <h3>{name}</h3>
        <i>{description}</i>
        <Section title={`View ${name}`}>
            <Threejs starSystem={{ stars, roguePlanetoids, name, description }}  ></Threejs>
        </Section>
        {stars.map(star => <Star key={'star_' + star.name} star={star} />)}
        {roguePlanetoids.length > 0 ? roguePlanetoids.map(p => <Planet planet={p} gen={0} />) : null}

    </>;

interface IStarProps {
    star: IStar;
}
const Star: React.FC<IStarProps> = ({ star }) => <>
    <h4>{star.name} - {star.classification} class Star</h4>
    <div className="divcol2">
        <div>{star.description}</div>
        <div>
            <b>Mass: </b>{star.mass} solar masses<br />
            <b>age: </b>{star.age} billion years old
    </div>
    </div>
    {star.planetoids.map(planet => <Planet key={'plan_' + planet.name} planet={planet} gen={0} />)}
</>;
const descriptionCuttOff = 400;

interface IPlanetProps {
    planet: IPlanetoid;
    gen: number;
}
const Planet: React.FC<IPlanetProps> = ({ planet, gen }) => {
    if (planet.classification === 'rings') {
        return <>ring</>;
    }

    return <> {HGen(gen, `${planet.name} - ${planet.classification}`)}
        <div className="divcol2">
            <div><Ellipsis key={`${planet.name}${planet.classification}`} text={planet.description} cutOff={descriptionCuttOff} /></div>
            <div>
                <b>Surface gravity</b>: {planet.surfaceGravity}g<br />
                <b>Average temperature range</b>: {planet.temperatureRange[0]} - {planet.temperatureRange[2]}c<br />
                <b>Atmosphere</b>: {planet.atmosphericPressure > 0 ? `${floor4(planet.atmosphericPressure / 101.325)}x ea` : null} {planet.atmosphere}<br />
                <b>Hydrosphere</b>: {planet.hydrosphere}<br />
                <b>Distance</b>: {planet.orbitDistance.distance} {planet.orbitDistance.unit}<br />
                <b>Age</b>: {planet.age} billion years<br />
                <b>Mass</b>: {planet.mass} earths<br />
                {planet.feature && <><b>Feature</b>: {planet.feature}</>}
            </div>
        </div>
        {planet.imageURL && <Section title='view map'><img title='' alt='' src={planet.imageURL} className='planetImage' /></Section>}

        {planet.satelites.length > 0 ? <><b>Satelites/Features</b> <br /> {planet.satelites.map(sat => <Planet key={'sat_' + sat.name} planet={sat} gen={gen + 1} />)}</> : null}
    </>
};

const HGen = (gen: number, children: string) => {
    switch (gen) {
        case 0: return <h4>{children}</h4>;
        case 1: return <h5>{children}</h5>;
        default: return <h6>{children}</h6>;
    }
}

const floor4 = (n: number) => (Math.floor(n * 10) / 10).toPrecision(2);

export class PlanetRings implements IPlanetoid {
    classification = 'rings';
    surfaceGravity = 0;
    atmosphere = '';
    atmosphericPressure = 0;
    hydrosphere = '';
    satelites = [];
    temperatureRange: [number, number, number];
    orbitDistance: Distance;
    dayPeriod = 0;
    axialTilt = 0;
    age: number;
    mass: number;
    bodyType: HeavenlyBodyType = 'ring';
    name = '';
    description = '';
    constructor(orbitDistance: Distance, temperatureRange: [number, number, number], age: number, mass: number) {
        this.orbitDistance = orbitDistance;
        this.temperatureRange = temperatureRange;
        this.age = age;
        this.mass = mass;
    }
}

export default StarSystem;