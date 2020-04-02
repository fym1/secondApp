import React, { Component } from 'react'
import { Grid, Icon } from '@ant-design/react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
const data=[
    {img:require('../assets/1.png'),tit:'居家维修保养',color:'#ffcccc'},
    {img:require('../assets/2.png'),tit:'住宿优惠',color:'#ffe1b1'},
    {img:require('../assets/3.png'),tit:'出行接送',color:'#bfe6a8'},
    {img:require('../assets/4.png'),tit:'E族活动',color:'#c3ddf2'},
]
const {width}=Dimensions.get('window');
const s= width/640;
import {View, Text,Image,ScrollView,FlatList,TextInput,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
export default class Work extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'center',
                            height:90*s,
                            backgroundColor:'#f23030',
                            paddingBottom:20
                        }}>
                        <View style={{
                            width:'80%',
                            height:40*s,
                            backgroundColor:'#fff',
                            opacity:0.7,
                            marginTop:20*s,
                            marginRight:10*s,
                            flexDirection:'row',                            
                            paddingLeft:10*s,
                            borderRadius:20*s
                        }}>
                            <Icon name='search' style={{marginTop:5*s}} color='#fff'/>
                            <TextInput placeholder='请输入您要搜索的关键字' placeholderTextColor='#fff'/>
                        </View>
                        <Icon name='shopping-cart' style={{marginTop:15*s}} size={40*s}/>
                    </View>
                    {/* <Image source={require('../assets/服务.png')} style={{width:'100%',height:270*s}}/> */}
                    <View style={{width:'100%',height: 273*s}}>
                        <Swiper showsButtons={true} autoplay={true}>
                            <View>
                                <Image 
                                    style={{width: '100%',
                                    height: 273*s}}
                                    source={require('../assets/server1.png')}
                                />
                            </View>
                            <View>
                                <Image 
                                    style={{width: '100%',
                                        height: 273*s}}
                                    source={require('../assets/server2.png')}
                                />
                            </View>
                            <View>
                                <Image 
                                    style={{width: '100%',
                                    height: 273*s}}
                                    source={require('../assets/sever3.png')}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({item})=><View 
                            style={{
                                width:'100%',
                                height:120,
                                marginTop:5,
                                backgroundColor:'#fff',
                                paddingLeft:20*s,
                                paddingRight:15*s,
                                flexDirection:'row',
                                justifyContent:"center"
                            }}>
                            <View style={{
                                width:120*s,
                                height:120*s,
                                borderRadius:60*s,
                                backgroundColor:item.color,
                                marginTop:20,
                                
                            }}>
                                <Image source={item.img} 
                                    style={{position:'absolute',
                                        left:27*s,
                                        top:25*s}}/>
                            </View> 
                            <Text
                                style={{fontSize:25*s,marginTop:45,marginLeft:100*s,width:300*s}}
                            >{item.tit}</Text>
                            <Icon name='right' style={{marginTop:50,marginRight:20}}/>
                        </View>}
                    />
                    <View style={{
                            flexDirection:'row',
                            justifyContent:'center',
                            width:'100%'
                        }}>
                        <Button style={{
                            width:400*s,
                            height:40,
                            backgroundColor:'#f23030',
                            borderRadius:8,
                            color:'#fff',
                            textAlign:'center',
                            paddingTop:10,
                            marginTop:30,
                            }}>
                            发布需求
                        </Button>    
                    </View>
                    <Text style={{textAlign:'center',marginTop:30,marginBottom:30,color:'#4f4e4e'}}>
                        ©E族之家 版权所有</Text>
                </View>
            </ScrollView>
        )
    }
}
