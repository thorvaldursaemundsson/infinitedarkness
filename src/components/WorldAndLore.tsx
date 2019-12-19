import React from 'react';

const WorldAndLore: React.FC = () => {
    return (<div>
        <h1>World and Lore</h1>
        <h2>Index</h2>
        <h3>History</h3>
        <History></History>
    </div>);
}


const History: React.FC = () => {
    return <>
    <h2>History</h2>
    <p>
        This section outlines the major events that shaped the world of Infinite Darkness
    </p>
    <HistorySection title='2039'>First permanent moon base</HistorySection>
    <HistorySection title='2046'>First human on Mars</HistorySection>
    <HistorySection title='2052'>First human on Ceres</HistorySection>
    <HistorySection title='2072'>Most of solar system colonized</HistorySection>
    <HistorySection title='2091'>First contact with Merlion, Deal with humans and merlions to colonize Mars if they help terraform</HistorySection>
    <HistorySection title='2121'>Humans reverse engineer Merlion FTL technology</HistorySection>
    <HistorySection title='2123'>Merlions explain their origins</HistorySection>
    <HistorySection title='2137'>Mars declares independence</HistorySection>
    <HistorySection title='2139'>Ceres, Titan, Europa and many other planets declare independence</HistorySection>
    <HistorySection title='2151'>Exotic Negamatter Factory goes online</HistorySection>
    <HistorySection title='2156'>Humans create first warp bubble in lab</HistorySection>
    <HistorySection title='2162'>Humans build first FTL vessel</HistorySection>
    <HistorySection title='2174'>Coalition of Sol is formed</HistorySection>
    <HistorySection title='2182'>Humans leave solar system in FTL vessel for the first time</HistorySection>
    <HistorySection title='2184'>Humans visit the Centauri (a trinary system) system</HistorySection>
    <HistorySection title='2190'>Humans establish permanent presence in Centauri system</HistorySection>
    <HistorySection title='2201'>Humans colonize planet in Centauri system, dubbed Nefertiti</HistorySection>
    <HistorySection title='2229'>Most of planets in the Centauri system are colonized or have permanent presence</HistorySection>
    <HistorySection title='2240'>Humans make first contact with Klackon in interstellar space</HistorySection>
    <HistorySection title='2257'>Marks the date when half of humanity lives outside of the planet Earth</HistorySection>
    <HistorySection title='2261'>Centauri system declares independence from the Coalition of Sol</HistorySection>
    <HistorySection title='2284'>Humans encounter Merlions in deep space for the first time</HistorySection>
    <HistorySection title='2296'>Humans are welcome in the Klackon home world</HistorySection>
    <HistorySection title='2301'>Sol and Centauri cold war begins</HistorySection>
    <HistorySection title='2317'>Humans discover ancient ruins on distant planet (named Agros) from unknown alien lifeform</HistorySection>
    <HistorySection title='2327'>Humanity now live on planets from 17 star systems</HistorySection>
    <HistorySection title='2328'>Planet Agros is destroyed</HistorySection>
    </>
}
interface IHistorySection {
    title:String;
}
const HistorySection: React.FC<IHistorySection> = ({title, children}) => {
return <><h4>Year {title}</h4><p>{children}</p></>
}

export default WorldAndLore;