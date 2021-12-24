import React from 'react';
import Section from '../Section';
import Indexer, { Indexed } from '../general/Indexer';
import Cooking from '../skills/cooking';
import { ConsumableMedicine, ConsumableTools, ConsumableWeapons } from '../equipment/Consumables';
import { CharacterSizeMods } from '../Character';


const Consumables = () => <Section title='Consumables'>
    <Indexer title='Consumable Items'>
        <Indexed title='Food'><Food /></Indexed>
        <Indexed title='Medicine'><Medicine /></Indexed>
        <Indexed title='Tools'><Tools /></Indexed>
        <Indexed title='Weapons'><Weapons /></Indexed>
    </Indexer>
</Section>;


export default Consumables;

const Food = () => <>
    <p>Food glorious food, keeps us alive. It also matters what you eat and how much you eat</p>
    <h4>How much you eat</h4>
    <p>Characters need to eat a certain amount to live, characters that don't eat enough will start to starve. Also characters that don't eat OR drink water dies after 72 hours of dehydration. Characters need</p>
    <ul>
        {CharacterSizeMods.map(m => <li><b>{m.size}</b>: {m.consumption}</li>)}
    </ul>
    <p>After 2 days of not eating characters will see their life regeneration halved and -2 to all rolls</p>
    <p>After 7 days of not eating characters life regeneration will stop, they take -8 to all rolls</p>
    <p>After 14 days of not eating will start to lose their life, for each day beyond this point they lose 1 maximum life. When maximum life reaches 0 they become unconcious and die the next day.</p>
    <h4>Quality food</h4>
    <p>Good food quality gives improved mood and can even make you physically better</p>
    <ul>
        <li>Horrible food: 25% risk of food poisoning, -2 all rolls rest of the day</li>
        <li>Bad food: -1 to all rolls rest of the day</li>
        <li>Average food: no effect</li>
        <li>Good food: +1 to all rolls for the rest of the day</li>
        <li>Great food: +2 to all rolls for the rest of the day</li>
        <li>Outstanding food: +2 to all rlls for the rest of the day, heal 1 life and mental health at the end of the day</li>
    </ul>
    <h5>Resturant food</h5>
    <p>Resturant food works the same as home cooked food, except someone else bought the raw materials, cooked it and served it to you.</p>
    <ul>
        <li>Horrible food: 40 credits</li>
        <li>Bad food: 60 credits</li>
        <li>Average food: 80 credits</li>
        <li>Good food: 150 credits (reservations 24h required, Savoir-Faire 15. Skip reservation 25)</li>
        <li>Great food: 300 credits (reservations 48h required, Savoir-Faire 20. Skip reservation 30)</li>
        <li>Outstanding food: 500 credits  (reservations 72h required, Savoir-Faire 25. Skip reservation 35)</li>
    </ul>
    <h5>Street food</h5>
    <p>Street food works similar to resturant food with two modifications. Average quality is the highest quality easily available. The price is reduced by 25%.
        You can find good street food with streetwise 20. Great streetfood with streetwise 30. Outstanding streetfood with streetwise 40.
    </p>
    <p>Note that you can only find resturant food and streetwise food in locations where they exist, a successful role may include travel.</p>
    <h5>Home cooked food</h5>
    <p>To cook food you need ingredients, you also need a kitchen, ingredients can be bought for 20 credits per meal or a survival check</p>
    <ul>
        <li>Low quality ingredients cost 10 credits, cause -5 to cooking roll</li>
        <li>High quality ingredients costs 30 credits, cause +3 to cooking roll</li>
        <li>Low quality kitchen causes -5 to cooking roll</li>
        <li>High quality kitchen causes +3 to cooking roll</li>
    </ul>
    <p>You can create a kitchen with a survival check (2h), 20 low quality, 25 mid, 30 high quality. Survival kitchens are always grills</p>
    <p>Hunting or gathering food requires a survival check and 8 hours (the 8 hours are committed whether you succeed or not). If a party of huntergatherers work together they must all roll survival together, the total meals are added up.</p>
    <ul>
        <li>Survival 20: ingredients for 1 meal</li>
        <li>Survival 25: ingredients for 2 meals</li>
        <li>Survival 30: ingredients for 3 meals</li>
        <li>Survival 35: ingredients for 4 meals</li>
        <li>Rush (4h): take -10 penalty to speed up the process. Still uses the effort of 8h</li>
    </ul>
    {Cooking.useCases.map(uc => {
        return <><h6>{uc.name} ({uc.attribute})</h6><p>{uc.description}</p>
            <ul>
                {uc.results && uc.results.map(u => <li>{u}</li>)}
            </ul>
        </>
    })}

</>;

const Medicine = () => <>
    <h4>Healing Medicine</h4>
    <p>Healing medicine concerns all kinds of drugs that restore life, limb and damage, all these require medicine check.</p>
    <p>Dosage matters for size, tiny uses 1/2 charges, small, medium and large use 1, huge uses 3/2</p>
    <p>Some medicines require a skill check, which are listed below</p>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>uses</th>
                <th>Weight (kg)</th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            {ConsumableMedicine.map(tool => <>
                <tr>
                    <td><b>{tool.name}</b></td><td>{tool.charges}</td><td>{tool.weight / 1000}</td><td>{tool.value}</td>
                </tr>
                <tr>
                    <td className='univeralBorderBottom' colSpan={4}>
                        {tool.description}
                        {tool.medicineSkillRolls.length > 0 ? <ul>{tool.medicineSkillRolls.map(m => <li>{m}</li>)}</ul> : null}
                    </td>
                </tr>
            </>)}
        </tbody>
    </table>
</>;

interface ITool {
    name: string;
    description: string;
    uses: number;
    weightKg: number;
    cost: number;
}



const Tools = () => <>
    <h3>Tools</h3>
    <p>Many advanced skills require a tool. Uses is equal to uses + skill rank (if object is transfered then always use lowest rank in history of users). Tools without an obvious related skill simply has a set number of uses. Once the uses has been depleted the quality degrades by one level.</p>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>uses</th>
                <th>Weight (kg)</th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            {ConsumableTools.map(tool => <>
                <tr>
                    <td><b>{tool.name}</b></td><td>{tool.charges}</td><td>{tool.weight / 1000}</td><td>{tool.value}</td>
                </tr>
                <tr>
                    <td className='univeralBorderBottom' colSpan={4}>{tool.description}</td>
                </tr>
            </>)}
        </tbody>
    </table>
</>



const Weapons = () => <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Weight</th>
                <th>Cost</th>
                <th>Charges</th>
            </tr>
        </thead>
        <tbody>

            {ConsumableWeapons.map(c => <>
                <tr>
                    <td>{c.name}</td>
                    <td>{c.weight}</td>
                    <td>{c.value}</td>
                    <td>{c.charges}</td>
                </tr>
                <tr>
                    <td className='univeralBorderBottom' colSpan={4}>{c.description}</td>
                </tr>
            </>)}
        </tbody>
    </table>
</>;
//Traps