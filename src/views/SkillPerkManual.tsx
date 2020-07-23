import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { GetTraits } from '../components/traits/Traits';
import { GetPerkList } from '../components/GetPerkList';
import { GetSkillList } from '../components/GetSkillList';
import Section from '../components/playermanual/Section';
import Indexer, { Indexed } from '../components/Indexer';

const SkillPerkManual: React.FC = () => {
    return <div>
        <Indexer title='skillsperks'>
            <Indexed title='Skills and perks'>
                <SkillSection />
            </Indexed>
            <Indexed title='Traits'>
                <TraitSection />
            </Indexed>
            <Indexed title='Character traits'>
                <CharacterTraits />
            </Indexed>
        </Indexer>
    </div>;
}
const perks = GetPerkList();
const SkillSection = () => {
    return (<div>
        <p>Skills are the generic things a character can learn to do, every skill gains a bonus from it's main ability.</p>
        <p>Perks are specializations and special capabilities related to skills, each perk has a level, starting at 1.
            <br />
            Perks cost 10 x level
            <br />
            Perks require 6 x level points in their skill
        </p>

        {GetSkillList().map(skill =>
            <><Section title={skill.name} border={true}>
                <Section tab={5} title='uses' border={true}>
                    <p>{skill.description}</p>
                    <h4>Uses</h4>
                    {skill.useCases.map(uc => <>
                        <b>{uc.name}</b> - ({uc.attribute} {uc.type})
                        {uc.results !== undefined ? <ul>{uc.results.map(r => <li>{r}</li>)}</ul> : null}
                        <p>{uc.description}</p>
                    </>)}
                </Section>
                <Section tab={5} title='perks' border={true}>
                    <h4>Perks</h4>
                    {perks.filter(p => p.skill === skill.name).map(perk => <>
                        <h5 className='perkstitle'>{perk.name} ({perk.level * 10})</h5>
                        <p className='perksdescription'>{perk.description()}</p>

                    </>)}
                </Section>
            </Section></>)}
    </div>);
}

const TraitSection = () => {
    const [currentPerk, setCurrentPerk] = useState('');
    return (<div>
        <p>Traits are innate characteristics of a character, they can not be added or removed after the start of the game, some traits are purely negative, others positive, some have a combined effect</p>
        <p>Traits often describe a characters behavior, characters with these traits are expected to roleplay in a way which does not conflict with that trait</p>
        <p>It is recommended that a character have between 1 and 3 traits</p>
        <p>Traits in this section affect more than just roleplay, they also affect outcome of the dice</p>
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

const CharacterTraits: React.FC = (props) => {
    const [trait, setRandomTrait] = useState('');

    const Roll = () => {
        const n = Math.floor((Math.random() * 100));
        if (n <= 66)
            setRandomTrait(`${personalityTraits[n]} (${n})`);
        else setRandomTrait(`free choice (${n})`);
    };

    return (<>
        <h2>Character Traits</h2>
        <p>Character traits describe how your character acts, how you roleplay them. Note that there is always room for interpretation when roleplaying a character whos personality is summed up in 3-5 words. And there is always a choice for which trait to embody at any given time.<br />
        "it's how my character should act" is often not an accepted excuse if your roleplay disrupts the game or causes hurt feelings. Ultimately the player is always the author of the character and always fully responsible for their actions.<br />
        </p>
        <p>Roll 1d100 5 times, results 67-100 means free choice. Pick between 3 and 5, preferably at least one negative and at least one positive</p>
        <button onClick={() => Roll()}>roll</button> {trait}
        <ol>
            {personalityTraits.map(t => <li>{t}</li>)}
        </ol>
    </>);
}
const personalityTraits = [
    'Generous',
    'Integrity',
    'Loyal',
    'Devoted',
    'Loving',
    'Kind',
    'Sincere',
    'Self-controlled',
    'Peaceful',
    'Faithful',
    'Patient',
    'Determined',
    'Persistence',
    'Adventurous',
    'Fair',
    'Cooperative',
    'Tolerant',
    'Optimistic',
    'Spiritual',
    'Dishonest',
    'Disloyal',
    'Unkind',
    'Mean',
    'Rude',
    'Disrespectful',
    'Impatient',
    'Greedy',
    'Abrasive',
    'Pessimistic',
    'Cruel',
    'Unmerciful',
    'Narcissitic',
    'Obnoxious',
    'Malicious',
    'Petty',
    'Quarrelsome',
    'Selfish',
    'Unforgiving',
    'Dominant',
    'Confident',
    'Persuasive',
    'Ambitious',
    'Bossy',
    'Resourceful',
    'Decisive',
    'Charismatic',
    'Authority',
    'Enthusiasm',
    'Bold',
    'Proactive',
    'Playful',
    'Zany',
    'Active',
    'Wild',
    'Silly',
    'Affectionate',
    'Funny',
    'Rough',
    'Talkative',
    'Rowdy',
    'Smart',
    'Fidgety',
    'Shy',
    'Lively',
    'Impatient',
    'Stubborn'
];


export default SkillPerkManual;