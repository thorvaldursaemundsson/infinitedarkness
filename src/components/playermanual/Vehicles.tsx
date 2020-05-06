import React from "react";
import Section from "./Section";


const Vehicles: React.FC = () => {
    return <Section title='Vehicles'>
        <h3>Vehicles</h3>
        <table>
            <thead><tr>
                <th>name</th><th>value</th><th>class</th><th>description</th>
            </tr></thead>
            <tbody>
                <tr> <td>bicyle</td><td>1000 c</td><td>simple</td><td>simple bicycle</td> </tr>

                <tr> <td>motorcycle</td><td>5,000 c</td><td>simple</td><td>electric motorcycle</td> </tr>
                <tr> <td>quadbike</td><td>6,000 c</td><td>simple</td><td>electric quadbike</td> </tr>

                <tr> <td>sedan</td><td>20,000 c</td><td>car</td><td>basic electric car</td> </tr>
                <tr> <td>van</td><td>40,000 c</td><td>car</td><td>electric van, lots of space</td> </tr>
                <tr> <td>truck</td><td>80,000 c</td><td>car</td><td>electric truck, containers not included</td> </tr>
                <tr> <td>campervan</td><td>90,000 c</td><td>car</td><td>mobile living space</td> </tr>

                <tr> <td>paddle boat</td><td>2,000 c </td><td>boat</td><td>simple paddleboat</td> </tr>
                <tr> <td>speed boat</td><td>5,0000 c </td><td>boat</td><td>electric speedboat</td> </tr>

                <tr> <td>yacht</td><td>100,000 c </td><td>ship</td><td>luxury mobile living space</td> </tr>
                <tr> <td>cruiser</td><td>1,000,000 c </td><td>ship</td><td>massive luxury seaside cruiser</td> </tr>
                <tr> <td>battleship</td><td>140,000,000 c</td><td>ship</td><td>massive ship armed with various missiles</td> </tr>

                <tr> <td>submarine</td><td>70,000,000 c</td><td>submarine</td><td>submarine armed with torpedoes</td> </tr>

                <tr> <td>small plane</td><td>15,000 c</td><td>airplane</td><td>simple electric airplane, 2 seats</td> </tr>
                <tr> <td>jumojet</td><td>90,000,000 c</td><td>airplane</td><td>huge electric airplane, 200 seats</td> </tr>
                <tr> <td>fighterjet</td><td>40,000,000 c</td><td>airplane</td><td>armed airplane capable of hypersonic speed, 2 seats</td> </tr>

                <tr> <td>rocket ship</td><td>450,000,000 c</td><td>spaceship</td><td>massive multistage ship using chemical thrusters for planetary ascent, fusion propulsion in space</td> </tr>
                <tr> <td>spaceplane</td><td>800,000,000 c</td><td>spaceship/airplane</td><td>hypersonic single stage spaceplane equipped with fusion propuslion</td> </tr>

                <tr> <td>FTL ship</td><td>2,000,000,000 c </td><td>FTL</td><td>spaceship equipped with hyperdrive capable of faster than light travel</td> </tr>
            </tbody>
        </table>
    </Section>
}

export default Vehicles;