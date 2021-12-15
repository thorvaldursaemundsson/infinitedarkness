import Item from "./Item";

export interface IConsumable extends Item {
    charges: number;
}

export const ConsumableWeapons: IConsumable[] = [
    {
        name: 'Frag Grenade',
        description: 'Does 6d8 damage in a radius of 2 meters (hexes) and quarter 1 meter radius more. Destroys objects. Deafness in blast area for 4 rounds.',
        value: 1400,
        weight: 900,
        charges: 1,
        relatedSkill: 'explosives',
    },
    {
        name: 'Incendiary Grenade',
        description: 'Does 2d6 thermal damage in a radius of 3 meters to everyone starting in or moving through the area. Lasts 10 rounds. Anyone standing in the area when the incendiary grenade detonates will also burn for 10 rounds, taking 2d6 at the start of their turn. Being on fire imposes a -10 to all perception based rolls and the burning creature must succeed a DC 15 willpower roll or become paniced.',
        value: 1300,
        weight: 950,
        charges: 1,
        relatedSkill: 'explosives',
    },
    {
        name: 'Plasma Grenade',
        description: 'Does 10d6 thermal and electrical damage in a radius of 3 meters.',
        value: 3000,
        weight: 1500,
        charges: 1,
        relatedSkill: 'explosives',
    },
    {
        name: 'Electric Pulse Grenade',
        description: 'Does 2d4 electric damage with 10 armor piercing in a radius of 6 meters. Double damage to electronics.',
        value: 3000,
        weight: 1200,
        charges: 1,
        relatedSkill: 'explosives',
    },
    {
        name: 'Flash grenade',
        description: 'Blinds and deafens everyone within 5 meters for 2d6+4 rounds and everyone within 10 meters for 1d6+2 rounds. Make a contested acrobatics + agility to protect your eyes OR your ears.',
        value: 700,
        weight: 750,
        charges: 1,
        relatedSkill: 'explosives',
    },
    {
        name: 'Smoke Bomb',
        description: 'Creates smoke that expands by 1 meter (hex) per round to a maximum of 10 meter. Smoke prevents vision and lasts 20 rounds. Anyone beginning their turn inside smoke and is breathing must succeed an endurance roll against 20 or lose their action for their turn.',
        value: 600,
        weight: 700,
        charges: 1,
        relatedSkill: 'explosives',
    },
    {
        name: 'Steel foam grenade',
        description: 'Creates steel foam that expands up to 2 meters in all direction, each round it hardens and gains 5 points up to 20.',
        value: 1200,
        weight: 2000,
        charges: 1,
        relatedSkill: 'explosives',
    },
    {
        name: 'Oil Disperser',
        description: 'Releases slippery oil and marbles on a 4meter radius area, terrain becomes difficult and anyone attempting to walk across it must succeed on a DC 20 acrobatics + agility roll of fall prone and lose their action.',
        value: 600,
        weight: 700,
        charges: 1,
        relatedSkill: 'explosives',
    },
];

