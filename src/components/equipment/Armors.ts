import Item from "./Item";


interface IArmor extends Item {
    armorPenalty: number;
    damageReduction: number;
}

class Armor implements IArmor {
    armorPenalty: number;
    damageReduction: number;
    weight: number;
    value: number;
    description?: string | undefined;
    name: string;
    constructor(name: string, armorPenalty: number, damageReduction: number, weight: number, value: number, description: string | undefined) {
        this.name = name;
        this.armorPenalty = armorPenalty;
        this.damageReduction = damageReduction;
        this.weight = weight;
        this.value = value;
        this.description = description;
    }
}


const Armors: Armor[] = [


    {
        name: "heavy jacket",
        damageReduction: 1,
        armorPenalty: -2,
        value: 2000,
        weight: 4,
        description: "most winter jackets, thick layers of clothing, etc counts in this category. also tends to protect against exposure",
    },
    {
        name: "soft kevlar vest",
        damageReduction: 3,
        armorPenalty: 0,
        value: 4000,
        weight: 1,
        description: "soft thin kevlar fabric made from nylon-like polymers gives some protection",
    },
    {
        name: "ceramic plated kevlar body armor",
        damageReduction: 6,
        armorPenalty: -1,
        value: 10000,
        weight: 3,
        description: "soft kevlar over light ceramic plates gives strong protection from all sources",
    },
    {
        name: "carbon polymer suit",
        damageReduction: 5,
        armorPenalty: 0,
        value: 9000,
        weight: 2,
        description: "thin and flexible and very strong vest that offers maximum protection without interfering with any movement and can be worn under clothes",
    },
    {
        name: "Powered exoskeleton",
        damageReduction: 4,
        armorPenalty: 1,
        value: 12000,
        weight: 5,
        description: "Exoskeletal frame worn over body that helps movement and offers some protection, increases strength by +1 up to 7",
    },
    {
        name: "Powered Armor",
        damageReduction: 8,
        armorPenalty: 0,
        value: 22000,
        weight: 7,
        description: "Heavy exoskeletal frame with cermic plates to offer additional protection, increases strength by +2 up to 8",
    },
    {
        name: "Personal Tank Suit",
        damageReduction: 12,
        armorPenalty: -2,
        value: 36000,
        weight:9,
        description: "A personal tank suit is more like a person shaped tank you enter than a body armor, offers complete environmental protection, increases strength by +3 up to 9",
    },
    {
        name: "Merlion warrior armor",
        damageReduction: 9,
        armorPenalty: 2,
        value: 52000,
        weight: 4,
        description: "Light exoskeletal frame covered by a complex and extremely durable alloy wireframe, offers substantial movement benefits as well as +3 strength and +2 perception",
    },

];

export default Armors;