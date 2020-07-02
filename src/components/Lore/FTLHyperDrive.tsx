import React from "react";
import Section from "../playermanual/Section";

const FTLHyperDrive: React.FC = () => {
    return <>
        <h2>The FTL Hyperdrive</h2>
        <h5>What is it?</h5>
        <p>The FTL Hyperdrive is the propulsion which allows humans to travel faster than the speed of light and thus visit other stars within a human lifetime.<br />
            It works by shortening the space in front of the ship and lengthening it behind it, as a result a "hyperspace" bubble is formed around the ship and moves it through normal space.<br />
            Inside the bubble there is no acceleration and thus no gravity.<br />
        </p>
        <h5>Fuel</h5>
        <p>The FTL Hyperdrive uses a fuel called "Exotic Hypermatter", it is an extremely hard to fabricate material with exotic properties such as negative mass (not to be confused with anti-matter which has normal mass and opposite charge).<br />
        Exotic Hypermatter requires an extreme amount of energy to make, as such it is only made in huge stellar factories powered by the sun.<br />
        While the fuel is extremely expensive almost none is lost in FTL travel, most inefficiencies occur when the hyperspace bubble interacts with strong tidal forces from gravity fields, trying to fly through a planet would cause the fuel to be immediately depleted and the bubble to collapse, dropping out of FTL speed.<br />
        A normal FTL journey will only expend a negligable amount of fuel while entering hyperspace, however bad navigators and pilots can cause the journey to be more costly.
        </p>
        <h5>Speed</h5>
        <p>Most ships can travel up to 54x the speed of light which seems to be a limit on the technology, above this speed fuel starts to drain.<br />
        To create a bubble takes some time to start, typically 1 hour or more, after that the ship does not reach maximum speed immediately, instead it starts slowly and increases exponentially until it reaches maximum speed.<br />
        Merlion ships are somehow able to travel even faster, 216x the speed of light, how this is done is not yet known. Very little about Merlion technology is understood, not because they are secretive but because it is hard.
        </p>
        <h5>Hazards</h5>
        <p>There are many hazards involved with FTL travel, a poorly designed ship or badly routed journey can easily spell death for the crew.<br />
        If the hyperspace bubble is formed prematurely then it becomes open to hyper excited cosmic radiation, this is the result of interaction between the rapidly collapsing space in front of the ship and cosmic radiation.<br />
        Any matter caught in the hyperspace bubble on the journey may drain the fuel, if this happens the ship might become stranded deep in interstellar space, as such it's extremely important that navigation is done carefully, even so there's always some risk that a journey may stop too early.<br />
        Since there can be no gravitation on board while in hyperspace crew may experience muscle mass loss and bone density loss<br />
        While in the bubble the ship is causally unlinked from the rest of the universe, it's impossible to communicate with such a ship, a crew may become lonely, depression is a high risk
        </p>
        <h5>Communication</h5>
        <p>A ship with a hyperdrive is the fastest known object in the universe, all inter-star communication must happen via these ships, ships travelling between the stars often contain news from their origin, this is the only direct contact systems have with each other.<br />
        Transport ships are always empowered to represent their origin, they must make decisions on their own, communication back is not possible until they return.<br />
        Distant systems are often very isolated as a result</p>
        <Section title='badly drawn sketches of FTL space ships'>
            <br />
            <img src='/infinitedarkness/ftl_sketch_3.jpg' />
            <img src='/infinitedarkness/ftl_sketch_4.jpg' />
        </Section>

    </>;
}

export default FTLHyperDrive;