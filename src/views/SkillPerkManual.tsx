import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { GetTraits } from '../components/traits/Traits';
import { GetPerkList } from '../components/GetPerkList';
import { GetSkillList } from '../components/GetSkillList';
import Section from '../components/playermanual/Section';

const SkillPerkManual: React.FC = () => {
    return <div>
        <SkillSection />
        <TraitSection />
    </div>;
}
const perks = GetPerkList();
const SkillSection = () => {
    return (<div>
        <h2>Skills</h2>
        <p>Skills are the generic things a character can learn to do, every skill gains a bonus from it's main ability.</p>
        {GetSkillList().map(skill =>
            <><Section title={skill.name}>
                <Section tab={5} title='uses'>
                    <p>{skill.description}</p>
                    <h4>Uses</h4>
                    {skill.useCases.map(uc => <>
                        <b>{uc.name}</b> - ({uc.attribute} {uc.type})
                    <p>{uc.description}</p>
                    </>)}
                </Section>
                <Section tab={5} title='perks'>
                    <h4>Perks</h4>
                    {perks.filter(p => p.skill == skill.name).map(perk => <>
                        <h5>{perk.name}</h5>
                        <b>Cost</b>: {perk.level * 10}<br />
                        {perk.description()}

                    </>)}
                </Section>
            </Section><hr /></>)}
    </div>);
}

const TraitSection = () => {
    const [currentPerk, setCurrentPerk] = useState('');
    return (<div>
        <h2>Traits</h2>
        <p>Traits are innate characteristics of a character, they can not be added or removed after the start of the game, some traits are purely negative, others positive, some have a combined effect</p>
        <p>Traits often describe a characters behavior, characters with these traits are expected to roleplay in a way which does not conflict with that trait</p>
        <p>It is recommended that a character have between 1 and 3 traits</p>
        {GetTraits().map(trait => {
            return (<div>
                <h3><span style={{ display: 'inline-block', width: '200px' }}>{trait.name}</span> {currentPerk !== trait.name ?
                    <Button onClick={() => setCurrentPerk(trait.name)}>?</Button> :
                    <Button onClick={() => setCurrentPerk('')}>X</Button>} </h3>
                {currentPerk === trait.name ? <div>
                    <p><b>Cost</b>: {trait.cost}</p>
                    {trait.description}</div> : null}
            </div>);
        })}
    </div>)
}

export default SkillPerkManual;