import { PerkTemplate } from "../Perks";

export const HandGunSpecialization = new PerkTemplate({
    name: 'hand gun specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with single handheld guns'
}, {
    applyTo: 'handgun',
    amount: 3
});

export const RifleSpecialization = new PerkTemplate({
    name: 'rifle specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with rifles'
}, {
    applyTo: 'rifle',
    amount: 3
});

export const MachineGunSpecialization = new PerkTemplate({
    name: 'machine gun specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with portable and stationary machine guns'
}, {
    applyTo: 'machinegun',
    amount: 3
});

export const RocketLaunchersSpecialization = new PerkTemplate({
    name: 'rocket launcher specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with rocket launchers, grenade launchers and all guns that fire explosives'
}, {
    applyTo: 'rocketlauncher',
    amount: 3
});

export const LaserSpecialization = new PerkTemplate({
    name: 'laser specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with all laser based weapons'
}, {
    applyTo: 'lasers',
    amount: 3
});

export const PlasmaSpecialization = new PerkTemplate({
    name: 'plasma specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with all plasma based weapons'
}, {
    applyTo: 'plasma',
    amount: 3
});

export const Sniper = new PerkTemplate({
    name: 'sniper',
    skill: 'firearms',
    level: 1,
    description: 'half range penalties, stacks with all other sources multiplicatively'
});

export const Marksman = new PerkTemplate({
    name: 'marksman',
    skill: 'firearms',
    level: 2,
    description: 'half range penalties, stacks with all other sources multiplicatively'
});

export const FastShooter = new PerkTemplate({
    name: 'fast shooter',
    skill: 'firearms',
    level: 1,
    description: 'when using semi burst or burst you hit with 1 additional bullet'
});

export const Suppressor = new PerkTemplate({
    name: 'suppressor',
    skill: 'firearms',
    level: 1,
    description: 'when you use oppressive fire on a target they take -5 to all rolls even if they dont get hit'
});

export const FirearmsPerks = [HandGunSpecialization, RifleSpecialization, MachineGunSpecialization, RocketLaunchersSpecialization, 
    LaserSpecialization, PlasmaSpecialization, Sniper, Marksman, Suppressor];