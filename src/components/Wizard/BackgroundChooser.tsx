import React, { useState } from 'react';
import { AdultBackground, EarlyChildhoodBackground, IBackground, ITemplate, YouthBackground } from '../backgrounds/backgrounds';
import { SkillName } from '../general/Skills';

interface IStep2Props {
    onComplete: (choices: SkillRankPair[]) => void;
    age: number;
}

const getFinalBackground = (age: number) => {
    if (age > 25) return 2;
    if (age > 15) return 1;
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
const setSkillRank = (skillRanks: SkillRankPair[], setSkillRanks: React.Dispatch<React.SetStateAction<SkillRankPair[]>>, skill: SkillName, rank: number) => {
    let currentSkillRanks = [...skillRanks];
    for (let index in currentSkillRanks) {
        let skillRank = currentSkillRanks[index];
        if (skillRank.skill === skill) {
            skillRank.rank = rank;
            break;
        }
    }
    setSkillRanks(currentSkillRanks);
};
const ChoostSkillsInTemplate: React.FC<ITemplateSkillPicker> = ({ inputTemplate, onComplete, pickRaise }) => {
    const [skillRanks, setSkillRanks] = useState<SkillRankPair[]>(inputTemplate.skillOptions.map(skill => { return { skill: skill, rank: 0 } }));
    const distinctPickRaise = [0, ...pickRaise.filter((v, i, a) => a.indexOf(v) === i)];

    return (<>
        <p>Please assign a rank of 2, 3 and 4 to two skills each below.</p>
        <ul className="listhighliter">
            {[...inputTemplate.skillOptions].sort().map(skill => {
                return <li key={`w_bc_csit_${skill}`}><label className="shortLabel">{skill}</label>
                    {distinctPickRaise.map(rank => {
                        return <label key={'ws2csin_l_' + skill + rank} className="veryShortLabel">
                            <input key={'ws2csin_l_' + skill + rank} name={skill} type='radio' checked={rank === skillRanks.find(s=>s.skill===skill)!.rank} onChange={() => setSkillRank(skillRanks, setSkillRanks, skill, rank)} /> {rank}
                        </label>
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
const isHighlighted = (selectedTemplate: ITemplate | undefined, temp: ITemplate) => {
    if (selectedTemplate === undefined) return "";
    else return selectedTemplate.name === temp.name ? "highlightedLi" : "";
}


const ChooseBackground: React.FC<IChooseBackground> = ({ backgroundOptions, onComplete }) => {
    const [selectedTemplate, setSelectedTemplate] = useState<ITemplate | undefined>(undefined);
    return <>
        <h4>{backgroundOptions.name}</h4>
        <p>{backgroundOptions.description}</p>
        <ul>
            {backgroundOptions.templates.map(temp => {
                return <li key={'ws2bgt_' + temp.name} className={isHighlighted(selectedTemplate, temp)}><b onClick={() => setSelectedTemplate(temp)}>{temp.name}</b>. {temp.description}</li>
            })}
        </ul>
        {selectedTemplate !== undefined ? <ChoostSkillsInTemplate key='ws2csit' onComplete={(choices) => onComplete(choices)} pickRaise={backgroundOptions.pickRaise} inputTemplate={selectedTemplate} /> : null}
    </>;
}

const nextBackground = (currentBackground: number, setCurrentBackground: React.Dispatch<React.SetStateAction<number>>, setSkillRanks: React.Dispatch<React.SetStateAction<SkillRankPair[]>>, skills: SkillRankPair[], skillRanks: SkillRankPair[]) => {
    setCurrentBackground(currentBackground + 1);
    setSkillRanks([...skillRanks, ...skills]);
}

const BackgroundChooser: React.FC<IStep2Props> = ({ age, onComplete }) => {
    const [skillRanks, setSkillRanks] = useState<SkillRankPair[]>([]);
    const [currentBackground, setCurrentBackground] = useState(0);
    const finalBackground = getFinalBackground(age);

    return (<>
        {currentBackground > finalBackground ? <button onClick={() => onComplete(skillRanks)}>Done</button> : null}
        {currentBackground === 0 ? <ChooseBackground key='ws2cb1' onComplete={(sr) => nextBackground(currentBackground, setCurrentBackground, setSkillRanks, sr, skillRanks)} backgroundOptions={EarlyChildhoodBackground} />: null}
        {currentBackground === 1 ? <ChooseBackground key='ws2cb2' onComplete={(sr) => nextBackground(currentBackground, setCurrentBackground, setSkillRanks, sr, skillRanks)} backgroundOptions={YouthBackground} />: null}
        {currentBackground === 2 ? <ChooseBackground key='ws2cb3' onComplete={(sr) => nextBackground(currentBackground, setCurrentBackground, setSkillRanks, sr, skillRanks)} backgroundOptions={AdultBackground} />: null}
    </>);
}

export default BackgroundChooser;