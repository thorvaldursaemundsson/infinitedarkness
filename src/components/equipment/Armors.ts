import { abilities } from "../general/Skills";

export interface ArmorData {
    name: string;
    damageAbsorbtion: number;
    weight: number;
    cost: number;
    agilityMod: number;
    description: string;
    armorType: string;
}

export interface BodySuit extends ArmorData {
}

export interface ArmorPlate extends ArmorData {
}

interface AbilityMod {
    ability:abilities,
    modifier:number;
}

export interface IntegratedSystem {
    name: string;
    description: string;
    cost: number;
    weight: number;
    damageAbsorbtion:number;
    abilityModifiers: AbilityMod[];
    stack:number;
}

export interface PowerArmor extends ArmorData {
    strengthMod: number;
    perceptionMod: number;
}


const bodySuits: BodySuit[] = [
    {
        name: 'Nylon Polyester Composite',
        damageAbsorbtion: 3,
        weight: 10,
        cost: 3000,
        agilityMod: -1,
        description: 'Composite armor made primarily of nylon and polyester, thick layers give stab and cut protection',
        armorType: 'bodySuit'
    },
    {
        name: 'Kevlar',
        damageAbsorbtion: 2,
        weight: 5,
        cost: 4500,
        agilityMod: 0,
        description: 'Heat resistant synthetic fiber, woven into a flexible and light body suit',
        armorType: 'bodySuit'
    },
    {
        name: 'Carbon Reinforced Kevlar',
        damageAbsorbtion: 3,
        weight: 10,
        cost: 6000,
        agilityMod: 0,
        description: 'An incredibly strong weave of carbon fiber, kevlar and nylon and polyester. Gives incredible defense',
        armorType: 'bodySuit'
    },
    {
        name: 'Carbon Fiber Weave',
        damageAbsorbtion: 5,
        weight: 15,
        cost: 12000,
        agilityMod: -2,
        description: 'An incredibly strong weave of carbon fiber, kevlar and nylon and polyester. Gives incredible defense',
        armorType: 'bodySuit'
    },
    {
        name: 'Nanotube Superstructure Fiber',
        damageAbsorbtion: 6,
        weight: 10,
        cost: 30000,
        agilityMod: -1,
        description: 'A kevlar body suit reinforced with graphene nanotube super structures which gives protection against most attacks',
        armorType: 'bodySuit'
    },
    {
        name: 'High Yield Nanosuit',
        damageAbsorbtion: 7,
        weight: 8,
        cost: 40000,
        agilityMod: 0,
        description: 'A body armor made entirely out of nanotube carbyne weave, incredibly strong, light and expensive',
        armorType: 'bodySuit'
    }
];

const armorPlates: ArmorPlate[] = [
    {
        name: 'Hard Plast Plates',
        damageAbsorbtion: 2,
        weight: 8,
        cost: 2500,
        agilityMod: 0,
        description: 'Hard but elastic plastic plates which reflect impacts, very durable',
        armorType: 'armorPlate'
    },
    {
        name: 'Ceramic Plates',
        damageAbsorbtion: 4,
        weight: 10,
        cost: 3500,
        agilityMod: -1,
        description: 'Very hard ceramic plates which absorb a lot of damage, however each time the damage is exceeded they lose 1 damage absorbtion. These are replaced after every combat',
        armorType: 'armorPlate'
    },
    {
        name: 'Steel Plates',
        damageAbsorbtion: 5,
        weight: 12,
        cost: 4000,
        agilityMod: -2,
        description: 'High carbon hardened steel plates, very strong but also heavy',
        armorType: 'armorPlate'
    },
    {
        name: 'Steel Fullplate',
        damageAbsorbtion: 7,
        weight: 18,
        cost: 8000,
        agilityMod: -3,
        description: 'High carbon hardened steel plates, very strong but also heavy. Fullplate means more thickness and coverage.',
        armorType: 'armorPlate'
    },
    {
        name: 'Titan Alloy Plates',
        damageAbsorbtion: 6,
        weight: 10,
        cost: 9000,
        agilityMod: -2,
        description: 'An alloy of titanium and gold, stronger than steel. And significantly more expensive',
        armorType: 'armorPlate'
    },
    {
        name: 'Titan Alloy Fullplate',
        damageAbsorbtion: 8,
        weight: 16,
        cost: 15000,
        agilityMod: -3,
        description: 'An alloy of titanium and gold, stronger than steel. And significantly more expensive. Fullplate means more thickness and coverage.',
        armorType: 'armorPlate'
    },
    {
        name: 'Hyper Nanostructure Plates',
        damageAbsorbtion: 7,
        weight: 8,
        cost: 18000,
        agilityMod: -1,
        description: 'Titan alloy reinforced by a weave of graphene nanotube super structure',
        armorType: 'armorPlate'
    },
    {
        name: 'Hyper Nanostructure Fullplates',
        damageAbsorbtion: 9,
        weight: 12,
        cost: 32000,
        agilityMod: -2,
        description: 'Titan alloy reinforced by a weave of graphene nanotube super structure. Fullplate means more thickness and coverage.',
        armorType: 'armorPlate'
    },
]

