import React, { useState } from 'react';
import { GetSkillList } from './Skills';
import { Button } from '@material-ui/core';
import { GetPerkList } from './Perks';

const SkillPerkManual:React.FC = () => {
    return <div>
            <SkillSection />
            <PerkSection />
        </div>;
}

const SkillSection = () => {
    const [currentSkill, setCurrentSkill] = useState('');
    return (<div>
        <h2>Skills</h2>
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
        {GetPerkList().map(perk => {
            return (<div>
                <h3><span style={{ display: 'inline-block', width: '200px' }}>{perk.name}</span> {currentPerk !== perk.name ?
                <Button onClick={() => setCurrentPerk(perk.name)}>?</Button> :
                <Button onClick={() => setCurrentPerk('')}>X</Button>} </h3>
                {currentPerk === perk.name ? <div>
                    <p><b>Cost</b>: {perk.cost}</p>
                    <p><b>Skill</b>: {perk.skill}</p>
                {perk.description}</div> : null}
            </div>);
        })}
    </div>)
}

export default SkillPerkManual;