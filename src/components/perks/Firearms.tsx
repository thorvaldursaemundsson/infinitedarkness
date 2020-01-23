import { PerkTemplate } from "../Perks";

export const HandGunSpecialization = new PerkTemplate({
    name: 'hand gun specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with single handheld guns'
},{
    applyTo: 'handgun',
    amount: 3
});

export const RifleSpecialization = new PerkTemplate({
    name: 'rifle specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with rifles'
},{
    applyTo: 'rifle',
    amount: 3
});

export const MachineGunSpecialization = new PerkTemplate({
    name: 'machine gun specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with portable and stationary machine guns'
},{
    applyTo: 'machinegun',
    amount: 3
});

export const RocketLaunchersSpecialization = new PerkTemplate({
    name: 'rocket launcher specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with rocket launchers, grenade launchers and all guns that fire explosives'
},{
    applyTo: 'rocketlauncher',
    amount: 3
});

export const LaserSpecialization = new PerkTemplate({
    name: 'laser specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with all laser based weapons'
},{
    applyTo: 'lasers',
    amount: 3
});

export const PlasmaSpecialization = new PerkTemplate({
    name: 'plasma specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with all plasma based weapons'
},{
    applyTo: 'plasma',
    amount: 3
});