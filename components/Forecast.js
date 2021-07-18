import React from "react"
import { View, Text, Image, StyleSheet } from 'react-native'


export default function Forecast(props) {
    return (
    <View >
        <Text>{props.main}</Text>
        <Text>{props.description}</Text>
        <Text>temperature: {props.temp} °C </Text>
        <Text>feel like: {props.feels_like} °C </Text>
        
    </View>
        
    )
}

