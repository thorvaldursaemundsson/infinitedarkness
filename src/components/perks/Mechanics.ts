import { PerkTemplate } from "../general/Perks";

const VehicleMechanic = new PerkTemplate({
    name: 'Vehicle Mechanic',
    skill: 'mechanics',
    level: 1,
    description: 'Pick one vehicle type (bike, car, boat, ship, spaceship, airplane, spaceplane, ftl), you gain +5 to mechanics roll on that. '
});

export const MechanicsPerks = [VehicleMechanic];