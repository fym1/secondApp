import React, { Component } from 'react'
import { Grid, Icon } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux'
import { View, Text, Image, ScrollView, FlatList, TextInput, TouchableOpacity, AsyncStorage, Dimensions, TouchableHighlight} from 'react-native';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
const imgData = '';
const data1 = [
    {icon:'setting',tit:'账户管理'},
    {icon:'environment',tit:'收货地址'},
    {icon:'solution',tit:'我的信息'},
    {icon:'hdd',tit:'我的订单'},
    {icon:'qrcode',tit:'我的二维码'},
    {icon:'dollar',tit:'我的积分'},
    {icon:'star',tit:'我的收藏'},

]
const {width,scale} = Dimensions.get('window');
const s = width/640;
const options = {
    title: '设置头像',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'从相册里选择',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class My extends Component {
    constructor(){
        super();
        this.state = {
            imgUrl:require('../assets/头像.png')
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('img')
        .then((res)=>{
            if(res){
                this.setState({
                    imgUrl:{"uri":res}
                })
            }
            
        });
    }
    componentDidUpdate(){
        // console.log(typeof(this.state.imgUrl));
        // console.log(this.state.imgUrl);
        console.log('componentDidUpdate')
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {    
                const source = {uri:response.uri};
                this.setState({
                    imgUrl: source,
                });
                console.log(response.uri);
                AsyncStorage.setItem('img',response.uri);
                AsyncStorage.getItem('img')
                .then((res)=>{
                    console.log({"uri":res});
                    console.log(typeof({"uri":res}));
                    console.log('存的是'+res);
                });
                console.log('存好了')
            }
        });
    }
    render() {
        return (
            <ScrollView>
                <View style={{backgroundColor:'#eeeeee'}}>
                    <View style={{
                        width:'100%',
                        height:200,
                        backgroundColor:'#f23030',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        
                        <View style={{width:120*s,height:120*s,borderRadius:60*s,borderWidth:2*s,borderColor:'#fff',overflow:'hidden'}} >
                            <Button onPress={()=>this.takephoto()}>
                                <Image source={this.state.imgUrl} style={{width:120*s,height:120*s}} />
                            </Button>
                        </View>    
                        
                        <Text style={{textAlign:'center',marginTop:20,color:'#fff',fontSize:18}}>BINNU DHILLON</Text>
                        <Button style={{
                            width: 150*s,
                            height: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            color:'red',
                            marginTop:10
                        }}
                            onPress={()=>{
                                Actions.login();
                                AsyncStorage.removeItem('user')
                            }}
                        >退出登录</Button>
                    </View>
                </View>
                <View style={{
                    width:'100%',
                    height:50,
                    backgroundColor:'#fff',
                    flexDirection:'row',
                    paddingLeft:10*s,
                    paddingTop:10
                }}>
                    <Icon name='aliwangwang' style={{size:'lg'}}/>
                    <Text style={{fontSize:20,color:'#4f4e4e',marginLeft:15*s}}
                    >我的个人中心</Text>
                </View>
                <View style={{width:'100%',marginTop:2,backgroundColor:'#fff',flexDirection:'row',paddingBottom:20}}>
                    <FlatList
                        data={data1}
                        numColumns={3}
                        
                        renderItem={({item}) => <View style={{width:210*s,marginTop:20,alignItems:'center'}}>
                            <Icon name={item.icon} size={30}/>
                            <Text style={{fontSize:18,color:'#4f4e4e',marginTop:8,textAlign:'center'}}>{item.tit}</Text>
                        </View>}
                    />
                </View>
                <View style={{
                    width:'100%',
                    height:50,
                    backgroundColor:'#fff',
                    flexDirection:'row',
                    paddingLeft:10*s,
                    paddingTop:10,
                    marginTop:20
                }}>
                    <Icon name='tag' style={{size:'lg'}}/>
                    <Text style={{fontSize:20,color:'#4f4e4e',marginLeft:15*s}}
                    >E族活动</Text>
                </View>
                <View style={{width:'100%',marginTop:2,backgroundColor:'#fff',flexDirection:'row',paddingBottom:20}}>
                    <View style={{width:210*s,marginTop:20,alignItems:'center'}}>
                        <Icon name='tool' size={30}/>
                        <Text style={{fontSize:18,color:'#4f4e4e',marginTop:8,textAlign:'center'}}>桔家维修保养</Text>
                    </View>
                    
                    <View style={{width:210*s,marginTop:20,alignItems:'center'}}>
                        <Icon name='car' size={30}/>
                        <Text style={{fontSize:18,color:'#4f4e4e',marginTop:8,textAlign:'center'}}>出行接送</Text>
                    </View>
                    <View style={{width:210*s,marginTop:20,alignItems:'center'}}>
                        <Icon name='user' size={30}/>
                        <Text style={{fontSize:18,color:'#4f4e4e',marginTop:8,textAlign:'center'}}>我的受赠人</Text>
                    </View>
                </View>
                <View style={{width:'100%',backgroundColor:'#fff',flexDirection:'row',paddingBottom:20}}>
                    <View style={{width:210*s,marginTop:20,alignItems:'center'}}>
                        <Icon name='home' size={30}/>
                        <Text style={{fontSize:18,color:'#4f4e4e',marginTop:8,textAlign:'center'}}>我的住宿优惠</Text>
                    </View>
                    <View style={{width:210*s,marginTop:20,alignItems:'center'}}>
                        <Icon name='flag' size={30}/>
                        <Text style={{fontSize:18,color:'#4f4e4e',marginTop:8,textAlign:'center'}}>我的活动</Text>
                    </View>
                    <Button onPress={()=>Actions.tit()}>
                        <View style={{width:210*s,marginTop:20,alignItems:'center'}}>
                            <Icon name='form' size={30}/>
                            <Text style={{fontSize:18,color:'#4f4e4e',marginTop:8,textAlign:'center'}}>我的发布</Text>
                        </View>
                    </Button>
                </View>
                <Text style={{textAlign:'center',marginTop:30,marginBottom:30,color:'#4f4e4e'}}
                >BINNU DHILLON  |  退出</Text>
            </ScrollView>
        )
    }
}