const powerArmors: PowerArmor[] = [
    {
        name: 'Exo-Servos',
        damageAbsorbtion: 0,
        weight: 6,
        cost: 4000,
        agilityMod: 1,
        perceptionMod: 0,
        strengthMod: 1,
        description: 'Servos placed on joints aid movement speed, agility and strength',
        armorType: 'powerArmor'
    },
    {
        name: 'Exoskeletal Frame',
        damageAbsorbtion: 1,
        weight: 12,
        cost: 7000,
        agilityMod: 1,
        perceptionMod: 0,
        strengthMod: 3,
        description: 'Frame around the body grants greater strength, speed and agility',
        armorType: 'powerArmor'
    },
    {
        name: 'Scout Frame',
        damageAbsorbtion: 1,
        weight: 14,
        cost: 8000,
        agilityMod: 3,
        perceptionMod: 0,
        strengthMod: 2,
        description: 'Advanced frame around the body, which grants great mobility and strength',
        armorType: 'powerArmor'
    },
    {
        name: 'Powered Armor',
        damageAbsorbtion: 4,
        weight: 18,
        cost: 9000,
        agilityMod: 1,
        perceptionMod: 1,
        strengthMod: 4,
        description: 'This armor frame encapsulates the entire body and greats great strength, as well as visual prowess and mobility',
        armorType: 'powerArmor'
    },
    {
        name: 'Titan Power Armor',
        damageAbsorbtion: 5,
        weight: 24,
        cost: 12000,
        agilityMod: 1,
        perceptionMod: 1,
        strengthMod: 5,
        description: 'This armor frame is almost a vehicle, the strength bonus it grants is beyond belief',
        armorType: 'powerArmor'
    },
    {
        name: 'Mecha Titan',
        damageAbsorbtion: 6,
        weight: 30,
        cost: 16000,
        agilityMod: 1,
        perceptionMod: 1,
        strengthMod: 5,
        description: 'An even larger version of the Titan Power Armor',
        armorType: 'powerArmor'
    },
    {
        name: 'Merlion Warrior Armor',
        damageAbsorbtion: 4,
        weight: 12,
        cost: 15000,
        agilityMod: 2,
        perceptionMod: 2,
        strengthMod: 2,
        description: 'The fabled merlion warrior armor frame grants a balanced bonus to visual prowess, mobility and strength',
        armorType: 'powerArmor'
    },
];

const integratedSystems:IntegratedSystem[] = [
    {
        name: 'Breathing apparatus',
        description: 'allows the user to breathe air from an oxygen tank, lasts up to 4 hours of use. Can be switched on and off at will. Can be refueled for 100 credits',
        weight: 2,
        cost: 3000,
        damageAbsorbtion: 0,
        abilityModifiers: [],
        stack: 1,
    },
    {
        name: 'Hermetic seal',
        description: 'Makes the armor air tight and pressure resistant to up to 1000 pascal (~10x sea level earth atmosphere). Does not include gas mask',
        weight: 1,
        cost: 8000,
        damageAbsorbtion: 0,
        abilityModifiers: [],
        stack: 1,
    },
    {
        name: 'Radiation shield',
        description: 'Armor includes radiation protection, gain +2 radiation shield while inside armor, reduces damage absorbtion by 1 due to gold and lead being soft',
        weight: 3,
        cost: 6000,
        damageAbsorbtion: -1,
        abilityModifiers: [],
        stack: 1,
    },
    {
        name: 'Strength booster',
        description: 'Increases strength booster, can be stacked up to 3 times',
        weight: 4,
        cost: 3000,
        damageAbsorbtion: 0,
        abilityModifiers: [
            {
                ability: 'strength',
                modifier: 1,
            }
        ],
        stack: 3,
    },
    {
        name: 'Accelerator',
        description: 'Increases movement speed by 1',
        weight: 10,
        cost: 5000,
        damageAbsorbtion: 0,
        abilityModifiers: [],
        stack: 1,
    },
    {
        name: 'Mule Servos',
        description: 'Improves carrying capacity, you count as 2 strengths higher for carrying capacity, can be stacked twice',
        weight: 3,
        cost: 3000,
        damageAbsorbtion: 0,
        abilityModifiers: [],
        stack: 2,
    },
    {
        name: 'Hydrophobic coating',
        description: 'Protects the armor from water, salt water and most liquids that would damage the armor',
        weight: 1,
        cost: 7000,
        damageAbsorbtion: 0,
        abilityModifiers: [],
        stack: 1,
    },
    {
        name: 'Inertial Stabilizer',
        description: 'Armor gives full damage absorbtion from fall and crash damage',
        weight: 10,
        cost: 12000,
        damageAbsorbtion: 0,
        abilityModifiers: [],
        stack: 1,
    },
    {
        name: 'Plate polarizer',
        description: 'Power armor is not disabled by electrical damage',
        weight: 4,
        cost: 8000,
        damageAbsorbtion: 0,
        abilityModifiers: [],
        stack: 1
    }
];

export { bodySuits, armorPlates, powerArmors, integratedSystems }
