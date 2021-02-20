import React from 'react'
import {View, Text, StyleSheet, Image,TextInput, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () =>{
    return(
        <View style={styles.container}>
       
            <Text style={styles.logo}>FullStack</Text>
            {/* <Text style={styles.lupa}>Lupa</Text> */}
            <View style={{flexDirection: 'row'}} >
                <Icon  name="search" size={25} color= '#fff' style={{marginRight: 20}}/>
            </View>
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '10%',
        marginTop: 30,
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        
        
    },
    logo:{
        fontSize: 30,
        color: 'white',
        marginLeft: 20      
    },
    lupa:{ 
        color: 'white',
        marginRight: 20,
        fontSize: 30
    }
})

export default Header