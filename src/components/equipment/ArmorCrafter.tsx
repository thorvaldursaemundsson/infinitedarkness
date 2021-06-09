import React from "react";
import { useState } from "react";
import { bigNumberSeparator, weightConverter } from "../../utils/utilFunctions";
import { CharacterSize } from "../Character";
import Section from "../playermanual/Section";
import { ArmorPlate, armorPlates, BodySuit, bodySuits, IntegratedSystem, integratedSystems, PowerArmor, powerArmors } from "./Armors";

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

const getProtectionMod = (n: number) => {
    switch (n) {
        case 6: return 1;
        case 5: return .9;
        case 4: return .8;
        case 3: return .7;
        case 2: return .5;
        case 1: return .3;
        default: return 1;
    }
}

const getQualityMod = (n: number) => {
    switch (n) {
        case 0: return 1;
        case -1: return .9;
        case -2: return .8;
        case -3: return .7;
        case -4: return .6;
        default: return 1;
    }
}

const ArmorCrafter: React.FC = () => {
    const [bodySuit, setBodySuit] = useState<BodySuit | undefined>(undefined);
    const [armorPlate, setArmorPlate] = useState<ArmorPlate | undefined>(undefined);
    const [powerArmor, setPowerArmor] = useState<PowerArmor | undefined>(undefined);
    const [integratedSystemsOnArmor, setIntegratedSystemsOnArmor] = useState<IntegratedSystem[]>([]);
    const [qualityMod, setQualityMod] = useState(0);
    const [size, setSize] = useState<CharacterSize>('medium');
    const [protectionAmount, setProtectionAmount] = useState(6);

    let defense = 0;
    let cost = 0;
    let weight = 0;
    let agilityMod = 0;
    let strengthMod = 0;
    let perceptionMod = 0;
    if (bodySuit !== undefined) {
        defense += bodySuit.damageAbsorbtion;
        cost += bodySuit.cost;
        weight += bodySuit.weight;
        agilityMod += bodySuit.agilityMod;
    }
    if (armorPlate !== undefined) {
        defense += armorPlate.damageAbsorbtion;
        cost += armorPlate.cost;
        weight += armorPlate.weight;
        agilityMod += armorPlate.agilityMod;
    }
    if (powerArmor !== undefined) {
        defense += powerArmor.damageAbsorbtion;
        cost += powerArmor.cost;
        weight += powerArmor.weight;
        agilityMod += powerArmor.agilityMod;
        strengthMod += powerArmor.strengthMod;
        perceptionMod += powerArmor.perceptionMod;
    }

    for (let index in integratedSystemsOnArmor) {
        let item = integratedSystemsOnArmor[index];
        cost += item.cost;
        weight += item.weight;
        defense += item.damageAbsorbtion;
        for (let i in item.abilityModifiers) {
            let abs = item.abilityModifiers[i];
            switch (abs.ability) {
                case 'strength': strengthMod += abs.modifier; break;
                case 'agility': agilityMod += abs.modifier; break;
                case 'perception': perceptionMod += abs.modifier; break;
            }
        }
    }

    const addOrRemoveIntegratedSystem = (add: boolean, item: IntegratedSystem) => {
        if (add)
            setIntegratedSystemsOnArmor([...integratedSystemsOnArmor, item]);
        else
            setIntegratedSystemsOnArmor(integratedSystemsOnArmor.filter(i => i.name !== item.name));

    }

    defense += qualityMod;
    let protectionAmountActual = powerArmor === undefined ? protectionAmount : Math.max(protectionAmount, 3);
    cost = cost * getSizeMod(size) * getProtectionMod(protectionAmountActual) * getQualityMod(qualityMod);
    weight = weight * getSizeMod(size) * getProtectionMod(protectionAmountActual);

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
                <b>Damage Absorbtion:</b> {defense}<br />
                <b>Cost:</b> {bigNumberSeparator(cost)} credits <br />
                <b>Weight:</b> {weightConverter(weight * 1000)}
            </div>
            <div>
                <b>Agility mod</b>: {agilityMod}<br />
                <b>Strength mod</b>: {strengthMod}<br />
                <b>Perception mod</b>: {perceptionMod}
            </div>
        </div>
    </div>);
}

export default ArmorCrafter;