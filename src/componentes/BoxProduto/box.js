import React from 'react'
import {Text, View, StyleSheet, FlatList, StatusBar, Image} from 'react-native'

const dados = [
    {
        id: Math.random(),
        categoria:"stratocaster",
        descricao:"Guitarra Tagima TG-530 Woodstock",
        preco: 1399.90,
        precofinal: 1099.90,
        imagem: require('../../img/strato01.jpg')
    },

    {
        id: Math.random(),
        categoria:"stratocaster",
        descricao:"Guitarra Stratocaster Strinberg STS-100 MWR",
        preco: 899.90,
        precofinal: 750.90,
        imagem: require('../../img/strato02.webp')
    },
    {
        id: Math.random(),
        categoria:"stratocaster",
        descricao:"Guitarra Stratocaster Fender Squier Classic Vibe 70's LR - Natural",
        preco: 4399.00,
        precofinal: 3999.90,
        imagem: require('../../img/strato01.jpg')
    },
    {
        id: Math.random(),
        categoria:"lespaul",
        descricao:"Les Paul Strinberg LPS-200",
        preco: 1099.90,
        precofinal: 999.00,
        imagem: require('../../img/les01.webp')
    },
    {
        id: Math.random(),
        categoria:"lespaul",
        descricao:"Les Paul Epiphone Special VE",
        preco: 2399.90,
        precofinal: 2199.90,
        imagem: require('../../img/les02.jpg')
    },
    {
        id: Math.random(),
        categoria:"lespaul",
        descricao:"Jackson Monarkh JS22 585",
        preco: 3899.90,
        precofinal: 3599.90,
        imagem: require('../../img/les03.jpg')
    },
    {
        id: Math.random(),
        categoria:"telecaster",
        descricao:"Guitarra Telecaster Vintage Icon Series V52MR American Alder - Butterscotch",
        preco: 3899.90,
        precofinal: 3599.90,
        imagem: require('../../img/les03.jpg')
    },
    {
        id: Math.random(),
        categoria:"flying",
        descricao:"Flying V Strinberg CLG 45",
        preco: 1899.00,
        precofinal: 1799.00,
        imagem: require('../../img/fly01.jpg')
    },
    {
        id: Math.random(),
        categoria:"flying",
        descricao:"Flying V ",
        preco: 249.99,
        precofinal: 199.99,
        imagem: require('../../img/fly02.jpg')
    },
]

const SPACING = 20;
// const BG_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32OtkGzPkJKgeALcBgbAIUApsoHzD-2SGIA&usqp=CAU'

const Box = () =>{
        return <View style={{flex: 1, backgroundColor: '#BDC3C7'}}>

        {/* <Image
        source={{uri: BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={13}
         /> */}

            
            <FlatList
            data={dados}
            keyExtractor={item => item.id}
            contentContainerStyle={{padding: SPACING, paddingTop: StatusBar.currentHeight || 42}}
            renderItem={({item}) => {
    
               
             

                return <View style={{
                            flextDirection: 'row',
                                padding: SPACING,
                                marginBottom: SPACING,
                                backgroundColor: 'rgba(255,255,255,0.8)',
                                borderRadius: 12,
                                shadowColor: "#000",
                                shadowOffset:{width: 0, height: 10},
                                shadowOpacity: .3,
                                shadowRadius: 20,
                            
                        }}>
    
                    <View>
                    <Image 
                    source={item.imagem}
                    style={{
                        width: 100,
                        height: 100, 
                        alignContent: 'center'
                    }} 
                    />
                       
                        <Text style={{fontSize:22, fontWeight: '700'}}> {item.descricao}</Text>
                        <Text style={{fontSize:18, opacity: .7}}> <s>{item.preco}</s>  </Text>
                        <Text style={{fontSize:18, opacity: .7, fontWeight: '700', color: 'red'}}> {item.precofinal} </Text>
                        

                    </View>
                </View>
            }}
        />
    
    
        </View>
    }


export default Box