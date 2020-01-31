import React, { useState } from 'react';
import { GetSkillList } from '../components/Skills';
import { Button } from '@material-ui/core';
import { GetTraits } from '../components/traits/Traits';
import { GetPerkList } from '../components/GetPerkList';

const SkillPerkManual:React.FC = () => {
    return <div>
            <SkillSection />
            <PerkSection />
            <TraitSection />
        </div>;
}

const SkillSection = () => {
    const [currentSkill, setCurrentSkill] = useState('');
    return (<div>
        <h2>Skills</h2>
        <p>Skills are the generic things a character can learn to do, every skill gains a bonus from it's main ability.</p>
        {GetSkillList().map(skill => {
            return (<div><h3><span style={{ display: 'inline-block', width: '200px' }}>{skill.name}</span> {currentSkill !== skill.name ?
                <Button onClick={() => setCurrentSkill(skill.name)}>?</Button> :
                <Button onClick={() => setCurrentSkill('')}>X</Button>} </h3>
                {currentSkill === skill.name ? <div>{skill.description}</div> : null}</div>);
        })}
    </div>);
}

const PerkSection = () => {
    const [currentPerk, setCurrentPerk] = useState('');
    return (<div>
        <h2>Perks</h2>
        <p>Perks are specializations and special abilities from skills, every perk either makes a specific usage of a skill better or enables the character to perform some extraordinary feat</p>
        {GetPerkList().map(perk => {
            return (<div>
                <h3><span style={{ display: 'inline-block', width: '200px' }}>{perk.name}</span> {currentPerk !== perk.name ?
                <Button onClick={() => setCurrentPerk(perk.name)}>?</Button> :
                <Button onClick={() => setCurrentPerk('')}>X</Button>} </h3>
                {currentPerk === perk.name ? <div>
                    <p><b>Cost</b>: {perk.cost}</p>
                    <p><b>Skill</b>: {perk.skill}</p>
                {perk.description()}</div> : null}
            </div>);
        })}
    </div>)
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