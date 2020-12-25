import React from "react";
import Section from "../playermanual/Section";
import EarthMonsters from "./EarthMonsters";
import NekovianMonsters from "./NekovianMonsters";



const Monsters: React.FC = () => {
    return <>
        <Section border={true} title='Earth Monsters'><EarthMonsters /></Section>
        <Section border={true} title='Nekovian Monsters'><NekovianMonsters /></Section>
    </>;
}

export default Monsters;