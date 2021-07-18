import React from 'react'
import { FlatList,View,Text,StyleSheet, TouchableHighlight,ImageBackground,SafeAreaView,Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    
    <TouchableHighlight onPress={() =>{
        navigation.navigate('Weather',{zipCode:code})
    }}>
            <View style={styles.zipItem}>
                <Text style={styles.zipPlace}>{place}</Text>
                <Text style={styles.zipCode}>{code}</Text>
            </View> 
    </TouchableHighlight>
    
)



export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.containerbg}>
            
            <ImageBackground source = {require('../bg2.jpg')} style = {styles.backdrop}>
            <Text style={styles.text} >Weather </Text>
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation} />}
            />
            </ImageBackground>
        </SafeAreaView>
    );
   
}

const styles = StyleSheet.create({
    zipItem: {
        flex:1 ,
        height:"100%",
        width:"80%",
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius:10,
        alignItems:"center",
        flexDirection:"row",
        marginLeft:"10%",
        marginTop:"3.5%",
        
    },  
    zipPlace: {
        flex: 1,
        fontSize:20,
        color:"#464646",
        marginLeft:"5%",
    },
    zipCode: {
        flex: 1,
        fontSize:20,
        color:"#464646",
        marginLeft:"28%",
    },
    backdrop: {
        
        width: '100%',
        height: '100%'
        
    },
    containerbg: {
        height:Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    text: {
        fontSize:25,
        color:"#FFF",
        fontWeight:"bold",
        marginLeft:"10%",
        marginTop:"5%"
      },
    
})

