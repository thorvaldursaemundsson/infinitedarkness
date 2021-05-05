
import React from 'react';



const Weather: React.FC = () => {
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
    </>;
}


export default Weather;