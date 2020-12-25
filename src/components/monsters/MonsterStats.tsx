import React from "react";
import { CharacterSize } from "../Character";
import { Skill } from "../general/Skills";
import '../../views/charactersheet.css';
import Section from "../playermanual/Section";

type attribute = 'strength' | 'agility' | 'endurance' | 'perception' | 'willpower' | 'intelligence';

interface IAttack {
    bonusToHit: number;
    armorPiercing: number;
    range: 'melee' | number;
    bonusDamage: number;
    sidesPerDice: number;
    numberOfDice: number;
    numberOfAttacks: number;
}

interface IMonsterStats {
    bonusLife?: number | undefined;
    bonusSequence?: number | undefined;
    naturalAttack: IAttack;
    name: string;
    description: string;
    strength: number;
    agility: number;
    endurance: number;
    perception: number;
    willpower: number;
    intelligence: number;
    skills: Skill[];
    size: CharacterSize;
    baseDefense: number;
    speed: number;
}

class Monster implements IMonsterStats {
    name: string;
    description: string;
    strength: number;
    agility: number;
    endurance: number;
    perception: number;
    willpower: number;
    intelligence: number;
    skills: Skill[];
    size: CharacterSize;
    bonusLife: number;
    naturalAttack: IAttack;
    bonusSequence: number;
    baseDefense: number;
    speed: number;

    constructor(data: IMonsterStats) {
        this.name = data.name;
        this.description = data.description;
        this.strength = data.strength;
        this.agility = data.agility;
        this.endurance = data.endurance;
        this.perception = data.perception;
        this.willpower = data.willpower;
        this.intelligence = data.intelligence;
        this.skills = data.skills.map(skill => {
            return {
                ...skill, description: '', useCases: skill.useCases.map(uc => {
                    return { ...uc, description: '' };
                })
            };
        });
        this.size = data.size;
        this.bonusLife = data.bonusLife || 0;
        this.naturalAttack = data.naturalAttack;
        this.bonusSequence = data.bonusSequence || 0;
        this.baseDefense = data.baseDefense;
        this.speed = data.speed;
        const combat = this.skills.find(pred => pred.name === 'combat');
        if (combat !== undefined) {
            const na = this.naturalAttack;
            combat.useCases = [{
                attribute: 'agility',
                name: 'natural attack',
                type: 'active',
                description: `${na.numberOfAttacks} attack(s) per round. Damage = ${na.numberOfDice}d${na.sidesPerDice}+${na.bonusDamage + this.getStrengthBonus()}, ap: ${na.armorPiercing}`
            }];
        }
    }

    private getStrengthBonus() {
        return Math.floor(this.strength / 4);
    }

    public getAttributeByName(attribute: attribute) {
        switch (attribute) {
            case 'agility': return this.agility;
            case 'endurance': return this.endurance;
            case 'intelligence': return this.intelligence;
            case 'perception': return this.perception;
            case 'strength': return this.strength;
            case 'willpower': return this.willpower;
        }
    }

    public getLife() {
        return this.strength + this.endurance * 2 + this.bonusLife;
    }
    public getMana() {
        return this.endurance + this.willpower * 2;
    }

    public getMentalHealth() {
        return this.willpower * 2;
    }

    public getSequence() {
        return this.perception + this.agility + this.bonusSequence;
    }

    public getBaseDefense() {
        return this.baseDefense;
    }
    public getLowDefense() {
        return this.getBaseDefense() + this.agility;
    }
    public getPassiveDefense() {
        const combat = this.getSkillLevel('combat');
        const acrobatics = this.getSkillLevel('acrobatics');
        return this.getLowDefense() + Math.max(combat, acrobatics);
    }

    private getSkillLevel(skillName: string) {
        var skill = this.skills.find(s => s.name === skillName);
        if (skill !== undefined) return skill.level;
        return 0;
    }
}

const MonsterStats: React.FC<IMonsterStats> = (props) => {
    const monster = new Monster(props);
    return <Section title={monster.name}><div className="characterSheet">
        <table>
            <thead>
            </thead>
        </table>
        <tbody>
            <tr>
                <td colSpan={6}>{monster.description}</td>
            </tr>
            <tr>
                <td style={{ width: '136px' }}>
                    <label>Name</label>
                </td>
                <td style={{ width: '146px' }}><label>{monster.name}</label></td>

                <td style={{ width: '136px' }}>
                    <label>Life</label>
                </td>
                <td style={{ width: '106px' }}><label>{monster.getLife()}</label></td>

                <td style={{ width: '126px' }}>
                    <label>Strength</label>
                </td>
                <td style={{ width: '106px' }}><label>{monster.strength}</label></td>

            </tr>
            <tr>
                <td>
                    <label> </label>
                </td>
                <td><label> </label></td>

                <td>
                    <label>Mental health</label>
                </td>
                <td><label>{monster.getMentalHealth()}</label></td>

                <td>
                    <label>Endurance</label>
                </td>
                <td><label>{monster.endurance}</label></td>
            </tr>

            <tr>
                <td>
                    <label> </label>
                </td>
                <td><label> </label></td>

                <td>
                    <label>Sequence</label>
                </td>
                <td><label>{monster.getSequence()}</label></td>


                <td>
                    <label>Agility</label>
                </td>
                <td><label>{monster.agility}</label></td>
            </tr>

            <tr>
                <td>
                    <label> </label>
                </td>
                <td><label></label></td>

                <td>
                    <label>Defense</label>
                </td>
                <td><label> {monster.getBaseDefense()} / {monster.getLowDefense()} / {monster.getPassiveDefense()}</label>  </td>


                <td>
                    <label>Perception</label>
                </td>
                <td><label>{monster.perception}</label></td>
            </tr>

            <tr>
                <td>
                    <label> </label>
                </td>
                <td><label> </label></td>

                <td>
                    <label>Speed</label>
                </td>
                <td><label>{monster.speed}</label></td>


                <td>
                    <label>Intelligence</label>
                </td>
                <td><label>{monster.intelligence} </label></td>
            </tr>

            <tr>
                <td>
                    <label> </label>
                </td>
                <td><label> </label></td>

                <td>
                    <label> </label>
                </td>
                <td><label> </label></td>

                <td>
                    <label>Willpower</label>
                </td>
                <td><label> {monster.willpower}</label></td>
            </tr>
            {monster.skills.map(skill =>
                <tr>
                    <td style={{ height: `${skill.useCases.length * 15 + 20}px` }}><label>{skill.name}</label></td>
                    <td colSpan={5}>
                        <ul>
                            {skill.useCases.map(uc => <li>
                                {uc.name}: {monster.getAttributeByName(uc.attribute) + skill.level} + 2d10
                                <br />{uc.description}
                            </li>)}
                        </ul>
                    </td>
                </tr>
            )}
        </tbody>
    </div></Section>;
}

export default MonsterStats;