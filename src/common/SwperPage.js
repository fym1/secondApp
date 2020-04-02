import React, { Component } from 'react'
import { Text, View,Image, StyleSheet, ScrollView ,AsyncStorage, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';
import Button from 'react-native-button'

export default class SwperPage extends Component {
    start = () =>{
        AsyncStorage.setItem('isInstall','true',()=>{
            console.log('start end')
        });
        this.props.afterInstall();
    }
    render() {
        return (
            // <ScrollView>
                <Swiper  showsButtons={false}>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../assets/slide1.png')}/>
                        <TouchableOpacity style={styles.start}>
                            <Text onPress={this.start} style={{color:'#fff'}}>开始体验</Text>
                        </TouchableOpacity>
                            
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../assets/slide2.png')}/>
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../assets/slide3.png')}/>    
                    </View>
                </Swiper>
            // </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    img:{
        width:'100%',
        height:'100%'
    },
    slide1:{
       flex:1,
       width:'100%',
       height:'100%',
       alignItems:'center'
    },
    start:{
        position: 'absolute',
        bottom: 150,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 20,
    }
})