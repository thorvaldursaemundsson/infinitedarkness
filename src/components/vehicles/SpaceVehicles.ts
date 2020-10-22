import { HyperMatter, Electricity, Synthoil, RocketFuel, Vehicle, MicroFusionCell, MicroFusionThruster, SmallHabitatSection } from "./Vehicles";

const SpaceVehicles: Vehicle[] = [
    {
        name: 'rocketship',
        medium: ['air', 'space'],
        passengers: 4,
        cargoKg: 10000,
        fuelType: [RocketFuel],
        range: 0,
        topSpeed: 24000,
        acceleration: 45,
        cost: 450000000,
        description: 'rocket ship capable of taking off and landing on any planet with less than 3g atmosphere, space capable, radiation shield for interplanetary travel, single use, mostly used for getting off planets with heavy gravity and without oxygen atmosphe',
        parts: []
    },
    {
        name: 'spaceplane',
        medium: ['air', 'space'],
        passengers: 4,
        cargoKg: 10000,
        fuelType: [Synthoil, RocketFuel],
        range: 0,
        topSpeed: 36000,
        acceleration: 40,
        cost: 900000000,
        description: 'hypersonic airplane with rocket switch, capable of both flying through air and space, only needs refuel and basic service after every use. Sufficient for getting into orbit from a runway and back again',
        parts: []
    },
    {
        name: 'Escape pod',
        medium: ['space', 'air'],
        passengers: 2,
        fuelType: [],
        range: 0,
        topSpeed: 0,
        acceleration: 0,
        description: 'keeps up to two passengers in cryostasis, considered safe for up to 1 year, contains a parachute so if it hits an atmosphere it will land safely. Air for 1 day prior to cryostasis.',
        cost: 10000,
        cargoKg: 100,
        parts: []
    },
    {
        name: 'Ferry Class Spaceship',
        medium: ['space'],
        passengers: 10,
        cargoKg: 100000,
        fuelType: [Electricity],
        range: 0,
        topSpeed: 2008000,
        acceleration: 3,
        cost: 10000000,
        description: 'small sized space ship, fitted with micro fusion power, capable of maintaining 0.3g for 8 days without refueling, ' +
            'virtually unlimited range within a solar system. ' +
            '380 metric ton dry mass 18m long, 7m radius, 11 metric ton fusion fuel',
        parts: [MicroFusionCell, MicroFusionThruster, MicroFusionThruster, MicroFusionThruster, MicroFusionThruster, MicroFusionThruster, MicroFusionThruster, MicroFusionThruster, MicroFusionThruster, MicroFusionThruster, SmallHabitatSection, SmallHabitatSection, SmallHabitatSection]
    },
    {
        name: 'Freighter Class Spaceship',
        medium: ['space'],
        passengers: 100,
        cargoKg: 1000000,
        fuelType: [Electricity],
        range: 0,
        topSpeed: 2600000,
        acceleration: 3,
        cost: 30000000,
        description: 'medium sized space ship, fitted with micro fusion power, capable of maintaining 0.3g for 10 days without refueling, ' +
            'virtually unlimited range within a solar system. ' +
            '3,100 metric ton dry mass, 42m long, 19m radius 108 metric ton fusion fuel',
        parts: []
    },
    {
        name: 'Interceptor Class Spaceship',
        medium: ['space'],
        passengers: 80,
        cargoKg: 500000,
        fuelType: [Electricity],
        range: 0,
        topSpeed: 26000000,
        acceleration: 5,
        cost: 32000000,
        description: 'medium sized space ship, fitted with micro fusion power, capable of maintaining 0.5g for 60 days without refueling, ' +
            'virtually unlimited range within a solar system, but in particular designed for extreme range and interception. ' +
            '3,100 metric ton dry mass, 42m long, 19m radius, 50000 metric ton fusion fuel',
        parts: []
    },
    {
        name: 'Cruiser Class Spaceship',
        medium: ['space'],
        passengers: 1000,
        cargoKg: 10000000,
        fuelType: [Electricity],
        range: 0,
        topSpeed: 2600000,
        acceleration: 3,
        cost: 150000000,
        description: 'large space ship, fitted with small fusion power, capable of maintaining 0.3g for 10 days without refueling, ' +
            'virtually unlimited range within a solar system. ' +
            '24,720 metric ton dry mass, 170m long, 30m radius, 820 metric ton fusion fuel',
        parts: []
    },
    {
        name: 'Battleship Class Spaceship',
        medium: ['space'],
        passengers: 10000,
        cargoKg: 100000000,
        fuelType: [Electricity],
        range: 0,
        topSpeed: 2600000,
        acceleration: 3,
        cost: 750000000,
        description: 'huge space ship, fitted with fusion power, capable of maintaining 0.3g for 10 days without refueling, ' +
            'virtually unlimited range within a solar system. ' +
            '180,000 metric ton dry mass, 480m long, 61m radius, 8200 metric ton fusion fuel',
        parts: []
    },
    {
        name: 'Hyperspace Class Spaceship',
        medium: ['space', 'hyperspace'],
        passengers: 10000,
        cargoKg: 100000000,
        fuelType: [Electricity, HyperMatter],
        range: 0,
        topSpeed: 2600000,
        acceleration: 3,
        cost: 1500000000,
        description: 'huge space ship, fitted with fusion power, capable of maintaining 0.3g for 10 days without refueling,' +
            ' virtually unlimited range within a solar system, can enter hyperspace and travel up to 50 times the speed of light. ' +
            '200,000 metric ton dry mass, 480m long, 70m radius, 8300 metric ton fusion fuel',
        parts: []
    },
];

export default SpaceVehicles;