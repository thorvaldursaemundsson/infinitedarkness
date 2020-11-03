import React, { useState } from 'react';
import { AdultBackground, EarlyChildhoodBackground, IBackground, ITemplate, YouthBackground } from '../backgrounds/backgrounds';
import { SkillName } from '../general/Skills';

interface IStep2Props {
    onComplete: (choices: SkillRankPair[]) => void;
    age: number;
}

const getFinalBackground = (age: number) => {
    if (age > 20) return 2;
    if (age > 10) return 1;
    return 0;
}

interface ITemplateSkillPicker {
    inputTemplate: ITemplate;
    pickRaise: number[];
    onComplete: (choices: SkillRankPair[]) => void;
}

export interface SkillRankPair {
    skill: SkillName;
    rank: number;
}

const ChoostSkillsInTemplate: React.FC<ITemplateSkillPicker> = ({ inputTemplate, onComplete, pickRaise }) => {
    const [skillRanks, setSkillRanks] = useState<SkillRankPair[]>(inputTemplate.skillOptions.map(skill => { return { skill: skill, rank: 0 } }));
    const distinctPickRaise = [0, ...pickRaise.filter((v, i, a) => a.indexOf(v) === i)];


    const setSkillRank = (skill: SkillName, rank: number) => {
        let currentSkillRanks = skillRanks;
        for (var index in currentSkillRanks) {
            var skillRank = currentSkillRanks[index];
            if (skillRank.skill === skill) {
                skillRank.rank = rank;
                break;
            }
        }
        setSkillRanks(currentSkillRanks);
    };

    return (<>
        <p>Please assign at least: {pickRaise.map(pr => `${pr} `)} to skills below.</p>
        <ul>
            {inputTemplate.skillOptions.map(skill => {
                return <li><label className="veryShortLabel">{skill}</label>
                    {distinctPickRaise.map(rank => {
                        return <label className="veryShortLabel"><input name={skill} type='radio' onClick={() => setSkillRank(skill, rank)} /> {rank}</label>
                    })}
                </li>
            })}
        </ul>
        <button onClick={() => onComplete(skillRanks)}>Next</button>
    </>);
}

interface IChooseBackground {
    backgroundOptions: IBackground;
    onComplete: (choices: SkillRankPair[]) => void;
}

const ChooseBackground: React.FC<IChooseBackground> = ({ backgroundOptions, onComplete }) => {
    const [selectedTemplate, setSelectedTemplate] = useState<ITemplate | undefined>(undefined);

    const isHighlighted = (temp: ITemplate) => {
        if (selectedTemplate === undefined) return "";
        else return selectedTemplate.name === temp.name ? "highlightedLi" : "";
    }

    return <>
        <h4>{backgroundOptions.name}</h4>
        <p>{backgroundOptions.description}</p>
        <ul>
            {backgroundOptions.templates.map(temp => {
                return <li className={isHighlighted(temp)}><b onClick={() => setSelectedTemplate(temp)}>{temp.name}</b>. {temp.description}</li>
            })}
        </ul>
        {selectedTemplate !== undefined ? <ChoostSkillsInTemplate onComplete={(choices) => onComplete(choices)} pickRaise={backgroundOptions.pickRaise} inputTemplate={selectedTemplate} /> : null}
    </>;
}

const Step2: React.FC<IStep2Props> = ({ age, onComplete }) => {
    const [skillRanks, setSkillRanks] = useState<SkillRankPair[]>([]);
    const [currentBackground, setCurrentBackground] = useState(0);
    const finalBackground = getFinalBackground(age);

    const nextBackground = (skills: SkillRankPair[]) => {
        setCurrentBackground(currentBackground + 1);
        setSkillRanks([...skillRanks, ...skills]);
    }

    const ViewBackgroundOptions = () => {
        switch (currentBackground) {
            case 0: return <ChooseBackground onComplete={(skillRanks) => nextBackground(skillRanks)} backgroundOptions={EarlyChildhoodBackground} />;
            case 1: return <ChooseBackground onComplete={(skillRanks) => nextBackground(skillRanks)} backgroundOptions={YouthBackground} />;
            case 2: return <ChooseBackground onComplete={(skillRanks) => nextBackground(skillRanks)} backgroundOptions={AdultBackground} />;
            default: return null;
        }
    }

    return (<>
        {currentBackground > finalBackground ? <button onClick={() => onComplete(skillRanks)}>Done</button> : <ViewBackgroundOptions />}
    </>);
}

export default Step2;