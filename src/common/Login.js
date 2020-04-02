import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, ToastAndroid, Alert} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
import {myFetch} from '../utils/index'
let rootUrl = 'https://www.fastmock.site/mock/1942df50e67c8173257ad3826b39e159/api'
export default class Login extends Component {
    constructor(){
      super();
      this.state={
        username:'',
        pwd:'',
        isloading:false
      }
    }
    userhandle=(text)=>{
      console.log(text);
      this.setState({
        username:text
      })
    }
    pwdhandle=(text)=>{
      console.log(text);
      this.setState({
        pwd:text
      })
    }
    login = () => {
      // myFetch.get('/topics',{limit:4,user:'sss'})
      //   .then(res=>console.log(res))
      this.setState({isloading:true})
      myFetch.post('/login',{
        username:this.state.username,
        pwd:this.state.pwd
      }).then(res=>{
        console.log(res);
        console.log(res.data.username);
        console.log(res.data.pwd);
        if(res.data.username == 'fym' && res.data.pwd == '111111'){
          AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
              this.setState({isloading:false})
              Actions.rocket();
            })
        }
        else if(res.data.username == '' || res.data.pwd == ''){
          Alert.alert('用户名或密码为空','点击OK重新输入')
        }
        else{
          Alert.alert('用户名或密码错误','点击OK重新输入')
        }
        
      })
      // fetch(rootUrl+'/login',{
      //   method:'POST',
      //   headers:{
      //     "Accept":'application/json',
      //     "Content-Type":'application/json'
      //   },
      //   body:JSON.stringify({username:this.state.username,
      //     pwd:this.state.pwd})
      // })
      //   .then(res=>res.json())
      //   .then(res=>{
      //     console.log(res);
      //     Actions.homePage()
      //   })
    }
    componentDidMount(){
      AsyncStorage.getItem('user')
        .then(res=>console.log(res))
      AsyncStorage.getItem('isInstall')
        .then(res=>console.log(res))
    }
    render() {
        return (
          <View style={{justifyContent:'center',flex:1}} 
      
          >
            <View style={{alignItems:'center'}}>
              <View style={{
                width:'80%',
                borderRadius:10,
                borderBottomColor:'#ccc',
                borderBottomWidth:1,
                flexDirection:'row',
                alignItems:'center',
                paddingLeft:20
              }}>
                <Icon name="user" color="red"/>
                <TextInput placeholder='用户名'
                  onChangeText={this.userhandle}
                />
              </View>
            </View>
            <View
              style={{
                alignItems:'center'
              }}
            >
              <View style={{
                width:'80%',
                borderRadius:10,
                borderBottomColor:'#ccc',
                borderBottomWidth:1,
                flexDirection:'row',
                alignItems:'center',
                paddingLeft:20
              }}>
                <Icon name="form" color="red"/>
                <TextInput placeholder='密码'
                  onChangeText={this.pwdhandle}
                  secureTextEntry={true} 
                />
              </View>
              <TouchableOpacity 
                style={{
                  width:'80%',
                  height:40,
                  backgroundColor:'#ccc',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:20,  
                }}
                onPress={this.login}
              >
                <Text>登录</Text>
              </TouchableOpacity>  
              <TouchableOpacity 
                style={{
                  width:'80%',
                  height:40,
                  backgroundColor:'#ccc',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:20,  
                }}
                onPress={()=>Actions.register()}
              >
                <Text>去注册</Text>
              </TouchableOpacity>  
            </View>   
            {
              this.state.isloading?<View><Text style={{textAlign:'center',marginTop:50}}>正在登录...</Text></View>:null
            }      
          </View>
        )
    }
}
