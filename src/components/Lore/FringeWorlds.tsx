import React from 'react';
import StarSystem from './StarSystem';
import Section from '../playermanual/Section';

const FringeWorlds = () => <>
    <h2>Fringe worlds</h2>
    <p>These systems are colonized by humans and are completely self sufficient, but they are also highly isolated and most people who live there have live harsh lives</p>
    <Section title='Ashra'><Ashra /> </Section>
    <Section title='Tonati'><Tonati /> </Section>
</>;



const Tonati = () => <>
    <h3>Star System Tonati</h3>
    <i>One of many fringe worlds, Tonati considerably advanced with two habitable planets</i>
    <h4>Tonati</h4>
    <p>Tonati is a blue white F class main sequence star, intense radiation makes the innermost part of the system mostly inaccessible. With a staggering luminosity of 15 times that of the Sun also means that the zone of habitabilty is much larger and farther out.</p>
    <h5>Chantico</h5>
    <p>Barren rocky metallic planet, smoldering radioactive hellscape under the Tonati sun, rivers of magma flow across the surface that is never able to cool down. Average temperature of 1000 - 1300 celsius</p>
    <h5>Teylaloc</h5>
    <p>Large rocky planet with a powerful magnetic field to protect it from the intense solar radiation. Constant thunderstorms and rains of molten lead and graphite makes this planet's surface inaccessible.</p>
    <h5>Atlahua</h5>
    <p>Small rocky planet with a thin atmosphere of carbondioxide and radiogenic neon (formed by the radiation hitting the magnesium rich surface).
    Additionally two rings orbit this planet, the inner ring is mostly made of iron and the outer made of silicates. Indicating that they were formed from a failed planet.
    </p>
    <h5>Ehecatl</h5>
    <p>Orange moss like flora covers the surface of this world, though the planet has no oceans or large bodies of surface water underground streams can be found.
    The atmosphere is composed of nitrogen and enough oxygen to breathe, however trace amounts of sulfides in the lower atmosphere makes long term exposure risky.
    Surface gravity 0.65g, average temperature range 20 - 70 celsius
    A small number of settlements exist on this planet, most of them depend on resources from space.
    </p>
    <h5>Meztil</h5>
    <p>Also habitable world</p>
    <h5>Toci</h5>
    <p>Big gas planet</p>
    <h5>Xolotl</h5>
    <p>Dark outer rocky planet</p>
</>;

const Ashra = () => <StarSystem
    name='Star System Ashra'
    description='One of many fringe worlds, settled because of the easy access to the water'
    stars={[{
        name: 'Ashra',
        description: 'Ashra is a yellow white main sequence star',
        mass: 0.9,
        age: 4,
        classification: 'K',
        planetoids: [{
            name: 'Feshra',
            description: "Innermost planet of Ashra, small planet composed mostly of magnetic iron., it's believed that a stellar event has stripped this planet of its outer mantel leaving only the iron core. The extremely strong magnetic field protects the surface from radiation and allows a dense atmosphere of argon and carbondioxide to persist.",
            mass: 0.1,
            age: 3.6,
            satelites: [],
            classification: "ironball world",
            atmosphere: "90% carbondioxide, 10% argon",
            hydrosphere: "none",
            surfaceGravity: 0.5,
            temperatureRange: "400 - 500",
            orbitDistance: "0.1 AU"
        },
        {
            name: 'Noshra',
            description: 'Large brownish green planet',
            mass: 2.9,
            age: 3.6,
            satelites: [],
            classification: 'rocky',
            atmosphere: 'dense carbondioxide, clouds of sulfides',
            hydrosphere: 'none',
            surfaceGravity: 2.1,
            temperatureRange: '90 - 180',
            orbitDistance: '0.4 AU',
            feature: 'large silicate rings'
        },
        {
            name: 'Neke',
            description: 'A water world rich in oceanic life, a small number of islands have all been settled by humans, as well as many seasteads that catch sea fauna',
            mass: 0.7,
            age: 3.6,
            satelites: [],
            classification: 'rocky',
            atmosphere: 'nitrogen oxygen',
            hydrosphere: 'salt water',
            surfaceGravity: 0.9,
            temperatureRange: '0 - 50',
            orbitDistance: '0.8 AU',
            feature: '142 thousand inhabitants'
        },
        {
            name: 'Sylvis',
            description: 'Sylvis & Edis are binary gas giants orbiting',
            mass: 81,
            age: 3.6,
            satelites: [{
                name: 'Edis',
                description: 'Edis is believed to be a captured failed star or rogue planet',
                mass: 60,
                age: 9.1,
                classification: 'gas giant',
                atmosphere: 'hydrogen',
                hydrosphere: 'liquid hydrogen',
                surfaceGravity: 3.6,
                temperatureRange: '-120 - 10',
                orbitDistance: '0.07 AU',
                satelites: []
            }],
            classification: 'gas giant',
            atmosphere: 'hydrogen',
            hydrosphere: 'liquid hydrogen',
            surfaceGravity: 4,
            temperatureRange: '-90 - 20',
            orbitDistance: '4 AU',
            feature: 'asteroid belt orbiting gas giant binary'
        }]
    }]}
    roguePlanetoids={[]}
/>


export default FringeWorlds;