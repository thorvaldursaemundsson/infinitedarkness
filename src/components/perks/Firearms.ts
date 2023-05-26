import { PerkTemplate } from "../general/Perks";
const skill = 'firearms';
const HandGunSpecialization = new PerkTemplate({
    name: 'hand gun specialization',
    skill: skill,
    level: 1,
    description: 'use 1 less action point with hand guns once per turn.'
}, {
    applyTo: 'handgun',
    amount: 3
});

const HandGunExpert = new PerkTemplate({
    name: 'hand gun expert',
    skill: skill,
    level: 2,
    description: 'Requires hand gun specialization. Add +1d6 damage when using a handgun once per turn. Must be declared before rolling damage.',
});

const HandGunMaster = new PerkTemplate({
    name: 'hand gun master',
    skill: skill,
    level: 3,
    description: 'Requires hand gun expert. You have +4 to hit with hand guns.'
});

const RifleSpecialization = new PerkTemplate({
    name: 'rifle specialization',
    skill: skill,
    level: 1,
    description: 'use 1 less action point with rifles once per turn.'
}, {
    applyTo: 'rifle',
    amount: 3
});

const RifleExpert = new PerkTemplate({
    name: 'rifle expert',
    skill: skill,
    level: 2,
    description: 'Requires rifle specialization. Add +1d6 damage when using a rifle once per turn. Must be declared before rolling damage.',
});

const MachineGunSpecialization = new PerkTemplate({
    name: 'machine gun specialization',
    skill: skill,
    level: 1,
    description: 'use 1 less action point with machine guns once per turn'
}, {
    applyTo: 'machinegun',
    amount: 3
});

const MachineGunExpert = new PerkTemplate({
    name: 'machien gun expert',
    skill: skill,
    level: 2,
    description: 'Requires machine gun specialization. Add +1d6 damage when using a machine gun once per turn. Must be declared before rolling damage.',
});

const RocketLaunchersSpecialization = new PerkTemplate({
    name: 'rocket launcher specialization',
    skill: skill,
    level: 1,
    description: 'use 1 less action point with rocket launchers, grenade launchers and all guns that fire explosives once per turn'
}, {
    applyTo: 'rocketlauncher',
    amount: 3
});

const LaserSpecialization = new PerkTemplate({
    name: 'laser specialization',
    skill: skill,
    level: 1,
    description: 'use 1 less action point with laser weapons once per turn.'
}, {
    applyTo: 'lasers',
    amount: 3
});

const LaserExpert = new PerkTemplate({
    name: 'laser expert',
    skill: skill,
    level: 2,
    description: 'Requires laser specialization. Add +1d6 damage when using a laser once per turn. Must be declared before rolling damage.',
});

const PlasmaSpecialization = new PerkTemplate({
    name: 'plasma specialization',
    skill: skill,
    level: 1,
    description: 'use 1 less action point with plasma weapons once per turn'
}, {
    applyTo: 'plasma',
    amount: 3
});

const PlasmaExpert = new PerkTemplate({
    name: 'plasma expert',
    skill: skill,
    level: 2,
    description: 'Requires plasma specialization. Add +1d6 damage when using a plasma gun once per turn. Must be declared before rolling damage.',
});

const Sniper = new PerkTemplate({
    name: 'sniper',
    skill: skill,
    level: 1,
    description: 'half range penalties, stacks with all other sources multiplicatively'
});

const Marksman = new PerkTemplate({
    name: 'marksman',
    skill: skill,
    level: 2,
    description: 'half range penalties, stacks with all other sources multiplicatively'
});

const DeadEye = new PerkTemplate({
    name: 'deadeye',
    skill: skill,
    level: 3,
    description: 'half range penalties, stacks with all other sources multiplicatively'
});

const DeadlyShot = new PerkTemplate({
    name: 'deadly shot',
    skill: skill,
    level: 2,
    description: 'you are particularly deadly, add +1d6 damage when making a snipe shot. Requires Sniper perk'
});

const AnnihilatingShot = new PerkTemplate({
    name: 'annihilating shot',
    skill: skill,
    level: 3,
    description: 'you are particularly deadly, add +1d6 damage when making a snipe shot. Requires DeadlyShot perk '
});


const FastShooter = new PerkTemplate({
    name: 'fast shooter',
    skill: skill,
    level: 2,
    description: 'you may use burst fire mode on semi-automatic firearms'
});

const Suppressor = new PerkTemplate({
    name: 'suppressor',
    skill: skill,
    level: 1,
    description: 'when you use oppressive fire on a target you can lock them down. They take -5 to all non-defensive rolls even if they dont get hit.'
});

const RapidReload = new PerkTemplate({
    name: 'rapid reload',
    skill: skill,
    level: 1,
    description: 'Reloading a firearm uses 2 less action points, to a minimum of 1.'
});

const HeavyHandle = new PerkTemplate({
    name: 'heavy handle',
    skill: skill,
    level: 1,
    description: 'your strength counts as +4 higher for the purposes of meeting strength requirements on firearms'
});

const StraferShooter = new PerkTemplate({
    name: 'strafer shooter',
    skill: skill,
    level: 2,
    description: 'Using firearms no longer interrupts move action.',
});

const RapidBoltAction = new PerkTemplate({
    name: 'Rapid Bolt Action',
    skill: skill,
    level: 2,
    description: 'If you use a bolt action firearm you use 1 less action point once per turn.',
});

export const FirearmsPerks = [HandGunSpecialization, HandGunExpert, HandGunMaster, RifleSpecialization, RifleExpert, MachineGunSpecialization, MachineGunExpert, RocketLaunchersSpecialization,
    LaserSpecialization, LaserExpert, PlasmaSpecialization, PlasmaExpert, Sniper, Marksman, DeadEye, Suppressor, RapidReload, StraferShooter, RapidBoltAction, HeavyHandle, FastShooter, DeadlyShot, AnnihilatingShot];