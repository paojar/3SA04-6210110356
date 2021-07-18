import React from "react"
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });


export default function Forecast(props) {
    return (
    <View >
        <Text>{props.name}</Text>
        <Text>{props.main}</Text>
        <Image 
        style={styles.tinyLogo}
        source={{
          uri: 'http://openweathermap.org/img/wn/'+props.icon+'@2x.png',
        }}
        />
        <Text>{props.description}</Text>
        <Text>temperature: {props.temp} °C </Text>
        <Text>feel like: {props.feels_like} °C </Text>
        
    </View>
        
    )
}