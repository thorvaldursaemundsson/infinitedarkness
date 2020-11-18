import React from 'react';
import Section from './Section';
import Indexer, { Indexed } from '../general/Indexer';
import Cooking from '../skills/cooking';


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
        <li>Tiny: 2 meal</li>
        <li>Small: 2.5 meals</li>
        <li>Medium: 3 meals</li>
        <li>Large: 3.5 meals</li>
        <li>Huge: 4 meals</li>
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
    <p>Dosage matters for size, which means altered credit cost. Tiny: -20%, small: -10, large: +10%, huge: +20%</p>
    <ul>
        <li>Stempack: 200 credits, restores life </li>
        <li>Antibiotics: 400 credits, cures bacterial infection </li>
        <li>Antivirals: 800 credits, cures viral infection </li>
        <li>Radioflush: 900 credits, removes radioactive materials from body (does not drop radiation level)</li>
        <li>Gene therapy detox: 600 credits, accelerates radiation healing to 1 level per month.</li>
        <li>Antivenom: 700 credits, neutralizes (specific) venom</li>
    </ul>
    <h4>Resillience Drugs</h4>
    <p>Resillience drugs are similar to medicine in that they require medicine skill, however they don't heal damage. They prevent it</p>
    <ul>
        <li>Anti-Radiation drug: 200 credits, reduces accumulation of radiation damage for 30 days by 1 level</li>
        <li>Active carbon: 10 credits, reduces effect of poisons recently consumed, neutralizes medicines and drugs</li>
    </ul>
    <h4>Performance Enhancing Drugs</h4>
    <p>Performance enhancing drugs are often illegal and most carry negative effects, some are also addictive</p>
    <p>Characters who become addicted become unable to resist the temptation to take more of the drug which tends to ruin their lives.</p>
    <ul>
        <li>Weak painkillers: 10 credits, reduces penalty from damage by 2 (no skill needed), lasts 8 hours</li>
        <li>Intermediate painkiller: 50 credits, reduces penalty from damage by 6 (no skill needed, requires prescription), lasts 8 hours</li>
        <li>Strong painkiller: 200 credits, reduces penalty from damage by 16, requires medicine skill, lasts 8 hours</li>
        <li>Coffee: +1 to all intelligence and perception rolls for 6 hours, no effect if addicted</li>
        <li>Alcohol (1 beer): 20 credits, reduces penalty from damage by 1, reduces all mental rolls by 1, increases bravery by 2, lasts 2 hours</li>
        <li>Berzerker drops: 1500 credits, gain +1 strength, endurance, +3 to combat for 1 hour, high risk of addiction</li>
        <li>Spirit Elixir: unknown credits, unknown effect</li>
    </ul>
</>;

interface ITool {
    name: string;
    description: string;
    uses: number;
    weightKg: number;
    cost: number;
}