export const ConsumableTools: IConsumable[] = [
    {
        name: 'med kit',
        description: 'contains stempacks, antibotics, antivirals, diagnostic tools, antivenom, weak and strong painkillers',
        charges: 20,
        weight: 2500,
        value: 4000,
        relatedSkill: 'medicine',
    },
    {
        name: 'Climing/Parkour gear',
        description: 'contains traction cleats, anchors, rope, revo belay',
        charges: 50,
        weight: 3000,
        value: 1500,
        relatedSkill: 'acrobatics',
    },
    {
        name: 'Sports gear',
        description: 'contains pair of sneakers, towel, water bottle, headband, aerodynamic one-piece',
        charges: 40,
        weight: 2000,
        value: 2000,
        relatedSkill: 'athletics',
    },
    {
        name: 'Sharpening tools',
        description: 'Contains sharpening stick for blades',
        charges: 1000,
        weight: 500,
        value: 100,
        relatedSkill: 'combat',
    },
    {
        name: 'Portable Cooking set',
        description: 'contains a small pot, a large pot, a light frying pan, one electric stove, portable refrigerator, including batteries for up to 10 meals.',
        charges: 100,
        weight: 10000,
        value: 5000,
        relatedSkill: 'cooking'
    },
    {
        name: 'Electronics toolkit',
        description: 'contains multi meter, spare wires and cables, wireboard, universal screwdriver, soldering tools',
        charges: 30,
        weight: 4000,
        value: 2000,
        relatedSkill: 'electronics'
    },
    {
        name: 'Ballistic kit',
        description: 'contains universal screwdriver, spare screws, oil, small brush, protective eyewear',
        charges: 40,
        weight: 300,
        value: 400,
        relatedSkill: 'firearms'
    },
    {
        name: 'Forensics kit',
        description: 'contains darklight, fingerprint duster, biosample collector, laser pointer',
        charges: 40,
        weight: 1000,
        value: 1200,
        relatedSkill: 'investigation'
    },
    {
        name: 'Lockpick',
        description: 'contains assortment of lockpicks',
        charges: 100,
        weight: 200,
        value: 500,
        relatedSkill: 'larceny'
    },
    {
        name: 'Electronic lockpick',
        description: 'contains connector, IR coms, UV coms, micro-hologram projector, adaptor, cryptogram chip',
        charges: 80,
        weight: 2000,
        value: 3500,
        relatedSkill: 'computer'
    },
    {
        name: 'Mechanics kit',
        description: 'contains universal screwdrivers, hammer, spare nuts, bolts, screws, nails, adjustable wrench',
        charges: 1000,
        weight: 5000,
        value: 1500,
        relatedSkill: 'mechanics'
    },
    {
        name: 'Batteries',
        description: 'Rechargeble Lithium ion battery, can be used to recharge energy weapons, computers, tools, even vehicles',
        charges: 10000,
        weight: 1000,
        value: 1000,
        relatedSkill: 'electronics'
    },
    {
        name: 'Personal solar array',
        description: 'A 1x1 meter solar foldable panel, can charge one battery over the course of a day.',
        charges: 10000,
        weight: 500,
        value: 2000,
        relatedSkill: 'electronics'
    },
    {
        name: 'Motion sensor',
        description: 'detects air movement and vibrations up to 100 meters, can be adjusted to less',
        charges: 100,
        weight: 200,
        value: 200,
        relatedSkill: 'mechanics'
    },
    {
        name: 'Tiny tracker',
        description: 'tiny tracker emits weak long band microwaves, adjustable to an exact frequency and pattern, trackable up to 100km. Illegal',
        charges: 1,
        weight: 10,
        value: 300,
        relatedSkill: 'computer'
    },
    {
        name: 'Infrared googles',
        description: 'Googles that track infra-red light, allows visible light to be seen too as an option.',
        charges: 10000,
        weight: 200,
        value: 900,
        relatedSkill: 'stealth'
    },
    {
        name: 'Ultraviolet googles',
        description: 'Googles that track ultra-violet light, allows visible light to be seen too as an option.',
        charges: 10000,
        weight: 300,
        value: 1600,
        relatedSkill: 'stealth'
    },
    {
        name: 'Pocket Computer',
        description: 'Basically a futuristic smartphone. Allows user to substitute computer roll for any knowledge roll. 10TB storage, 12x 5.5GH cpu cores, 512GB ram, 4 cameras, gyrometer, accelerometer, geigercounter, radiobooster. 48h battery',
        charges: 1000,
        weight: 1000,
        value: 2000,
        relatedSkill: 'computer'
    },
    {
        name: 'Jetpack',
        description: 'Allows for short bursts which propel the user. Jump +50 meters up, +100 meters forward, requires athletics + agility 20 to safely land. Can hover if your total weight is 80kg or less',
        charges: 100,
        weight: 6000,
        value: 14000,
        relatedSkill: 'athletics'
    },
    {
        name: 'Flightsuit',
        description: 'Allows for gliding, flying if paired with jetpack. Landing safely requires acrobatics + agility 20. Not compatible with armor plating or power armor. Maximum capacity 90kg',
        charges: 80,
        weight: 10000,
        value: 8000,
        relatedSkill: 'athletics'
    },
    {
        name: 'SCUBA suit',
        description: 'Airbreathing underwater for 3 hours. Includes wetsuit which protects against cold oceanic water.',
        charges: 10,
        weight: 6000,
        value: 12000,
        relatedSkill: 'athletics'
    },
    {
        name: 'Parachute',
        description: 'Includes parachute, altimeter, jumpsuit, parachute container, oxygenator. Must be repackaged (10 minutes) and refueled every time. Maximum capacity 140kg. Each kg over maximum capacity counts as up to 1 meter falling damage',
        charges: 100,
        weight: 5000,
        value: 7000,
        relatedSkill: 'athletics'
    },
    {
        name: 'Massive Parachute',
        description: 'Includes four parachutes, drogue chute, altimeter, jumpsuit, parachute container, oxygenator. Must be repackaged (1 hour) and refueled every time. Maximum capacity 300kg. Each kg over maximum capacity counts as up to 1 meter falling damage',
        charges: 50,
        weight: 10000,
        value: 20000,
        relatedSkill: 'athletics'
    },
    {
        name: 'Laser protection gear',
        description: 'Protective gear against damage from laser, protects against blinding.',
        charges: 1000,
        weight: 100,
        value: 500,
        relatedSkill: 'firearms'
    },
    {
        name: 'Plasma protection gear',
        description: 'Protective gear against damage from plasma weapons, protects against blinding and damage, does not offer protection if directly fired upon.',
        charges: 1000,
        weight: 1000,
        value: 1600,
        relatedSkill: 'firearms'
    },
    {
        name: 'Spy drone',
        description: '	Small drone, charges propellers to fly but cacharges virtually no noice, has a small mounted camera and comes with remote controll (can also be controlled via computer), range 1km. Has +5 to stealth checks to remain hidden.',
        charges: 500,
        weight: 200,
        value: 4000,
        relatedSkill: 'computer'
    },
    {
        name: 'Carrier drone',
        description: 'Medium sized drone, similar to spy drone but can carry 1kg and is not silent.',
        charges: 500,
        weight: 2000,
        value: 9000,
        relatedSkill: 'computer'
    },
    {
        name: 'Large carrier drone',
        description: 'Large sized drone, similar to carrier drone, can carry 6kg. Has -5 to steath checks to remain hidden.',
        charges: 500,
        weight: 10000,
        value: 15000,
        relatedSkill: 'computer'
    },
    {
        name: 'Industrial carrier drone',
        description: 'Large sized drone, similar to large carrier but can carry 52kg. Has -10 to steath checks to remain hidden.',
        charges: 500,
        weight: 80000,
        value: 25000,
        relatedSkill: 'computer'
    },
    {
        name: 'H.W. Industrial carrier drone',
        description: 'Heavy weight indistrial carrier drone, capacity 175kg. Basically a small hellicopter. Has -15 to steath checks to remain hidden.',
        charges: 500,
        weight: 250000,
        value: 35000,
        relatedSkill: 'computer'
    },
    {
        name: 'Transport drone',
        description: 'It\'s a vehicle, capacity 3500kg. Has -20 to steath checks to remain hidden.',
        charges: 500,
        weight: 5000000,
        value: 90000,
        relatedSkill: 'computer'
    },
    {
        name: 'Camping kit',
        description: 'contains single person tent, bedroll, igniter, boiler',
        charges: 50,
        weight: 20000,
        value: 4000,
        relatedSkill: 'survival'
    },
    {
        name: 'Field physics kit',
        description: 'Contains telescope, microscope, spectrometer, scale, thermometer, hydrometer, electrometer',
        charges: 100,
        weight: 6000,
        value: 8000,
        relatedSkill: 'science'
    },
    {
        name: 'Field chemistry kit',
        description: 'Contains microscope, ph-meter, tweesers, beakers, heater, condenser',
        charges: 100,
        weight: 3000,
        value: 7000,
        relatedSkill: 'science'
    },
    {
        name: 'Field biology kit',
        description: 'Contains high focus microscope, stereliser, sealed strong bags',
        charges: 100,
        weight: 3000,
        value: 7000,
        relatedSkill: 'science'
    },
    {
        name: 'Neural enhancer',
        description: 'A neural enhancer charges very precise magnetic fields to speed up brainwaves. Roll science + intelligence vs 25 to adapt it to your brain, the adaption lasts until you gain experience points. If you succeed then you add +1 to all intelligence, perception and agility rolls for 4 hours. When the time is elapsed you take a -2 penalty for 4 hours. If you dont wait 16 hours to use it again you take 1 mental health damage.',
        charges: 1000,
        weight: 1000,
        value: 8000,
        relatedSkill: 'science'
    }
];

