import React, { useState } from "react";
import Section from "./Section";


const Wealth: React.FC = () => {
    return <Section title='Wealth'>
        <h2>Wealth</h2>
        <i>Personal wealth varies greatly, while there are ultra rich people players may not start as one. In addition, due to the lack of widespread extreme poverty players will generally start of with wealth in similar orders of magnitude.</i>
        <h3>Starting wealth</h3>
        <p>Every character starts off with a flat 1d100 x 1d100 c </p>
        <WealthRoller />
        <h3>Wealth from age</h3>
        <p>Additionally your character gets money from working and saving up over time. Gaining different amounts at different stages</p>
        <li>
            <ul>Age 20-29: 200 c / year</ul>
            <ul>Age 30-49: 400 c / year</ul>
            <ul>Age 50-69: 200 c / year</ul>
            <ul>Age 60-79: 100 c / year</ul>
            <ul>Age 80+: 50 c / year</ul>
        </li>
        <p>This is then multiplied by your profession, keep in mind that your your character has different professions over different ages then you need to apply those per category</p>
        <p>Professions also require a certain amount of skill point investment (perks count), with higher multiplier at higher rates</p>
        <table>
            <thead>
                <tr>
                    <th>Profession</th>
                    <th>Skills</th>
                    <th>1st mult req</th>
                    <th>1st mult</th>
                    <th>2nd mult req</th>
                    <th>2n mult</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>None of the below</td>
                    <td>any</td>
                    <td>300</td>
                    <td>x1.5</td>
                    <td>400</td>
                    <td>x2</td>
                </tr>
                <tr>
                    <td>Doctor</td>
                    <td>Medicine</td>
                    <td>90</td>
                    <td>3x</td>
                    <td>120</td>
                    <td>4x</td>
                </tr>
                <tr>
                    <td>Engineer</td>
                    <td>Computer, Mechanics</td>
                    <td>80</td>
                    <td>x2</td>
                    <td>140</td>
                    <td>x2.5</td>
                </tr>
                <tr>
                    <td>Scientist</td>
                    <td>computer, science</td>
                    <td>120</td>
                    <td>x1.5</td>
                    <td>140</td>
                    <td>x2</td>
                </tr>
                <tr>
                    <td>Pilot</td>
                    <td>Pilot</td>
                    <td>80</td>
                    <td>x1.5</td>
                    <td>120</td>
                    <td>x2</td>
                </tr>
                <tr>
                    <td>Salesman</td>
                    <td>persuation, empathy</td>
                    <td>60</td>
                    <td>x1.5</td>
                    <td>90</td>
                    <td>x2</td>
                </tr>
                <tr>
                    <td>Soldier/Police</td>
                    <td>firearms, survival, stealth, combat, athletics, investigation</td>
                    <td>120</td>
                    <td>x1.5</td>
                    <td>180</td>
                    <td>x3</td>
                </tr>
                <tr>
                    <td>Attorney</td>
                    <td>empathy, intimidation, persuation, subtrefuge</td>
                    <td>160</td>
                    <td>x2</td>
                    <td>240</td>
                    <td>x3</td>
                </tr>
                <tr>
                    <td>Entrepreneur/Trader/Middle Management</td>
                    <td>empathy, intimidation, investigation, persuation, subtrefuge</td>
                    <td>150</td>
                    <td>x1.5</td>
                    <td>250</td>
                    <td>x2.5</td>
                </tr>
            </tbody>
        </table>
        <h3>Starting items</h3>
        <p>Any items/housing/etc you buy at character creation cost 50% less, for example a computer costs only 1000 c if you buy it at character creation.</p>
        <p>Additionally any item costing 10,000 c (before discount) or more may be paid via partial payment, you may spend up to 100x your total starting wealth on any item where you pay 1/200 of its value every month for 30 years (this is to include principal etc)</p>
        <h3>Housing</h3>
        <p>You may choose to buy a house or apartment using a partial payment mortage, costing 40,000 c per square meter (min 20)</p>
        <p>If not you may choose to rent a house or apartment for a monthly fee of 100 c per square meter (min 20)</p>
        <p>In either of these are included running water, electricity, internet connection, food is an additional 3000 c per month generally</p>
        <p>You may also choose to be homeless or even sell your house at the start of the game, however take note that being on your own is extremely dangerous and not recommended</p>
        <h3>Your job</h3>
        <p>It is recommended that you start out with a job, a job will pay out 8,000 c a month. If you choose a job in the above tabel the multiplier also applies to this amount.</p>
        <h4>An adventurer job</h4>
        <p>Once the game starts the DM may choose to give your character an adventuring job of some description, the recommended amount is 10,000 c per month plus bonus based on performance. Or 4,000 c if housing and food is provided by the job.</p>
        <h4>Grand Larceny</h4>
        <p>Crime generally doesn't pay, but your character may choose to start off with a criminal record. Roll 1d6 if you choose to be a criminal.<br />
        It is also expected that your character has spent at least 30 points into the larceny skill</p>
        <table>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>You have been caught multiple times for your crimes and are a well known criminal, you start with reduced privileges according to the DMs discression and you start off with 50% less wealth</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>You have been caught at least once and as such are a known criminal, you may be recognized and forfeit any profession mutliplier.</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>You have done some small petty crime and never been caught for it, you start with 500 c extra.</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>You have regularly committed petty crimes and never been caught, you start with 1,000 c extra.</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>You have committed at least one felony (violent crime) and is suspected for it, you start with 500 c extra</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>You are a successful career criminal, the law enforcement knows you are guilty but can't prove it, you have several connections and start with 3,000 c extra.</td>
                </tr>
            </tbody>
        </table>
    </Section>
}

const Roll1D100 = () => Math.floor((Math.random() * 100) + 1);

const WealthRoller = () => {
    const [firstD100, setFirstD100] = useState(0);
    const [secondD100, setSecondD100] = useState(0);
    const ReRoll = () => {
        setFirstD100(Roll1D100());
        setSecondD100(Roll1D100());
    }
    return <><button onClick={() => ReRoll()}>Roll</button>{firstD100} x {secondD100} = {firstD100 * secondD100} c</>
}

export default Wealth;