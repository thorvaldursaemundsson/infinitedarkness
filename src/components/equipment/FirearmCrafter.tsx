import React from "react";
import { useState } from "react";
import { bigNumberSeparator, weightConverter } from "../../utils/utilFunctions";
import Firearms, { Ammo, AmmoInformation, AmmoModifications, AmmoTypesInformation, FireArm, FirearmModifications, IAmmoModification, IFirearmModification } from "./Firearms";
import { Condition, ICondition, IQuality, Quality, writeDamageDice } from "./Item";

const selectFirearm = (firearmName: string, setter: React.Dispatch<React.SetStateAction<FireArm | null>>) => {
    if (firearmName === 'null') setter(null);
    else {
        let maybeFirearm = Firearms.find(f => f.name === firearmName);
        if (maybeFirearm !== undefined) setter(maybeFirearm);
    }
};

interface IDisplayFirearm {
    firearm: FireArm;
    ammo: AmmoInformation;
}

const ammoModGetter = (ammoMod: string): IAmmoModification => {
    let maybeMod = AmmoModifications.find(am => am.name.toLocaleLowerCase() === ammoMod.toLocaleLowerCase());
    if (maybeMod === undefined) throw new Error(`${ammoMod} missing!`);
    return maybeMod;
}

const addFirearmsModifications = (add: boolean,
    mod: IFirearmModification,
    current: IFirearmModification[],
    setter: React.Dispatch<React.SetStateAction<IFirearmModification[]>>) => {
    if (add) {
        setter([...current, mod]);
    }
    else {
        setter([...current.filter(fm => fm.name !== mod.name)]);
    }
};



const numberOrZero = (numb: number | undefined) => numb === undefined ? 0 : numb;

