import { PerkTemplate } from "../general/Perks";

const Shadow = new PerkTemplate({
    name: 'shadow',
    skill: 'stealth',
    level: 1,
    description: 'Your character gains +3 to stealth rolls when following someone while remaining hidden'
}, {
    applyTo: 'shadow',
    amount: 3
});

const Camouflage = new PerkTemplate({
    name: 'camouflage',
    skill: 'stealth',
    level: 1,
    description: 'Your character is able to use their surroundings to hide in plain sight, +3 to stealth while hiding'
}, {
    applyTo: 'camouflage',
    amount: 3
});

const Detection = new PerkTemplate({
    name: 'detection',
    skill: 'stealth',
    level: 1,
    description: 'Your character is harder to hide from, you gain +3 vs stealth'
}, {
    applyTo: 'detection',
    amount: 3
});

const SixthSense = new PerkTemplate({
    name: 'sixth sense',
    skill: 'stealth',
    level: 2,
    description: 'You gain +3 vs stealth and automatically use your second defense value when attacked out of combat while you are awake and nothing prevents your movement.'
}, {
    applyTo: 'detection',
    amount: 3
});

const SneakAttack = new PerkTemplate({
    name: 'sneak attack',
    skill: 'stealth',
    level: 1,
    description: 'you gain +2 to your sequence and +2 damage on one attack (both combat and firearms) against anyone who is limited to passive defense'
}, {
    applyTo: 'sequence',
    amount: 2
});

const Assassination = new PerkTemplate({
    name: 'assassination',
    skill: 'stealth',
    level: 2,
    description: 'you gain +1d6 damage on one attack (both combat and firearms) on anyone who is limited to base defense. Requires Sneak Attack'
}, {
    applyTo: '_',
    amount: 0
});

const CriticalHit = new PerkTemplate({
    name: 'critical hit',
    skill: 'stealth',
    level: 3,
    description: 'On the first turn of combat, you add +1d6 damage on one attack (both combat and firearms) on anyone who has not had their turn yet. Requires Assassination'
}, {
    applyTo: '_',
    amount: 0
});

const KillingBlow = new PerkTemplate({
    name: 'killing blow',
    skill: 'stealth',
    level: 4,
    description: 'When you deal damage with firearms or combat against someone you are hidden from you can add +1d6 damage. Requires Ciritcal Hit'
}, {
    applyTo: '_',
    amount: 0
});

export const StealthPerks = [Shadow, Camouflage, Detection, SixthSense, SneakAttack, Assassination, CriticalHit, KillingBlow];