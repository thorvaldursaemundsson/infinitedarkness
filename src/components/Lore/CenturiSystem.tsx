import React from 'react';
import StarSystem from './StarSystem';

const CentauriSystem: React.FC = () => <CentauriStarSystem />

const CentauriStarSystem = () => <StarSystem
    stars={[{
        name:'Rigil Kentaurus',
        mass: 1.1,
        age: 6.1,
        description:"Rigil is the biggest star and has 2 inner planets, it's theorized that if Rigil ever had more planets they would've been slingshotted out of the system from gravitational interaction with Hadar",
        classification:'G',
        planetoids:[{
            name: 'Sheol',
            classification: 'Rocky',
            description:'This small planet orbits Rigil at an extremely low and fast orbit, the planet is mostly covered in molten rock with islands of floating minerals, due to the extreme radiation and heat there is no industry, habitation or outposts',
            mass: 0.07,
            age: 5.5,
            atmosphere: 'none',
            atmosphericPressure:0,
            surfaceGravity: 0.2,
            temperatureRange: '700-1000',
            hydrosphere:'none',
            orbitDistance:'0.02 AU',
            feature: 'surface lava rivers, extreme radiation',
            satelites: []
        },
        {
            name: 'Diluvia',
            classification: 'Rocky',
            description:'Diluvia is the capitol of the Centauri System, population at nearing 10 million and rapidly increasing, Diluvia was the first colony, chosen for its ideal terrestrial features. 60% of the surface of Diluvia is one massive continent spanning the entire planet, the remaining 40% is made up of 29 small seas and hundreds of thousands of lakes, though the seas are salty most have such low salination that the water is drinkable. A complex network of underground rivers connect the seas and allow sea-fauna free reign, many rivers run close to the mantle where minerals from the very active core reach the surface, making the sea water rich.',
            mass: 0.89,
            age: 5.4,
            atmosphere: 'nitrogen 69%, oxygen 29%, argon 2%, trace neon',
            atmosphericPressure:105,
            surfaceGravity: 0.9,
            temperatureRange: '-30 - 50',
            hydrosphere:'sea water',
            orbitDistance:'1.09 AU',
            feature: '10 million people',
            satelites: []
        }]
    },
    {
        name:'Hadar',
        mass: 0.9,
        age: 6.1,
        description:"Hadar is the middle star, slightly smaller than the sun, has 2 inner planets",
        classification:'K',
        planetoids:[{
            name: 'Epona',
            classification: 'Rocky',
            description:'Epona is a rocky planet, no atmosphere and tidally locked to Toliman, one side is an eternal blazing inferno and the other is a fridgig wasteland. However due to the total lack of atmosphere the dark side is covered by snow and ice.',
            mass: 0.4,
            age: 5.6,
            atmosphere: 'none',
            atmosphericPressure:0,
            surfaceGravity: 0.7,
            temperatureRange: '-200 - 450',
            hydrosphere:'none',
            orbitDistance:'0.12 AU',
            satelites: []
        },
        {
            name: 'Rhiannon',
            classification: 'rocky',
            description:'Rhiannon is a wet terrestrial rockly world with primordial life, vast oceans filled with purple cyanobacteria color the oceans blue at night, the reflection gives the atmosphere a slight purple tint, however it is mostly bright red. Rhiannon is habitable at a cool temperature span of -40 to 10 celsius, the atmosphere has sparse oxygen but otherwise no toxins. Surface gravity 0.9',
            mass: 1.2,
            age: 5.5,
            atmosphere: 'nitrogen 77%, oxygen 21%, argon 1.2%, rest carbondioxide',
            atmosphericPressure:131,
            surfaceGravity: 1.1,
            temperatureRange: '-30 - 40',
            hydrosphere:'salt water',
            orbitDistance:'.95 au',
            satelites: []
        }]
    },
    {
        name:'Proxima Centauri',
        mass: 0.12,
        age: 4.8,
        description:"Proxima is the smallest star orbitting both Rigil Kentaurus and Toliman in a huge orbit at 0.4 lightyears out. FTL travel is needed to travel between but is also much faster. The majority of Centauri planets orbit Proxima but population is sparse.",
        classification:'G',
        planetoids:[{
            name: 'Hayagriva',
            classification: 'rocky',
            description:'Hayagriva and Laksmi are a twin planetoid pair orbiting close to Proxima, they are tidally locked to each other.',
            mass: 0.2,
            age: 5.5,
            atmosphere: 'none',
            atmosphericPressure:0,
            surfaceGravity: 0.17,
            temperatureRange: '-100 - 200',
            hydrosphere:'none',
            orbitDistance:'0.008 AU',
            satelites: [{
                name: 'Lakshmi',
                classification: 'rocky',
                description:'Hayagriva and Laksmi are a twin planetoid pair orbiting close to Proxima, they are tidally locked to each other.',
                mass: 0.17,
                age: 5.5,
                atmosphere: 'none',
                atmosphericPressure:0,
                surfaceGravity: 0.15,
                temperatureRange: '-100 - 200',
                hydrosphere:'none',
                orbitDistance:'4000km',
                satelites: []
            }]
        },
        {
            name: 'Sventovid',
            classification: 'rocky',
            description:'Sventovid is a partially habitable world, though it is tidally locked to Proxima it is within the habitable zone and is host to life, the day side has a temperature range of 40 - 90, the dark side has a range of -90 - -20. Near the twillight belt is where the climate is most hospitable.',
            mass: 1.6,
            age: 4.4,
            atmosphere: '60% nitrogen, 29% oxygen, 7% argon, 3% neon, 1% carbondioxide',
            atmosphericPressure:181,
            surfaceGravity: 1.3,
            temperatureRange: '-90 - 90',
            hydrosphere:'salt water',
            orbitDistance:'0.03 au',
            feature: 'tidally locked, settlements',
            satelites: []
        },
        {
            name: 'Drega',
            classification: 'rocky icy',
            description:'Drega is a huge icy planet, the extremely thick atmosphere makes landing impossible',
            mass: 17,
            age: 4.4,
            atmosphere: '50% hydrogen, 21% helium, 12% helium,',
            atmosphericPressure:85200,
            surfaceGravity: 1.3,
            temperatureRange: '-210 - -90',
            hydrosphere:'amonia, ethane, methane',
            orbitDistance:'0.03 au',
            feature: 'tidally locked, settlements',
            satelites: []
        }]
    },
    ]}
    roguePlanetoids={[]}
    name='The Centauri System'
    description='The Centauri system is a trinary star system, the three stars Rigil Kenturus, Toliman and Proxima Centauri. Rigil and Toliman are in relatively close orbit, at their closest they are only 11 astronomical units apart, Proxima orbits at a distance of 13k AU (0.2 light years). The Centauri Imperium controls most of the system, though Proxima is mostly independent'
/>


export default CentauriSystem;