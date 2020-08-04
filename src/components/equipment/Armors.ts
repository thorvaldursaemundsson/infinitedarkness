export interface ArmorData {
    name: string;
    damageAbsorbtion: number;
    weight: number;
    cost: number;
    agilityMod: number;
    description: string;
    armorType:string;
}

export interface BodySuit extends ArmorData {
}

export interface ArmorPlate extends ArmorData {
}

export interface PowerArmor extends ArmorData {
    strengthMod: number;
    perceptionMod: number;
}


const bodySuits: BodySuit[] = [
    {
        name: 'Nylon Polyester Composite',
        damageAbsorbtion: 3,
        weight: 30,
        cost: 3500,
        agilityMod: -1,
        description: 'Composite armor made primarily of nylon and polyester, thick layers give stab and cut protection',
        armorType: 'bodySuit'
    },
    {
        name: 'Kevlar',
        damageAbsorbtion: 2,
        weight: 15,
        cost: 4500,
        agilityMod: 0,
        description: 'Heat resistant synthetic fiber, woven into a flexible and light body suit',
        armorType: 'bodySuit'
    },
    {
        name: 'Carbon Reinforced Kevlar',
        damageAbsorbtion: 3,
        weight: 25,
        cost: 6000,
        agilityMod: -1,
        description: 'An incredibly strong weave of carbon fiber, kevlar and nylon and polyester. Gives incredible defense',
        armorType: 'bodySuit'
    },
    {
        name: 'Carbon Fiber Weave',
        damageAbsorbtion: 5,
        weight: 40,
        cost: 12000,
        agilityMod: -2,
        description: 'An incredibly strong weave of carbon fiber, kevlar and nylon and polyester. Gives incredible defense',
        armorType: 'bodySuit'
    },
    {
        name: 'Nanotube Superstructure Fiber',
        damageAbsorbtion: 6,
        weight: 20,
        cost: 40000,
        agilityMod: -1,
        description: 'A kevlar body suit reinforced with graphene nanotube super structures which gives protection against most attacks',
        armorType: 'bodySuit'
    }
];

const armorPlates: ArmorPlate[] = [
    {
        name: 'Hard Plast Plates',
        damageAbsorbtion: 2,
        weight: 10,
        cost: 2500,
        agilityMod: -1,
        description: 'Hard but elastic plastic plates which reflect impacts, very durable',
        armorType: 'armorPlate'
    },
    {
        name: 'Ceramic Plates',
        damageAbsorbtion: 4,
        weight: 12,
        cost: 3500,
        agilityMod: -1,
        description: 'Very hard ceramic plates which absorb a lot of damage, however each time the damage is exceeded they lose 1 damage absorbtion. These are replaced after every combat',
        armorType: 'armorPlate'
    },
    {
        name: 'Steel Plates',
        damageAbsorbtion: 5,
        weight: 16,
        cost: 4000,
        agilityMod: -2,
        description: 'High carbon hardened steel plates, very strong but also heavy',
        armorType: 'armorPlate'
    },
    {
        name: 'Titan Alloy Plates',
        damageAbsorbtion: 6,
        weight: 16,
        cost: 8000,
        agilityMod: -2,
        description: 'An alloy of titanium and gold, significantly stronger than steel. And significantly more expensive',
        armorType: 'armorPlate'
    },
    {
        name: 'Hyper Nanostructure Plates',
        damageAbsorbtion: 7,
        weight: 12,
        cost: 12000,
        agilityMod: -1,
        description: 'Titan alloy reinforced by a weave of graphene nanotube super structure',
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
        weight: 16,
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
        weight: 18,
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
        weight: 20,
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
        name: 'Merlion Warrior Armor',
        damageAbsorbtion: 4,
        weight: 20,
        cost: 15000,
        agilityMod: 2,
        perceptionMod: 2,
        strengthMod: 2,
        description: 'The fabled merlion warrior armor frame grants a balanced bonus to visual prowess, mobility and strength',
        armorType: 'powerArmor'
    },
]

export { bodySuits, armorPlates, powerArmors }
