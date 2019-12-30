import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const WorldAndLore: React.FC = () => {
    return (<div>
        <h1>World and Lore</h1>
        <h2>Index</h2>
        <h4>History</h4>
        <h4>The FTL Hyperdrive</h4>
        <h4>The Sol System</h4>
        <h4>The Centauri System</h4>
        <h4>The other colonies</h4>
        <h4>The galaxy</h4>
        <h4>The Merlions</h4>
        <h4>The Klackons</h4>
        <h4>Monsters</h4>
        <History></History>
    </div>);
}


const History: React.FC = () => {
    const [open, setOpen] = useState(false);

    if (!open)
        return <Button onClick={() => setOpen(true)}>View history</Button>
    else
    return <>
    <Button onClick={() => setOpen(false)}>X</Button>
    <h2>History</h2>
    <p>
        This section outlines the major events that shaped the world of Infinite Darkness
    </p>
    <HistorySection title='2039'>First permanent moon base, main purpose was to serve as a refueling station, this promised to open up most of the solar system</HistorySection>
    <HistorySection title='2046'>First human sets foot on Mars with help of the moon base, after two years the small screw returns home. They leave behind them the first parts that will later become the Mars colony</HistorySection>
    <HistorySection title='2052'>First human on Ceres, since they have to stay for four years a base is setup beforehand where a large crew can live</HistorySection>
    <HistorySection title='2061'>The first fusion rocket is used in space, many space ships are now built in space</HistorySection>
    <HistorySection title='2072'>Most of solar system colonized, the asteroid belt, rings of saturn, planets and moon are exploited for profit and advancement of humanity</HistorySection>
    <HistorySection title='2091'>Alien spacecraft from outside the solar system arrive, the alien craft seems to be capable of traveling faster than light, something previously believed impossible.
    A message is communicated from it, "we have translated your language, you may refer to us as the Merlions and we come here seeking refuge".
    Eventually aproximately 20 000 Merlions settle on Mars in exchange that they will help the terraforming project.</HistorySection>
    <HistorySection title='2121'>Humans reverse engineer the Merlion faster than light propulsion but it will be many years and discoveries before it can be put to use.</HistorySection>
    <HistorySection title='2123'>Merlions explain their origins, a star 2160 light years away called Sakrak where they were fleeing a war.
    It had taken them 10 years to reach Sol, choosing it because they believed humans could one day become their allies.</HistorySection>
    <HistorySection title='2137'>Growing discontent on Mars leads to a referendum to declare Mars independent from Earth. The referendum passes and Sovereignty of Mars is formed.</HistorySection>
    <HistorySection title='2139'>Inspired by Mars efforts Ceres, Ganymede, Callisto, Io and Europa declare independence too, the moons of Jupiter form a coalition called "Free worlds of Jupiter".
    Ceres later becomes a protectorate of Mars.</HistorySection>
    <HistorySection title='2151'>The first exotic hypermatter factory goes online, this marks the start where humans will be able to create fuel for hyperdrives.</HistorySection>
    <HistorySection title='2162'>Humans build first space ship equipped with a hyperdrive, this will close the distance between the planets and make interstellar travel possible.</HistorySection>
    <HistorySection title='2174'>Coalition of Sol is formed, a loose trade and regulatory organization whos headquarters are located on Mercury. This will later grow into a fully fledged government.</HistorySection>
    <HistorySection title='2182'>Humans leave solar system in FTL vessel for the first time, a compliment of over a hundred set off for Proxima Centauri- the closest star.
    It will take two years in FTL travel to reach  the system.</HistorySection>
    <HistorySection title='2184'>Humans visit the Alpha Centauri system (a trinary system, Rigil Kentaurus, Toliman, Proxima Centauri), colonizable planets are found on all three stars, half the crew decide to stay behind on one of the planet, the other go home.</HistorySection>
    <HistorySection title='2190'>Improvements in effiency and speed have been made to the hyperdrive, as such a space race begins to alpha centauri, it is not long before a thriving community is established on the closest star.</HistorySection>
    <HistorySection title='2201'>The most habitable planet- dubbed Nefertiti (orbiting Toliman) hosts many colonies.</HistorySection>
    <HistorySection title='2229'>By this time most of the planets and moons in the Alpha Centauri system have some form of permanent presence, the population finally reach one hundred thousand</HistorySection>
    <HistorySection title='2240'>Deep in interstellar space Humans find a probe, it contains a message to come to a set of coordinates according to the galaxy, it's 180 light years from Sol.
    It will take 12 years to reach, an automated ship is built programmed to represent humanity, 16 years later a ship arrives at Sol where again aliens send a message
    "Greetings Humans, we come in peace, we are Klackon, we are delighted to make contact, we seek to know you"</HistorySection>
    <HistorySection title='2296'>Humans are welcome in the Klackon home world, having travelled on the much faster Klackon ship</HistorySection>
    <HistorySection title='2257'>Marks the date when half of humanity lives outside of the planet Earth.</HistorySection>
    <HistorySection title='2261'>Centauri system declares independence from the Coalition of Sol, due to severe isolation between the two systems relations are becoming more strained over time.</HistorySection>
    <HistorySection title='2284'>A deep space exploration craft arrives at Alpha Herculis, there they discover a small yet extremely advanced outpost, it sends communications in an alien langauge, after they decipher it they are able to communicate. From there it is revealed that the outpost belongs to Merlions.
    The Merlions warn the humans to never return or they will be destroyed.</HistorySection>
    <HistorySection title='2301'>Centauri shut down their borders from Sol, 10 million people live scattered in the Centauri system, the cold war starts</HistorySection>
    <HistorySection title='2317'>A tomb world named Agros orbiting Spica is discovered, it seems to have once had a huge population, now all that remains is fossilised remains.</HistorySection>
    <HistorySection title='2327'>Humanity now exist on self sufficient colonies on planets from 17 star systems</HistorySection>
    <HistorySection title='2328'>Planet Agros is destroyed when the star undergoes supernova, in 260 years this will be visible on the planet Earth.</HistorySection>
    </>
}
interface IHistorySection {
    title:String;
}
const HistorySection: React.FC<IHistorySection> = ({title, children}) => {
return <><h4>Year {title}</h4><p>{children}</p></>
}

export default WorldAndLore;