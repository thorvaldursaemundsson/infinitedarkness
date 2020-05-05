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
        weight: 4000,
        description: "Most winter jackets, thick layers of clothing, etc counts in this category. Also tends to protect against exposure",
    },
    {
        name: "soft kevlar vest",
        damageReduction: 3,
        armorPenalty: 0,
        value: 4000,
        weight: 1000,
        description: "Soft thin kevlar fabric made from nylon-like polymers gives some protection, comes with combat helmet.",
    },
    {
        name: "ceramic plated kevlar body armor",
        damageReduction: 6,
        armorPenalty: -1,
        value: 10000,
        weight: 3000,
        description: "Soft kevlar over light ceramic plates gives strong protection from all sources, comes with combat helmet with face guard.",
    },
    {
        name: "carbon polymer suit",
        damageReduction: 5,
        armorPenalty: 0,
        value: 9000,
        weight: 2000,
        description: "thin and flexible and very strong vest that offers maximum protection without interfering with any movement and can be worn under clothes",
    },
    {
        name: "Powered exoskeleton",
        damageReduction: 4,
        armorPenalty: 1,
        value: 12000,
        weight: 5000,
        description: "Exoskeletal frame worn over body that helps movement and offers some protection, increases strength by +1 up to 7",
    },
    {
        name: "Powered Armor",
        damageReduction: 8,
        armorPenalty: 0,
        value: 22000,
        weight: 7000,
        description: "Heavy exoskeletal frame with cermic plates to offer additional protection, increases strength by +2 up to 8",
    },
    {
        name: "Personal Tank Suit",
        damageReduction: 12,
        armorPenalty: -2,
        value: 36000,
        weight:9000,
        description: "A personal tank suit is more like a person shaped tank you enter than a body armor, offers complete environmental protection, increases strength by +3 up to 9",
    },
    {
        name: "Merlion warrior armor",
        damageReduction: 9,
        armorPenalty: 2,
        value: 52000,
        weight: 4000,
        description: "Light exoskeletal frame covered by a complex and extremely durable alloy wireframe, offers substantial movement benefits as well as +3 strength and +2 perception",
    },

];

export default Armors;