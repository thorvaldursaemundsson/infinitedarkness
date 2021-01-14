import { PerkTemplate } from "../general/Perks";

const HandGunSpecialization = new PerkTemplate({
    name: 'hand gun specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with single handheld guns'
}, {
    applyTo: 'handgun',
    amount: 3
});

const RifleSpecialization = new PerkTemplate({
    name: 'rifle specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with rifles'
}, {
    applyTo: 'rifle',
    amount: 3
});

const MachineGunSpecialization = new PerkTemplate({
    name: 'machine gun specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with portable and stationary machine guns'
}, {
    applyTo: 'machinegun',
    amount: 3
});

const RocketLaunchersSpecialization = new PerkTemplate({
    name: 'rocket launcher specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with rocket launchers, grenade launchers and all guns that fire explosives'
}, {
    applyTo: 'rocketlauncher',
    amount: 3
});

const LaserSpecialization = new PerkTemplate({
    name: 'laser specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with all laser based weapons'
}, {
    applyTo: 'lasers',
    amount: 3
});

const PlasmaSpecialization = new PerkTemplate({
    name: 'plasma specialization',
    skill: 'firearms',
    level: 1,
    description: 'gain +3 to hit with all plasma based weapons'
}, {
    applyTo: 'plasma',
    amount: 3
});

const Sniper = new PerkTemplate({
    name: 'sniper',
    skill: 'firearms',
    level: 1,
    description: 'half range penalties, stacks with all other sources multiplicatively'
});

const Marksman = new PerkTemplate({
    name: 'marksman',
    skill: 'firearms',
    level: 2,
    description: 'half range penalties, stacks with all other sources multiplicatively'
});

const DeadEye = new PerkTemplate({
    name: 'deadeye',
    skill: 'firearms',
    level: 3,
    description: 'half range penalties, stacks with all other sources multiplicatively'
});

const DeadlyShot = new PerkTemplate({
    name: 'deadly shot',
    skill: 'firearms',
    level: 2,
    description: 'you are particularly deadly, you may either add a +3 to hit or a +1d6 damage when making a snipe shot. Must be declared in advance. Requires Sniper perk'
});

const AnnihilatingShot = new PerkTemplate({
    name: 'deadly shot',
    skill: 'firearms',
    level: 3,
    description: 'you are particularly deadly, you may either add a +6 to hit or a +1d10 damage when making a snipe shot. Must be declared in advance. Requires and replaces DeadlyShot perk '
});


const FastShooter = new PerkTemplate({
    name: 'fast shooter',
    skill: 'firearms',
    level: 1,
    description: 'when using semi burst or burst you hit with 1 additional bullet'
});

const Suppressor = new PerkTemplate({
    name: 'suppressor',
    skill: 'firearms',
    level: 1,
    description: 'when you use oppressive fire on a target they take -5 to all rolls even if they dont get hit'
});

const RapidReload = new PerkTemplate({
    name: 'rapid reload',
    skill: 'firearms',
    level: 1,
    description: 'you may reload as a move action rather than an action'
});

const HeavyHandle = new PerkTemplate({
    name: 'heavy handle',
    skill: 'firearms',
    level: 1,
    description: 'your strength counts as +2 higher for the purposes of meeting strength requirements on firearms'
});

const StraferShooter = new PerkTemplate({
    name: 'strafer shooter',
    skill: 'firearms',
    level: 2,
    description: 'No movement or defense penalties from burst. Oppressive fire only apply burst penalties to movement and defense.'
});

export const FirearmsPerks = [HandGunSpecialization, RifleSpecialization, MachineGunSpecialization, RocketLaunchersSpecialization,
    LaserSpecialization, PlasmaSpecialization, Sniper, Marksman, DeadEye, Suppressor, RapidReload, StraferShooter, HeavyHandle, FastShooter, DeadlyShot, AnnihilatingShot];