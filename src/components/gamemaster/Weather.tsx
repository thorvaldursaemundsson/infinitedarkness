
import React, { useState } from 'react';
import Section from '../playermanual/Section';



const Weather: React.FC = () => {
    const [temperatureRange, setTemperatureRange] = useState<[number, number, number]>([-50, 0, 50]);
    const [latitude, setLatitude] = useState(0);


    return <>
        <h2>Weather</h2>
        <p>Weather depends on multiple factors, but here's an easy weather calculator, weather is a relative a short term phenomenon.</p>
        <ul>
            <li><b>0-40</b>: Calm weather</li>
            <li><b>41-50</b>: Cold snap</li>
            <li><b>51-60</b>: Heat wave</li>
            <li><b>61-70</b>: Windy</li>
            <li><b>71-80</b>: Rain/Snow</li>
            <li><b>81-90</b>: Windy & Raining/snowing</li>
            <li><b>91-95</b>: Thunder Storm/Blizzard</li>
            <li><b>96-98</b>: Hurricane</li>
            <li><b>99</b>: Severe Hurricane</li>
            <li><b>100</b>: Extreme Hurricane</li>
        </ul>

        <Section title='Weather generator'>
            <div>
                <input className='short' title='min temperature' type='text' value={temperatureRange[0]} onChange={(e) => setTemperatureRange([parseFloat(e.target.value), temperatureRange[1], temperatureRange[2]])} />
                <input className='short' title='mean temperature' type='text' value={temperatureRange[1]} onChange={(e) => setTemperatureRange([temperatureRange[0], parseFloat(e.target.value), temperatureRange[2]])} />
                <input className='short' title='max temperature' type='text' value={temperatureRange[2]} onChange={(e) => setTemperatureRange([temperatureRange[0], temperatureRange[1], parseFloat(e.target.value)])} />
                |
                <input className='short' title='latitude' type='text' value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value))} />

                <WeatherGenerator temperatureRange={temperatureRange} latitude={latitude} />
            </div>
        </Section>
    </>;
}

interface IWeatherGenerator {
    temperatureRange: [number, number, number];
    latitude: number;
}



const WeatherGenerator: React.FC<IWeatherGenerator> = ({ temperatureRange, latitude }) => {
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);

    const randomize = () => {
        const temperatureMod = 0;//Math.random() * 20 - 10;
        const latitudeInRadians = Math.sin(Math.PI / (90 - latitude));
        if (Math.abs(latitude) > 45) {
            Math.sin(latitude)

            setTemperature(temperatureMod + temperatureRange[0] + temperatureRange[1] * latitudeInRadians);
        }
        else {

            setTemperature(temperatureMod + temperatureRange[1] + temperatureRange[2] * latitudeInRadians);
        }
    };

    const temperatureMod = 0;//Math.random() * 20 - 10;
    const latitudeInRadians = Math.floor(Math.sin((Math.PI / 180) * ((90 - latitude) * 2)) * 1000) / 1000;
    let temp = 0;
    let delta = 0;
    let base = 0;
    let add = 0;
    if (Math.abs(latitude) > 45) {
        delta = temperatureRange[2] - temperatureRange[1];
        add = latitudeInRadians;
    }
    else {

        delta = temperatureRange[1] - temperatureRange[0];
        add = latitudeInRadians;
    }

    temp = base + delta * add;

    return <div>
        rads: {latitudeInRadians} <br />
        Delta: {delta}<br />
        base: {base}<br />
        add: {add}<br />
        <button onClick={() => randomize()} >Randomize</button>
        <b>Temperature </b>{Math.floor(temp)}<br />
        <b>Humidity</b> {humidity}<br />
        <b>Wind Speed</b> {windSpeed}
    </div>;
}



export default Weather;