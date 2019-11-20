import React, { useState } from 'react';
import { GetSkillList } from './Skills';
import { Button } from '@material-ui/core';

const SkillPerkManual:React.FC = () => {
    return <SkillSection />;
}

const SkillSection = () => {
    const [currentSkill, setCurrentSkill] = useState('');
    return (<div>
        <h2>Skills</h2>
        {GetSkillList().map(skill => {
            return (<div><h3><span style={{ display: 'inline-block', width: '150px' }}>{skill.name}</span> {currentSkill !== skill.name ?
                <Button onClick={() => setCurrentSkill(skill.name)}>?</Button> :
                <Button onClick={() => setCurrentSkill('')}>X</Button>} </h3>
                {currentSkill === skill.name ? <div>{skill.description}</div> : null}</div>);
        })}
    </div>);
}


export default SkillPerkManual;