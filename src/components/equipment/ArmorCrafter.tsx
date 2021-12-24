import React from "react";
import { useState } from "react";
import { bigNumberSeparator, weightConverter } from "../../utils/utilFunctions";
import { CharacterSize } from "../Character";
import { SkillName } from "../general/Skills";
import Section from "../Section";
import { ArmorPlate, armorPlates, BodySuit, bodySuits, IntegratedSystem, integratedSystems, PowerArmor, powerArmors } from "./Armors";
import Item, { conditionMod, qualityMod } from "./Item";

const getSizeMod = (size: CharacterSize) => {
    switch (size) {
        case 'tiny': return 0.8;
        case 'small': return 0.9;
        case 'medium': return 1;
        case 'large': return 1.1;
        case 'huge': return 1.2;
        default: return 1;
    }
}


interface IArmorCrafterProps {
    onClick?: (item: FullArmor) => void;
}

export interface IFullArmor {
    bodySuit?: BodySuit | undefined;
    armorPlate?: ArmorPlate | undefined;
    powerArmor?: PowerArmor | undefined;
    integratedSystemsOnArmor: IntegratedSystem[];
    size: CharacterSize;
}

export class FullArmor implements IFullArmor, Item {
    bodySuit?: BodySuit | undefined;
    armorPlate?: ArmorPlate | undefined;
    powerArmor?: PowerArmor | undefined;
    integratedSystemsOnArmor: IntegratedSystem[];
    size: CharacterSize;
    weight: number;
    value: number;
    description?: string | undefined;
    longDescription?: string | undefined;
    name: string;
    relatedSkill: SkillName;
    condition?: conditionMod | undefined;
    quality?: qualityMod | undefined;
    type: string = 'armor';
    constructor(data: IFullArmor) {
        this.bodySuit = data.bodySuit;
        this.armorPlate = data.armorPlate;
        this.powerArmor = data.powerArmor;
        this.integratedSystemsOnArmor = data.integratedSystemsOnArmor;
        this.size = data.size;
        this.weight = this.getWeight();
        this.name = this.getName();
        this.relatedSkill = 'combat';
        this.value = this.getValue();
    }
    public getDamageAbsorbtion(): number {
        const bodySuit = (this.bodySuit && this.bodySuit.damageAbsorbtion) || 0;
        const armorPlate = (this.armorPlate && this.armorPlate.damageAbsorbtion) || 0;
        const powerArmor = (this.powerArmor && this.powerArmor.damageAbsorbtion) || 0;

        const integrationValue = this.integratedSystemsOnArmor.length > 0 ? this.integratedSystemsOnArmor.map(i => i.damageAbsorbtion).reduce((a, b) => a + b, 0) : 0;

        return bodySuit + armorPlate + powerArmor + integrationValue;
    }

    public getWeight(): number {
        const bodySuit = (this.bodySuit && this.bodySuit.weight) || 0;
        const armorPlate = (this.armorPlate && this.armorPlate.weight) || 0;
        const powerArmor = (this.powerArmor && this.powerArmor.weight) || 0;

        const integrationValue = this.integratedSystemsOnArmor.length > 0 ? this.integratedSystemsOnArmor.map(i => i.weight).reduce((a, b) => a + b, 0) : 0;

        return (bodySuit + armorPlate + powerArmor + integrationValue) * getSizeMod(this.size);
    }

    public getValue(): number {
        const bodySuit = (this.bodySuit && this.bodySuit.cost) || 0;
        const armorPlate = (this.armorPlate && this.armorPlate.cost) || 0;
        const powerArmor = (this.powerArmor && this.powerArmor.cost) || 0;

        const integrationValue = this.integratedSystemsOnArmor.length > 0 ? this.integratedSystemsOnArmor.map(i => i.cost).reduce((a, b) => a + b, 0) : 0;

        return (bodySuit + armorPlate + powerArmor + integrationValue) * getSizeMod(this.size);
    }

    public getName(): string {
        const bodySuit = this.bodySuit;
        const armorPlate = this.armorPlate;
        const powerArmor = this.powerArmor;
        return `${bodySuit && bodySuit.name} ${armorPlate && armorPlate.name} ${powerArmor && powerArmor.name}`;
    }

    public getStrengthMod(): number {
        const powerArmor = (this.powerArmor && this.powerArmor.strengthMod) || 0;

        const integratedBonus = this.integratedSystemsOnArmor.length > 0 ? this.integratedSystemsOnArmor
            .map(m => m.abilityModifiers.filter(am => am.ability === 'strength').map(am => am.modifier).reduce((a, b) => a + b + 0, 0))
            .reduce((a, b) => a + b, 0) : 0;

        return powerArmor + integratedBonus;
    }

    public getAgilityMod(): number {
        const bodySuit = (this.bodySuit && this.bodySuit.agilityMod) || 0;
        const armorPlate = (this.armorPlate && this.armorPlate.agilityMod) || 0;
        const powerArmor = (this.powerArmor && this.powerArmor.agilityMod) || 0;

        const integratedBonus = this.integratedSystemsOnArmor.length > 0 ? this.integratedSystemsOnArmor
            .map(m => m.abilityModifiers.filter(am => am.ability === 'agility').map(am => am.modifier).reduce((a, b) => a + b, 0))
            .reduce((a, b) => a + b, 0) : 0;

        return bodySuit + armorPlate + powerArmor + integratedBonus;
    }

