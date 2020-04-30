import React from 'react';
import StarSystem from './StarSystem';
import Section from '../playermanual/Section';

const FringeWorlds = () => <>
    <h2>Fringe worlds</h2>
    <p>These systems are colonized by humans and are completely self sufficient, but they are also highly isolated and most people who live there have live harsh lives</p>
    <Section title='Ashra'><Ashra /> </Section>
    <Section title='Tonati'><Tonati /> </Section>
</>;

const Tonati = () => <StarSystem
    name='Star System Tonati'
    description='One of many fringe worlds, Tonati considerably advanced with two habitable planets'
    roguePlanetoids={[]}
    stars={[{
        name: 'Tonati',
        description: 'Intense radiation makes the innermost part of the system mostly inaccessible. With a staggering luminosity of 15 times that of the Sun also means that the zone of habitabilty is much larger and farther out.',
        classification: 'F',
        mass: 2.7,
        age: 4.1,
        planetoids: [{
            name: 'Chantico',
            description: 'Chantico rotates extremely quickly, a day lasting only 160 minutes. This planet is a smoldering radioactive hellscape under the Tonati sun, rivers of magma flow across the surface that is never able to cool down',
            mass: 0.09,
            age: 3.8,
            classification: 'rocky metallic',
            satelites: [],
            atmosphere: "none",
            hydrosphere: "none",
            surfaceGravity: 0.5,
            temperatureRange: "1000 - 1300",
            orbitDistance: "0.2 AU",
            feature: 'extreme radiation'
        },
        {
            name: 'Teylaloc',
            description: 'Large rocky planet with a powerful magnetic field to protect it from the intense solar radiation. Constant thunderstorms and rains of molten lead and graphite makes this planets surface inaccessible.',
            mass: 1.8,
            age: 3.9,
            classification: 'rocky',
            satelites: [],
            atmosphere: "thick carbon dioxide",
            hydrosphere: "none",
            surfaceGravity: 1.5,
            temperatureRange: "320 - 360",
            orbitDistance: "0.7 AU",
            feature: 'constant planetwide thunderstorms'
        },
        {
            name: 'Atlahua',
            description: 'Small rocky planet with a thin atmosphere of carbondioxide and radiogenic neon (formed by the radiation hitting the magnesium rich surface). Additionally two rings orbit this planet, the inner ring is mostly made of iron and the outer made of silicates. Indicating that they were formed from a failed planet.',
            mass: 0.7,
            age: 3.8,
            classification: 'rocky',
            satelites: [],
            atmosphere: "thin 80% carbon dioxide, 19% neon, 1% argon",
            hydrosphere: "none",
            surfaceGravity: 1.5,
            temperatureRange: "190 - 370 celsius",
            orbitDistance: "1.5 AU",
            feature: 'rings'
        },
        {
            name: 'Ehecatl',
            description: 'Orange moss like flora covers the surface of this world, though the planet has no oceans or large bodies of surface water underground streams can be found. The atmosphere is composed of nitrogen and enough oxygen to breathe, however trace amounts of sulfides in the lower atmosphere makes long term exposure risky.  A small number of settlements exist on this planet, most of them depend on resources from space.',
            mass: 0.5,
            age: 3.7,
            classification: 'rocky',
            satelites: [],
            atmosphere: "thin 60% nitrogen 38% oxygen, 1% argon, 1% ozone, trace sulfides",
            hydrosphere: "salt water",
            surfaceGravity: 0.65,
            temperatureRange: " 20 - 70 celsius",
            orbitDistance: "3.5 AU",
            feature: 'settlements'
        },
        {
            name: 'Meztil',
            description: 'WIP',
            mass: 0.9,
            age: 3.7,
            classification: 'rocky',
            satelites: [],
            atmosphere: "thin 70% nitrogen 29% oxygen, 1% argon",
            hydrosphere: "salt water",
            surfaceGravity: 0.9,
            temperatureRange: " -30 - 40 celsius",
            orbitDistance: "4.2 AU",
            feature: 'settlements'
        },
        {
            name: 'Toci',
            description: 'WIP',
            mass: 65,
            age: 3.9,
            classification: 'gas giant',
            satelites: [],
            atmosphere: "hydrogen helium",
            hydrosphere: "liquid hydrogen",
            surfaceGravity: 4,
            temperatureRange: " -130 - 80 celsius",
            orbitDistance: "30 AU",
        },
        {
            name: 'Xolotl',
            description: 'WIP',
            mass: 1.2,
            age: 6.1,
            classification: 'rocky',
            satelites: [],
            atmosphere: "hydrogen",
            hydrosphere: "liquid methane",
            surfaceGravity: 4,
            temperatureRange: " -190 - -170 celsius",
            orbitDistance: "79 AU",
        }
        ]

    }]}
/>

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