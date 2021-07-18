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
    main_box:{
      height:"25%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    main_holder_view:{
      height:"80%",
      width:"90%",
      backgroundColor: 'rgba(220, 220, 220, 0.6)',
      borderRadius:15,
      alignItems:"center",
      flexDirection:"row"
    },
    detail_box:{
      height:"37%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    name_text: {
      fontSize:40,
      color:"#FFF",
          marginLeft:"5%",
          marginTop:"5%",
          fontWeight:"bold",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"row"
    },
    feel_text:{
      fontSize:18,
            color:"#464646",
            marginLeft:"8%",
            marginTop:"2%"
    },
    temp_text:{
      fontSize:30,
            color:"#464646",
            fontWeight:"bold",
            marginLeft:"8%",
            marginTop:"8%"
    },


  });


export default function Forecast(props) {
    return (

     <View>
      <Text style={styles.name_text}>{props.name}</Text>
      <View style={styles.main_box}>
      <View style={styles.main_holder_view}>
        <View><Text style={styles.main_text}>{props.main}</Text>
        <Text style={styles.des_text}>{props.description}</Text></View>
        <Image 
                source={{uri: 'http://openweathermap.org/img/wn/'+props.icon+'@2x.png',}} 
                style={styles.logo}/>
      </View>
      </View>
      <View style={styles.detail_box}>
          <View style={styles.detail_holder_view}>
          <Text style={styles.temp_text}>{props.temp} °C</Text>
          <Text style={styles.feel_text}>Feel like : {props.feels_like} °C</Text>
          </View>
      </View>
    </View>


      
        
    )
}