const tools: ITool[] = [
    {
        name: 'med kit',
        description: 'contains stempacks, antibotics, antivirals, diagnostic tools, antivenom, weak and strong painkillers',
        uses: 20,
        weightKg: 2.5,
        cost: 4000,
    },
    {
        name: 'Climing/Parkour gear',
        description: 'contains traction cleats, anchors, rope, revo belay',
        uses: 50,
        weightKg: 3,
        cost: 1500,
    },
    {
        name: 'Sports gear',
        description: 'contains pair of sneakers, towel, water bottle, headband, aerodynamic one-piece',
        uses: 40,
        weightKg: 2,
        cost: 2000,
    },
    {
        name: 'Sharpening tools',
        description: 'Contains sharpening stick for blades',
        uses: 1000,
        weightKg: 0.5,
        cost: 100,
    },
    {
        name: 'Portable Cooking set',
        description: 'contains a small pot, a large pot, a light frying pan, one electric stove, portable refrigerator, including batteries for up to 10 meals.',
        uses: 100,
        weightKg: 10,
        cost: 5000,
    },
    {
        name: 'Electronics toolkit',
        description: 'contains multi meter, spare wires and cables, wireboard, universal screwdriver, soldering tools',
        uses: 30,
        weightKg: 4,
        cost: 2000,
    },
    {
        name: 'Ballistic kit',
        description: 'contains universal screwdriver, spare screws, oil, small brush, protective eyewear',
        uses: 40,
        weightKg: .3,
        cost: 400,
    },
    {
        name: 'Forensics kit',
        description: 'contains darklight, fingerprint duster, biosample collector, laser pointer',
        uses: 40,
        weightKg: 1,
        cost: 1200,
    },
    {
        name: 'Lockpick',
        description: 'contains assortment of lockpicks',
        uses: 100,
        weightKg: .2,
        cost: 500,
    },
    {
        name: 'Electronic lockpick',
        description: 'contains connector, IR coms, UV coms, micro-hologram projector, adaptor, cryptogram chip',
        uses: 80,
        weightKg: 2,
        cost: 3500,
    },
    {
        name: 'Mechanics kit',
        description: 'contains universal screwdrivers, hammer, spare nuts, bolts, screws, nails, adjustable wrench',
        uses: 1000,
        weightKg: 5,
        cost: 1500,
    },
    {
        name: 'Batteries',
        description: 'Rechargeble Lithium ion battery, can be used to recharge energy weapons, computers, tools, even vehicles',
        uses: 10000,
        weightKg: 1,
        cost: 1000,
    },
    {
        name: 'Personal solar array',
        description: 'A 1x1 meter solar foldable panel, can charge one battery over the course of a day.',
        uses: 10000,
        weightKg: .5,
        cost: 2000,
    },
    {
        name: 'Motion sensor',
        description: 'detects air movement and vibrations up to 100 meters, can be adjusted to less',
        uses: 100,
        weightKg: .2,
        cost: 200,
    },
    {
        name: 'Tiny tracker',
        description: 'tiny tracker emits weak long band microwaves, adjustable to an exact frequency and pattern, trackable up to 100km. Illegal',
        uses: 1,
        weightKg: .01,
        cost: 300,
    },
    {
        name: 'Infrared googles',
        description: 'Googles that track infra-red light, allows visible light to be seen too as an option.',
        uses: 10000,
        weightKg: 0.2,
        cost: 900,
    },
    {
        name: 'Ultraviolet googles',
        description: 'Googles that track ultra-violet light, allows visible light to be seen too as an option.',
        uses: 10000,
        weightKg: 0.3,
        cost: 1600,
    },
    {
        name: 'Pocket Computer',
        description: 'Basically a futuristic smartphone. Allows user to substitute computer roll for any knowledge roll. 10TB storage, 12x 5.5GH cpu cores, 512GB ram, 4 cameras, gyrometer, accelerometer, geigercounter, radiobooster. 48h battery',
        uses: 1000,
        weightKg: 1,
        cost: 2000,
    },
    {
        name: 'Jetpack',
        description: 'Allows for short bursts which propel the user. Jump +50 meters up, +100 meters forward, requires athletics + agility 20 to safely land. Can hover if your total weight is 80kg or less',
        uses: 100,
        weightKg: 6,
        cost: 14000,
    },
    {
        name: 'Flightsuit',
        description: 'Allows for gliding, flying if paired with jetpack. Landing safely requires acrobatics + agility 20. Not compatible with armor plating or power armor',
        uses: 80,
        weightKg: 10,
        cost: 8000,
    },
    {
        name: 'SCUBA suit',
        description: 'Airbreathing underwater for 3 hours. Includes wetsuit which protects against cold oceanic water.',
        uses: 10,
        weightKg: 6,
        cost: 12000,
    },
    {
        name: 'Laser protection gear',
        description: 'Protective gear against damage from laser, protects against blinding.',
        uses: 1000,
        weightKg: 0.1,
        cost: 500,
    },
    {
        name: 'Plasma protection gear',
        description: 'Protective gear against damage from plasma weapons, protects against blinding and damage, does not offer protection if directly fired upon.',
        uses: 1000,
        weightKg: 1,
        cost: 1600,
    },
    {
        name: 'Spy drone',
        description: '	Small drone, uses propellers to fly but causes virtually no noice, has a small mounted camera and comes with remote controll (can also be controlled via computer), range 1km.',
        uses: 500,
        weightKg: 0.2,
        cost: 4000,
    },
    {
        name: 'Carrier drone',
        description: 'Medium sized drone, similar to spy drone but can carry 1kg and is not silent.',
        uses: 500,
        weightKg: 2,
        cost: 9000,
    },
    {
        name: 'Large carrier drone',
        description: 'Large sized drone, similar to carrier drone, can carry 6kg.',
        uses: 500,
        weightKg: 10,
        cost: 15000,
    },
    {
        name: 'Industrial carrier drone',
        description: 'Large sized drone, similar to large carrier but can carry 52kg.',
        uses: 500,
        weightKg: 80,
        cost: 25000,
    },
    {
        name: 'H.W. Industrial carrier drone',
        description: 'Heavy weight indistrial carrier drone, capacity 175kg. Basically a small hellicopter',
        uses: 500,
        weightKg: 250,
        cost: 35000,
    },
    {
        name: 'Transport drone',
        description: 'It\'s a vehicle, capacity 3500kg.',
        uses: 500,
        weightKg: 5000,
        cost: 90000,
    },
    {
        name: 'Camping kit',
        description: 'contains single person tent, bedroll, igniter, boiler',
        uses: 50,
        weightKg: 20,
        cost: 4000,
    },
    {
        name: 'Field physics kit',
        description: 'Contains telescope, microscope, spectrometer, scale, thermometer, hydrometer, electrometer',
        uses: 100,
        weightKg: 6,
        cost: 8000,
    },
    {
        name: 'Field chemistry kit',
        description: 'Contains microscope, ph-meter, tweesers, beakers, heater, condenser',
        uses: 100,
        weightKg: 3,
        cost: 7000,
    },
    {
        name: 'Field biology kit',
        description: 'Contains high focus microscope, stereliser, sealed strong bags',
        uses: 100,
        weightKg: 3,
        cost: 7000,
    },
    {
        name: 'Neural enhancer',
        description: 'A neural enhancer uses very precise magnetic fields to speed up brainwaves. Roll science + intelligence vs 25 to adapt it to your brain, the adaption lasts until you gain character points. If you succeed then you add +1 to all intelligence, perception and agility rolls for 4 hours. When the time is elapsed you take a -2 penalty for 4 hours. If you dont wait 16 hours to use it again you take 1 mental health damage.',
        uses: 1000,
        weightKg: 1,
        cost: 8000,
    }
];

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
            {tools.map(tool => <>
                <tr>
                    <td><b>{tool.name}</b></td><td>{tool.uses}</td><td>{tool.weightKg}</td><td>{tool.cost}</td>
                </tr>
                <tr>
                    <td className='univeralBorderBottom' colSpan={4}>{tool.description}</td>
                </tr>
            </>)}
        </tbody>
    </table>
</>

const Weapons = () => <>
    Hand grenade
    Remote activated Bomb
    Traps
</>;