interface IMedicine extends IConsumable {
    medicineSkillRolls: string[];
}

export const ConsumableMedicine: IMedicine[] = [
    {
        name: 'Adrenaline',
        description: 'Immediately awakens someone who is unconscious',
        charges: 5,
        weight: 100,
        value: 1600,
        medicineSkillRolls: [
            '20+: can awaken someone who is not critically incapacitated',
            '30+: can awaken someone who is critically incapacitated',
        ],
        relatedSkill: 'medicine'
    },
    {
        name: 'Stempack',
        description: 'Over the course of 24 hours will regenerate life equal to endurance. Can be used up to 3 times spaced 8 hours apart with stacking effect, but always gain exhaustion per administration.',
        charges: 10,
        weight: 10,
        value: 2000,
        medicineSkillRolls: [
            '14 or less: takes 6 seconds. causes 1d4 damage. Causes 1 level of exhaustion',
            '20-24: Takes 10 minutes. Causes 1 level of exhaustion',
            '25-30: Takes 1 minute. Causes 1 level of exhaustion',
            '31-40: Takes 30 seconds',
            '41+: Takes 30 seconds, immediately heal 1 life'
        ],
        relatedSkill: 'medicine',
    },
    {
        name: 'Antibiotics',
        description: 'Strengthens immune response to bacterial infection. When rolling immune response vs bacterial disease roll add +10',
        charges: 5,
        weight: 10,
        value: 2000,
        medicineSkillRolls: [
            '14 or less: takes 6 seconds. Gain no benefit from antibiotics, gain 1 level of exhaustion',
            '20-29: Takes 10 minutes',
            '30+: Takes 1 minute'
        ],
        relatedSkill: 'medicine',
    },
    {
        name: 'Antivirals',
        description: 'Strengthens immune response to viral infection. When rolling immune response vs bacterial disease add +10',
        charges: 2,
        weight: 10,
        value: 1600,
        medicineSkillRolls: [
            '14 or less: takes 6 seconds. Gain no benefit from antibiotics, gain 1 level of exhaustion',
            '20-29: Takes 10 minutes',
            '30+: Takes 1 minute'
        ],
        relatedSkill: 'medicine',
    },
    {
        name: 'Radioflush',
        description: 'Removes radioactive materials from body over the course of 72 hours (does not drop radiation level). Causes 1 level of exhaustion',
        charges: 2,
        weight: 50,
        value: 1600,
        medicineSkillRolls: [
            '19 or less: Takes 6 seconds. do not gain benefits',
            '20-29: Takes 1 minute.',
            '30+: Takes 1 minute. No exhaustion'
        ],
        relatedSkill: 'medicine',
    },
    {
        name: 'Gene therapy detox',
        description: 'Reduces radiation dose by 1, takes 30 days to take effect. Causes 1 level of exhaustion after every rest while active.',
        charges: 4,
        weight: 10,
        value: 2400,
        medicineSkillRolls: [
            '24 or less: Takes 6 seconds. do not gain benefits',
            '25-29: Takes 60 minutes.',
            '30-34: Takes 60 minutes. Effect only requires 20 days.',
            '35-39: Takes 60 minutes. Effect only requires 10 days.',
            '40+: Takes 60 minutes. Effect only requires 5 days.',
        ],
        relatedSkill: 'medicine',
    },
    {
        name: 'Antivenom',
        description: 'Counteracts venom, stops it from causing further harm.',
        charges: 1,
        weight: 20,
        value: 1200,
        medicineSkillRolls: [
            '20-24: takes 5 minutes. Causes 1 level of exhaustion',
            '25-29: takes 1 minute. Causes 1 level of exhaustion',
            '30+: takes 12 seconds.'
        ],
        relatedSkill: 'medicine',
    },
    {
        name: 'Anti-Radiation drug',
        description: 'reduces accumulation of radiation damage for 30 days by 1 level',
        charges: 5,
        weight: 50,
        value: 1000,
        medicineSkillRolls: [
            '10-19: causes 1 level of exhaustion',
            '20-29: normal effect',
            '30+: may take second dose with additional effect'
        ],
        relatedSkill: 'medicine',
    },
    {
        name: 'Active carbon',
        description: 'reduces effect of poisons recently consumed, neutralizes medicines and drugs taken orally',
        charges: 10,
        weight: 100,
        value: 100,
        medicineSkillRolls: [
        ],
        relatedSkill: 'medicine',
    },
    {
        name: 'Weak painkillers',
        description: 'Half penalty to all rolls from life damage, max 10',
        charges: 20,
        weight: 100,
        value: 200,
        medicineSkillRolls: [
        ],
        relatedSkill: 'medicine',
    },
    {
        name: 'Strong painkiller',
        description: 'Quarter penalty to all rolls from life damage, max 30.',
        charges: 20,
        weight: 100,
        value: 1000,
        medicineSkillRolls: [
        ],
        relatedSkill: 'medicine',
    },
];