    public getPerceptionMod(): number {
        const powerArmor = (this.powerArmor && this.powerArmor.perceptionMod) || 0;

        const integratedBonus = this.integratedSystemsOnArmor.length > 0 ? this.integratedSystemsOnArmor
            .map(m => m.abilityModifiers.filter(am => am.ability === 'perception').map(am => am.modifier).reduce((a, b) => a + b, 0))
            .reduce((a, b) => a + b, 0) : 0;

        return powerArmor + integratedBonus;
    }
}

const ArmorCrafter: React.FC<IArmorCrafterProps> = ({ onClick }) => {
    const [bodySuit, setBodySuit] = useState<BodySuit | undefined>(undefined);
    const [armorPlate, setArmorPlate] = useState<ArmorPlate | undefined>(undefined);
    const [powerArmor, setPowerArmor] = useState<PowerArmor | undefined>(undefined);
    const [integratedSystemsOnArmor, setIntegratedSystemsOnArmor] = useState<IntegratedSystem[]>([]);
    const [qualityMod, setQualityMod] = useState(0);
    const [size, setSize] = useState<CharacterSize>('medium');
    const [protectionAmount, setProtectionAmount] = useState(6);

    const addOrRemoveIntegratedSystem = (add: boolean, item: IntegratedSystem) => {
        if (add)
            setIntegratedSystemsOnArmor([...integratedSystemsOnArmor, item]);
        else
            setIntegratedSystemsOnArmor(integratedSystemsOnArmor.filter(i => i.name !== item.name));
    }

    const theArmor = new FullArmor({
        bodySuit: bodySuit,
        armorPlate: armorPlate,
        powerArmor: powerArmor,
        integratedSystemsOnArmor: integratedSystemsOnArmor,
        size: size,
    });

    return (<div>
        <p>Customize an armor</p>
        <select onChange={(e) => setBodySuit(bodySuits.find(f => f.name === e.target.value))}>
            <option selected={null === bodySuit}>Bodysuit armor/none</option>
            {bodySuits.map(bs => <option value={bs.name} selected={bodySuit !== undefined && bs.name === bodySuit.name}>
                {bs.name}
            </option>)}
        </select>
        <select onChange={(e) => setArmorPlate(armorPlates.find(f => f.name === e.target.value))}>
            <option selected={null === armorPlate}>Armor plate/none</option>
            {armorPlates.map(ap => <option value={ap.name} selected={armorPlate !== undefined && ap.name === armorPlate.name}>
                {ap.name}
            </option>)}
        </select>
        <select onChange={(e) => setPowerArmor(powerArmors.find(f => f.name === e.target.value))}>
            <option selected={null === powerArmor}>Power armor/none</option>
            {powerArmors.map(pa => <option value={pa.name} selected={powerArmor !== undefined && pa.name === powerArmor.name}>
                {pa.name}
            </option>)}
        </select>
        <Section title='Integrated Systems'>
            {integratedSystems.map(i => <label>
                <input type='checkbox' checked={integratedSystemsOnArmor.find(is => is.name === i.name) !== undefined} onChange={(e) => addOrRemoveIntegratedSystem(e.target.checked, i)} /> {i.name}
            </label>)}
        </Section>
        <br />
        <select onChange={(e) => setQualityMod(parseInt(e.target.value))}>
            <option value='0' selected={qualityMod === 0}>Pristine/intact/Normal</option>
            <option value='-1' selected={qualityMod === -1}>Used</option>
            <option value='-2' selected={qualityMod === -2}>Worn</option>
            <option value='-3' selected={qualityMod === -3}>Damaged</option>
            <option value='-4' selected={qualityMod === -4}>Broken</option>
        </select>

        <select onChange={(e) => setSize(e.target.value as CharacterSize)}>
            <option selected={size === 'tiny'} value='tiny'>Tiny</option>
            <option selected={size === 'small'} value='small'>Small</option>
            <option selected={size === 'medium'} value='medium'>Medium</option>
            <option selected={size === 'large'} value='large'>Large</option>
            <option selected={size === 'huge'} value='huge'>Huge</option>
        </select>

        <select onChange={(e) => setProtectionAmount(parseInt(e.target.value))}>
            <option selected={protectionAmount === 6} value='6'>Full</option>
            <option selected={protectionAmount === 5} value='5'>Vast</option>
            <option selected={protectionAmount === 4} value='4'>Major</option>
            <option selected={protectionAmount === 3} value='3'>Half</option>
            <option selected={protectionAmount === 2} value='2'>Small</option>
            <option selected={protectionAmount === 1} value='1'>Minor</option>
        </select>
        <div className='divcol2'>
            <div>
                <b>Damage Absorbtion:</b> {theArmor.getDamageAbsorbtion()}<br />
                <b>Cost:</b> {bigNumberSeparator(theArmor.getValue())} credits <br />
                <b>Weight:</b> {weightConverter(theArmor.getWeight() * 1000)}
            </div>
            <div>
                <b>Agility mod</b>: {theArmor.getAgilityMod()}<br />
                <b>Strength mod</b>: {theArmor.getStrengthMod()}<br />
                <b>Perception mod</b>: {theArmor.getPerceptionMod()}
            </div>
        </div>
        {onClick && <button onClick={() => onClick(theArmor)}>Ok</button>}
    </div>);
}

export default ArmorCrafter;