import React from "react";
import { useState } from "react";
import { weightConverter } from "../../utils/utilFunctions";
import Firearms, { Ammo, AmmoInformation, AmmoModifications, AmmoTypesInformation, FireArm, FirearmModifications, IAmmoModification, IFirearmModification, writeDamageDice } from "./Firearms";

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
    const [qualityMod, setQualityMod] = useState(2);

    const ammoMod = ammoModGetter(ammoType);
    const ammoCost = firearm.capacity * ammo.cost * ammoMod.cost;

    const firearmModsCost = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.cost).reduce((a, b) => a + b);
    const firearmModsCostMultiplier = selectedFirearmMods.length === 0 ? 1 : selectedFirearmMods.map(sfm => sfm.costMultiplier).reduce((a, b) => a * b);

    const firearmModsStrengthMod = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.strengthMod || 0).reduce((a, b) => a + b);
    const firearmModsHitMod = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.hitMod || 0).reduce((a, b) => a + b);
    const firearmModsDamageMod = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.damageMod || 0).reduce((a, b) => a + b);
    const firearmModsArmorPiercingMod = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.armorPiercingMod || 0).reduce((a, b) => a + b);
    const firearmModsRangeMod = selectedFirearmMods.length === 0 ? 1 : selectedFirearmMods.map(sfm => sfm.rangeMod || 1).reduce((a, b) => a * b);
    const firearmModsWeightMod = selectedFirearmMods.length === 0 ? 0 : selectedFirearmMods.map(sfm => sfm.weight || 0).reduce((a, b) => a + b);
    const firearmModsWeightMultMod = selectedFirearmMods.length === 0 ? 1 : selectedFirearmMods.map(sfm => sfm.weightMultiplier || 1).reduce((a, b) => a * b);

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
                    {numberOrZero(firearm.hitbonus) + numberOrZero(ammoMod.hitAdd) + firearmModsHitMod}
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
                    {writeDamageDice(firearm.damage, firearmModsDamageMod + numberOrZero(ammoMod.damageAdd))}
                    {ammoMod.damageMultiplier === undefined ? null : `x ${ammoMod.damageMultiplier}`}
                </td>
            </tr>
            <tr>
                <td>
                    Value
                </td>
                <td>
                    {(firearm.value + firearmModsCost) * firearmModsCostMultiplier}
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
                    {firearm.range * firearmModsRangeMod}
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
                    Capacity
                </td>
                <td>
                    {firearm.capacity}
                </td>
            </tr>
            <tr>
                <td>
                    Clip cost
                </td>
                <td>
                    {ammoCost}
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

const FirearmCrafter: React.FC = () => {
    const [firearm, setFirearm] = useState<FireArm | null>(null);

    return <div>
        <h5>Firearm Crafter</h5>
        <select onChange={(e) => selectFirearm(e.target.value, setFirearm)}>
            <option value='null'>none</option>
            {Firearms.map(f => <option value={f.name}>{f.name}</option>)}
        </select>
        {firearm !== null ? <DisplayFirearm ammo={getAmmoByName(firearm.ammo)} firearm={firearm} /> : null}
    </div>;
}


export default FirearmCrafter;