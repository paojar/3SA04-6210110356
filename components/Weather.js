import React from 'react';
import { Text,ImageBackground,StyleSheet } from 'react-native';
import Forecast from './Forecast';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=28c099ab9b2578c63715272399321025`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        feels_like: json.main.feels_like, 
                        icon: json.weather[0].icon,
                        name: json.name
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        feels_like : 0,
        icon: '-',
        name: '-'
    })

    return (
    
    <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        <Text>Zip Code is {props.zipCode}</Text>
        <Forecast {...forecastInfo} />
    </ImageBackground>
    
    );

}
   
const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'column',
        //justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: '100%'
        
    },
})