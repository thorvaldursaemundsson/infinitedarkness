import React from "react";
import { useState } from "react";
import { weightConverter } from "../../utils/utilFunctions";
import Firearms, { Ammo, AmmoInformation, AmmoModifications, AmmoTypesInformation, FireArm, FirearmModifications, IAmmoModification, IFirearmModification } from "./Firearms";

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

const numberOrZero = (numb: number | undefined) => numb === undefined ? 0 : numb;

const DisplayFirearm: React.FC<IDisplayFirearm> = ({ firearm, ammo }) => {
    const [ammoType, setAmmoType] = useState<string>(ammo.types[0]);
    const [selectedFirearmMods, setSelectedFirearmMods] = useState<IFirearmModification[]>([]);


    const ammoMod = ammoModGetter(ammoType);
    const ammoCost = firearm.capacity * ammo.cost * ammoMod.cost;


    return (<table>
        <thead>

        </thead>
        <tbody>
            <tr>
                <td style={{ width: '25%' }}>
                    Name<br />
                    Hit bonus<br />
                    Armor piercing<br />
                    Damage<br />
                    Value<br />
                    Weight<br />
                    Strength requirement<br />
                    Caliber<br />
                    Capacity<br />
                    Clip cost<br />
                </td>
                <td style={{ width: '25%' }}>
                    {firearm.name}<br />
                    {numberOrZero(firearm.hitbonus) + numberOrZero(ammoMod.hitAdd)}<br />
                    {numberOrZero(firearm.armorpiercing) + numberOrZero(ammoMod.armorPiercingAdd)}<br />
                    {firearm.damage}
                    {ammoMod.damageAdd === undefined ? null : `+ ${ammoMod.damageAdd}`}
                    {ammoMod.damageMultiplier === undefined ? null : `x ${ammoMod.damageMultiplier}`}<br />
                    {firearm.value}<br />
                    {weightConverter(firearm.weight)}<br />
                    {firearm.strengthRequirement}<br />
                    {firearm.ammo}<br />
                    {firearm.capacity}<br />
                    {ammoCost}<br />
                </td>
                <td style={{ width: '25%' }}>
                    {FirearmModifications.map(fm => <label className='shortLabel'>
                        <input type='checkbox' onClick={() => setSelectedFirearmMods([fm])}
                            checked={selectedFirearmMods.find(sfm => sfm.name === fm.name) !== undefined} /> {fm.name}
                    </label>)}
                </td>
                <td style={{ width: '25%' }}>
                    <select onChange={(e) => setAmmoType(e.target.value)}>
                        {ammo.types.map(a => <option selected={a === ammoType} value={a}>{a}</option>)}
                    </select>
                    <br />
                    {ammoMod.description}
                </td>
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