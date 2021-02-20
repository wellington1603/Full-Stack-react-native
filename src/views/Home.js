import React from 'react'
import { View, Image,Text } from 'react-native'
import Box from '../componentes/BoxProduto/box'

export default class Home extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'space-around'}}>
                    <Image
                        source={{uri: 'https://www.prsguitars.com/images/blog_images/Studio_blog_1200_b.jpg'}}
                        style={{width: 70, height: 70, borderRadius: 70}}
                    />
                    <Image
                        source={{uri: 'https://www.prsguitars.com/images/electrics/silver_sky_lunar_ice_2021_hero_large.jpg'}}
                        style={{width: 70, height: 70, borderRadius: 70}}
                    />
                    <Image
                        source={{uri: 'https://www.prsguitars.com/images/electrics/se_zach_myers_2021_hero_large.jpg'}}
                        style={{width: 70, height: 70, borderRadius: 70}}
                    />
                    <Image
                        source={{uri: 'https://www.prsguitars.com/images/blog_images/Custom2408_blog_1200.jpg'}}
                        style={{width: 70, height: 70, borderRadius: 70}}
                    />
                    <Image
                        source={{uri: 'https://www.prsguitars.com/images/blog_images/SpecialSemiHollow_blog_1200_b.jpg'}}
                        style={{width: 70, height: 70, borderRadius: 70}}
                    />
                </View>
                <Text style={{textAlign: 'center', fontSize: 25, marginTop:10, marginBottom: 10}}>Seja bem vindo a loja</Text>
             

             <Image 
                source={{uri: 'https://www.prsguitars.com/images/electrics/se_custom_24_08_2021_hero_large.jpg'}}
                style={{width: '100%', height: "100%"}}
             />

            </View>
        )
    }
}

