import React from 'react';
import Section from '../Section';
import Ashra from '../fringeworlds/Ashra';
import Tonati from '../fringeworlds/Tonati';
import Atargatis from '../fringeworlds/Atargatis';

const FringeWorlds = () => <>
    <h2>Fringe worlds</h2>
    <p>These systems are colonized by humans and are completely self sufficient, but they are also highly isolated and most people who live there have live harsh lives</p>
    <Section title='Ashra'><Ashra /> </Section>
    <Section title='Tonati'><Tonati /> </Section>
    <Section title='Atargatis'><Atargatis /></Section>
</>;






export default FringeWorlds;