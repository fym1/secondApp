import React, { Component } from 'react'
import {View, Text,Dimensions,Image,ScrollView,TextInput,TouchableOpacity,StyleSheet,FlatList} from 'react-native';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
const goods = [
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/1_1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/2_1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/1_1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/2_1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/1_1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../assets/2_1.png')
    },
]

export default class First extends Component {
    render() {
        return (
            <ScrollView>
                <View 
                    style={{
                        backgroundColor:'#f4f4f4',
                        width:'100%',
                        height:'100%'
                    }}>
                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'center',
                            height:70,
                            backgroundColor:'#fff'
                        }}>
                        <View style={{
                            width:'80%',
                            height:50,
                            backgroundColor:'#eeeeee',
                            marginTop:10,
                            marginRight:10,
                            flexDirection:'row',
                            alignItems:'center',
                            paddingLeft:10
                        }}>
                            <TextInput placeholder='请输入商品名称' style={{width:'85%'}}/>
                            <TouchableOpacity
                                style={{
                                    width:40,
                                    height:50,
                                    backgroundColor:'#eeeeee',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                <Image source={require('../assets/search.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    <View 
                        style={{
                            flexDirection:'row',
                            width:'100%',
                            height:72,
                            backgroundColor:'#fff',
                            marginTop:2,
                            paddingTop:22,
                            paddingLeft:40,
                            paddingRight:50
                        }}>
                        <TouchableOpacity>
                        <Text
                            style={{
                                width:90,
                                fontSize:18,
                                color:'#f23030'
                            }}
                        >综合</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text
                                style={styles.zong}
                            >销量</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text
                            style={styles.zong}
                        >新品</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text
                            style={styles.zong}
                        >价格</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text
                            style={styles.zong}
                        >信用</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList 
                    style={{backgroundColor: '#F4F4F4',marginBottom:50}}
                    data={goods}
                    numColumns={2}
                    renderItem={({item})=>(
                        <View style={{width: 290*s,
                            backgroundColor: '#fff',
                            marginLeft: 20*s,
                            marginTop: 20*s,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingBottom: 20,
                            alignItems: 'center'}}>
                            <Image 
                                resizeMode="contain"
                                source={item.img}
                                style={{height:180*s,marginTop: 60*s}}
                            />
                            <Text
                                style={{marginTop: 20}}
                            
                            >{item.title}</Text>
                            <Text 
                                style={{width:'100%',color: 'red'}}
                            >{item.price}</Text>
                        </View>
                    )}
                />
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    zong:{
        width:90,
        fontSize:18
    }
})