const DisplayFirearm: React.FC<IDisplayFirearm> = ({ firearm, ammo }) => {
    const [ammoType, setAmmoType] = useState<string>(ammo.types[ammo.types.length - 1]);
    const [selectedFirearmMods, setSelectedFirearmMods] = useState<IFirearmModification[]>([]);
    const [quality, setQuality] = useState<IQuality>(Quality[3]);
    const [condition, setCondition] = useState<ICondition>(Condition[0]);
    
    const ammoMod = ammoModGetter(ammoType);

    firearm.firearmModification = selectedFirearmMods;
    firearm.ammoModification = ammoMod;

    const firearmModsCost = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.cost).reduce((a, b) => a + b);
    const firearmModsCostMultiplier = selectedFirearmMods.length === 0 ? 1 : selectedFirearmMods.map(sfm => sfm.costMultiplier).reduce((a, b) => a * b);

    const firearmModsStrengthMod = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.strengthMod || 0).reduce((a, b) => a + b);
    const firearmModsHitMod =  firearm.getHitBonus();
    const firearmModsDamageMod = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.damageMod || 0).reduce((a, b) => a + b);
    const firearmModsArmorPiercingMod = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.armorPiercingMod || 0).reduce((a, b) => a + b);
    const firearmModsRangeMod = selectedFirearmMods.length === 0 ? 1 : selectedFirearmMods.map(sfm => sfm.rangeMod || 1).reduce((a, b) => a * b);
    const firearmModsWeightMod = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.weight || 0).reduce((a, b) => a + b);
    const firearmModsWeightMultMod = selectedFirearmMods.length === 0 ? 1 : selectedFirearmMods.map(sfm => sfm.weightMultiplier || 1).reduce((a, b) => a * b);
    const firearmModsAmmoMultMod = selectedFirearmMods.length === 0 ? 1 : selectedFirearmMods.map(sfm => sfm.ammoCapacityMod || 1).reduce((a, b) => a * b);

    const ammoCost = (firearm.capacity * firearmModsAmmoMultMod) * ammo.cost * ammoMod.cost;

    return (<table>
        <thead>

        </thead>
        <tbody>
            <tr>
                <td style={{ width: '25%' }}>
                    Name

                </td>
                <td style={{ width: '25%' }}>
                    {firearm.name}


                </td>
                <td style={{ width: '25%' }} rowSpan={11}>
                    {FirearmModifications.map(fm => {
                        const isSelected = selectedFirearmMods.find(sfm => sfm.name === fm.name) !== undefined;
                        return (<label className='shortLabel'>
                            <input type='checkbox' onClick={() => addFirearmsModifications(!isSelected, fm, selectedFirearmMods, setSelectedFirearmMods)}
                                checked={isSelected} /> {fm.name}
                        </label>);
                    })}
                </td>
                <td style={{ width: '25%' }} rowSpan={11}>

                    <select onChange={(e) => setCondition(Condition[parseInt(e.target.value)])}>
                        {Condition.map((c, i, a) => <option selected={c.effect === condition.effect} value={i} >{c.label}</option>)}
                    </select>
                    <br />
                    <select onChange={(e) => setQuality(Quality[parseInt(e.target.value)])}>
                        {Quality.map((q, i, a) => <option selected={q.effect === quality.effect} value={i} >{q.label}</option>)}
                    </select>
                    <br />
                    <select onChange={(e) => setAmmoType(e.target.value)}>
                        {ammo.types.map(a => <option selected={a === ammoType} value={a}>{a}</option>)}
                    </select>
                    <br />
                    {ammoMod.description}
                </td>
            </tr>
            <tr>
                <td>
                    Hit bonus
                </td>
                <td>
                    {numberOrZero(firearm.hitbonus) + numberOrZero(ammoMod.hitAdd) + firearmModsHitMod + quality.effect + condition.effect}
                </td>
            </tr>
            <tr>
                <td>
                    Armor piercing
                </td>
                <td>
                    {numberOrZero(firearm.armorpiercing) + numberOrZero(ammoMod.armorPiercingAdd) + firearmModsArmorPiercingMod}
                </td>
            </tr>
            <tr>
                <td>
                    Damage
                </td>
                <td>
                    {writeDamageDice(firearm.damage, firearmModsDamageMod + numberOrZero(ammoMod.damageAdd) + quality.effect)}
                    {ammoMod.damageMultiplier === undefined ? null : `x ${ammoMod.damageMultiplier}`}
                </td>
            </tr>
            <tr>
                <td>
                    Value
                </td>
                <td>
                    {bigNumberSeparator((firearm.value + firearmModsCost) * firearmModsCostMultiplier * quality.valueModifier * condition.valueModifier)}
                </td>
            </tr>
            <tr>
                <td>
                    Weight
                </td>
                <td>
                    {weightConverter((firearm.weight + firearmModsWeightMod) * firearmModsWeightMultMod)}
                </td>
            </tr>
            <tr>
                <td>
                    Strength requirement
                </td>
                <td>
                    {firearm.strengthRequirement + firearmModsStrengthMod}
                </td>
            </tr>
            <tr>
                <td>
                    Maximum range
                </td>
                <td>
                    {Math.floor(firearm.range * firearmModsRangeMod)}
                </td>
            </tr>
            <tr>
                <td>
                    Splash?
                </td>
                <td>
                    {firearm.splashRange === undefined ? 'no splash' : `${firearm.splashRange} / ${firearm.lowDamageZone}`}
                </td>
            </tr>
            <tr>
                <td>
                    Caliber
                </td>
                <td>
                    {firearm.ammo}
                </td>
            </tr>
            <tr>
                <td>
                    Capacity / Reload
                </td>
                <td>
                    {firearm.capacity * firearmModsAmmoMultMod} / {firearm.reload || 'move'}
                </td>
            </tr>
            <tr>
                <td>
                    Fire rate
                </td>
                <td>
                    {firearm.rps !== undefined ? firearm.rps * 6 : 1} per round
                </td>
            </tr>
            <tr>
                <td>
                    Clip cost / weight
                </td>
                <td>
                    {bigNumberSeparator(ammoCost)} / {ammo.weight * firearm.capacity * firearmModsAmmoMultMod}
                </td>
            </tr>
            <tr>
                <td>
                    Classification & Fire action
                </td>
                <td>
                    {firearm.fireArmClass} & {firearm.fireAction.join(', ')}
                </td>
            </tr>




            <tr>
                <td colSpan={4}>{firearm.description}</td>
            </tr>
        </tbody>
    </table>);
}

const getAmmoByName = (ammo: Ammo): AmmoInformation => {
    let maybeAmmo = AmmoTypesInformation.find(a => a.ammo === ammo);
    if (maybeAmmo === undefined) throw new Error('Missingammo');
    return maybeAmmo;
}

interface IFirearmCrafter {
    onGetFirearm?: (firearm:FireArm) => void;
}

const FirearmCrafter: React.FC<IFirearmCrafter> = ({ onGetFirearm }) => {
    const [firearm, setFirearm] = useState<FireArm | null>(null);


    return <div>
        <h5>Firearm Crafter</h5>
        <select onChange={(e) => selectFirearm(e.target.value, setFirearm)}>
            <option value='null'>none</option>
            {Firearms.map(f => <option value={f.name}>{f.name}</option>)}
        </select>
        {firearm !== null ? <DisplayFirearm ammo={getAmmoByName(firearm.ammo)} firearm={firearm} /> : null}
        {(firearm !== null && onGetFirearm !== undefined) ? <button onClick={() => onGetFirearm(firearm)}>Done</button> : null}
    </div>;
}


export default FirearmCrafter;