import React from 'react';

const FringeWorlds = () => <>
    <h2>Fringe worlds</h2>
    <p>These systems are colonized by humans and are completely self sufficient, but they are also highly isolated and most people who live there have live harsh lives</p>
    <Ashra />
    <Tonati />
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

const Ashra = () => <>
    <h3>Star System Ashra</h3>
    <i>One of many fringe worlds, settled because of the easy access to the water</i>
    <h4>Ashra</h4>
    <p>Ashra is a yellow white main sequence star, 0.9 solar masses, age 6 billion years</p>
    <h5>Feshra</h5>
    <p>Innermost planet of Ashra, small planet composed mostly of magnetic iron. 0.1 earth masses, surface gravity 0.5g, it's believed that a stellar event has stripped this planet of its outer mantel leaving only the iron core. The extremely strong magnetic field protects the surface from radiation and allows a dense atmosphere of argon and carbondioxide to persist.
    Average temperature ranges from 400 - 500 degrees celsius and orbits at a distance of 0.1 AU.
    </p>
    <h5>Noshra</h5>
    <p>A larger rocky planet with a dense atmosphere of carbondioxide and clouds of sulfides, several moons and large silicate rings. Average temperature ranges 90 - 180 celsius, surface gravity 2.1g and orbits at 0.4 AU</p>
    <h5>Neke</h5>
    <p>A water world rich in oceanic life, a small number of islands have all been settled by humans, as well as many seasteads that catch sea fauna. Surface gravity 0.9g, average temperature 0 - 50 celsius.
    Has two moons where most of the minerals are mined and refined since very little can be mined from the planet. Only half of the people in the Ashra system live on the planet.
    Orbits at 0.9 AU
    </p>
    <h5>Sylvis & Edis</h5>
    <p>Sylvis & Edis are binary gas giants orbiting Ashra at 4 AU and 0.2 from each other, between them they have over a hundred moons as well as a large asteroid belt orbiting them at 0.4 AU </p>
</>;

export default FringeWorlds;