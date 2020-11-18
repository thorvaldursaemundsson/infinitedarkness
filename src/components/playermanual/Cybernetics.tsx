import React from 'react';
import Section from './Section';

const Cybernetics: React.FC = () => <Section title='Cybernetics'>
    <h1>Cybernetics</h1>
    <p>Cybernetics is often used to replace broken organs and missing limbs, they can also be used to augument or enhance functionality.
    However cybernetics may be superior to living flesh it always comes with several large drawbacks. For that reason many choose cybernetics as a last resort.
        <br /> When a device interfaces with tissue directly it's referred to as a cybernetic implant, when it interfaces with an interface it's referred to as a robotic implant.</p>
    <h2>Cybernetic interface</h2>
    <p>A cybernetic interface is a small device surgically added to the body which allows nerve signals to be transmitted from and to the robotic implant.
        Cybernetic interfaces are required to control robotic body parts.
    </p>
    <ul>
        <li>Neural interface, connects directly to the brain</li>
        <li>Limb interface, connects directly to a severed limb</li>
        <li>Organ interface, connects to organs or replaces an organ</li>
        <li>Retinal interface, connects to your retina (eye is replaced by visual sensor)</li>
    </ul>
    <h2>Robotic implant</h2>
    <p>A robotic implant is the main part and is often replaceable, this is your robot hand, your optronic eye, etc.</p>
    <ul>
        <li>Artificial arm</li>
        <li>Artificial leg</li>
        <li>Brain manipulator</li>
        <li>Visual sensor</li>
        <li>Audio sensor</li>
        <li>Chemical sensor</li>
        <li>Artificial heart</li>
        <li>Weapon integration</li>
        <li>Device integration</li>
        <li>Input jacks</li>
        <li>Injector implant</li>
    </ul>
    <h2>Pure augumentation</h2>
    <p>Some augumentations are not cybernetic or robotic, these can be things like reinforced bones or skin. While they protect they also need to be maintained.</p>
    <ul>
        <li>Titan alloy reinforced bones</li>
        <li>Subdermal nanoweave</li>
    </ul>
    <h2>Drawbacks</h2>
    <p>Robotics don't regenerate on their own, in fact they break down over time and need continuous maintenance.
        Additionally they tend to be rejected by the body so specialized medicine needs to be consumed at regular times.
        And since they run on electricity there is a risk that if you run out you become impaired.</p>
</Section>


export default Cybernetics;