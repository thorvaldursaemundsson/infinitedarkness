import { Synthoil, Electricity, Vehicle, IRollAmount, IDamageAmount } from "./Vehicles";

export const airVehicleParts:string[] = ['cockpit nose', 'cockpit window', 'side window', 'enterance',
'front landing gear', 'hind left landing gear', 'hind right landing gear', 'pitch stabilizer', 'pitch elevator',
'yaw stabilizer', 'yaw elevator', 'front or left engine','front or right engine','front or left propeller blades/jet turbine',
'front or right propeller blades/jet turbine','left or front engine mount','right or front engine mount','left wing', 'left elevator',
'right wing', 'right elevator', 'left spoiler', 'right spoiler', 'front fuselage', 'mid fuselage', 'hind fuselage',
'left battery core/fuel tank','right battery core/fuel tank', 'computer', 'antenna', 'speaker', 'cockpit systems display', 'navigation controls',
'radar display', 'radar', 'navigation display','control wheel','throttle lever', 'altitude meter','gyrometer','compass','internal camera','external camers'];

export const rollAmounts:IRollAmount[] = [
    {
        text:'Land safely with 15 points to spare',
        numberOf1d100: 0,
        sidesPerDice: 0,
    },
    {
        text: 'Land safely',
        numberOf1d100: 1,
        sidesPerDice:1,
    },
    {
        text: 'Crashland safely',
        numberOf1d100: 2,
        sidesPerDice:4,
    },
    {
        text: 'Crashland violently',
        numberOf1d100: 4,
        sidesPerDice:6,
    },
    {
        text: 'Crashland catastrophically',
        numberOf1d100: 10,
        sidesPerDice:6,
    }
];

export const airVehicleDamageTexts:IDamageAmount[] = [
    {
        damageAmountNumber: 0,
        damageText: 'pristine',
    },
    {
        damageAmountNumber: 1,
        damageText: 'worn',
    },
    {
        damageAmountNumber: 2,
        damageText: 'Slightly damaged',
    },
    {
        damageAmountNumber: 3,
        damageText: 'Moderately damaged',
    },
    {
        damageAmountNumber: 4,
        damageText: 'Severely damaged',
    },
    {
        damageAmountNumber: 5,
        damageText: 'Extremely damaged',
    },
    {
        damageAmountNumber: 6,
        damageText: 'Obliterated',
    }
];

const AirVehicles: Vehicle[] = [
    {
        name: 'tiny airplane',
        medium: ['air'],
        passengers: 2,
        cargoKg: 50,
        fuelType: [Electricity],
        range: 600,
        topSpeed: 130,
        acceleration: 20,
        cost: 35000,
        description: 'tiny electric airplane with high speed and low range',
        parts: [],
    },
    {
        name: 'small cargoplane',
        medium: ['air'],
        passengers: 4,
        cargoKg: 200,
        fuelType: [Electricity],
        range: 700,
        topSpeed: 120,
        acceleration: 18,
        cost: 80000,
        description: 'small electric cargoplane with low range and decent speed',
        parts: [],
    },
    {
        name: 'medium cargoplane',
        medium: ['air'],
        passengers: 10,
        cargoKg: 2000,
        fuelType: [Electricity],
        range: 800,
        topSpeed: 120,
        acceleration: 18,
        cost: 160000,
        description: 'medium electric cargoplane with low range and decent speed',
        parts: [],
    },
    {
        name: 'large cargoplane',
        medium: ['air'],
        passengers: 25,
        cargoKg: 6200,
        fuelType: [Electricity],
        range: 900,
        topSpeed: 110,
        acceleration: 15,
        cost: 640000,
        description: 'medium electric cargoplane with low range and decent speed',
        parts: [],
    },
    {
        name: 'huge electroplane',
        medium: ['air'],
        passengers: 100,
        cargoKg: 500,
        fuelType: [Electricity],
        range: 1500,
        topSpeed: 130,
        acceleration: 22,
        cost: 50000000,
        description: 'large airplane capable of medium range flight',
        parts: [],
    },
    {
        name: 'airship',
        medium: ['air'],
        passengers: 200,
        cargoKg: 4000,
        fuelType: [Electricity],
        range: 1000000,
        topSpeed: 140,
        acceleration: 24,
        cost: 120000000,
        description: 'massive electric airplane fitted with micro fusion capable of staying airborne for months',
        parts: [],
    },
    {
        name: 'fighterplane',
        medium: ['air'],
        passengers: 2,
        cargoKg: 10,
        fuelType: [Electricity, Synthoil],
        range: 600,
        topSpeed: 410,
        acceleration: 40,
        cost: 40000000,
        description: 'super sonic electric airplane, switches to jetfuel when going super sonic, fitted with laser cannons',
        parts: [],
    },
    {
        name: 'hyperplane',
        medium: ['air'],
        passengers: 2,
        cargoKg: 10,
        fuelType: [Synthoil],
        range: 1200,
        topSpeed: 3400,
        acceleration: 45,
        cost: 60000000,
        description: 'hyper sonic airplane, uses synthetic jetfuel, capable of hypersonic cruise',
        parts: [],
    },
];

export default AirVehicles;