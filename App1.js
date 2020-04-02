/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState,useEffect} from 'react';
import { Grid, Icon } from '@ant-design/react-native';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid,AsyncStorage } from 'react-native';
import {Router,Scene,Tabs,Drawer,Lightbox,Modal,Overlay,Actions} from 'react-native-router-flux';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Demo01 from './components/Demo01'
// import Doc from './components/Doc';
// import Msg from './components/Msg';
// import MsgDetail from './components/MsgDetail';
// import Mybox from './components/Mybox';
// import Home from './components/Home';
// import Message from './components/Message'
// import Mylist from './components/Mylist';
// import LocalPages from './components/LocalPages';
// import Work from './components/Work';
// import MyTs from './components/MyTs'
// import Demo from './components/Demo';
// import Title from './components/Title';
import SplashScreen from 'react-native-splash-screen'
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Userinfor from './src/userinfor/Userinfor';
import Login from './src/common/Login';
import SwperPage from './src/common/SwperPage';
import MyTs from './components/MyTs';
import Myhome from './components/Myhome';
import Demo from './components/Demo';
import Myhome1 from './components/Myhome1';
import Myhome2 from './components/Myhome2';

//更换logo android\app\src\main\res下的文件夹下图片
//启动画面：react-native-splash-screen
//如果第一次安装，一般来说都有一个引导页（普通轮播图），注意本地存储记录下状态
//看功能，是否需要先登录，如果需要先登录，登录完记录状态（用户信息）
//再次进入的时候，也要从本地判断是否登录过


//rn本地存储是异步的
//
console.disableYellowBox = true;
//每新装完一个包，服务停止
const rootUrl = 'https://www.fastmock.site/mock/1942df50e67c8173257ad3826b39e159/api'
const styles = StyleSheet.create({

});

// const App=()=>{
//   return(
//     <View>
//       {/* <Demo01 name={'我我我'}/> */}
//     </View>
//   )
// }
const App = () => {
  let [isLogin,setLogin] = useState(false);
  let [isInstall,setInstall] = useState(true);
  let now = 0;
  let init=()=>{
    AsyncStorage.getItem('isInstall')
      .then(res=>{
        if(res){
          console.log("isInstall"+res);
          setInstall(false);
        }
      })
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
  }
  
  useEffect(()=>{
    // AsyncStorage.clear();
    init();
  },[])
  let afterInstall = ()=>{
    setInstall(false)
  }
  if(isInstall){
    return(
      <View style={{flex:1}}>
        <SwperPage afterInstall = {afterInstall}/>
      </View>
    )
  }
  
  return (
    <Router backAndroidHandler={()=>{
      if(Actions.currentScene != 'home'){
        Actions.pop();
        return true;
      }else{
        if(new Date().getTime()-now<2000){
          BackHandler.exitApp();
        }else{
          ToastAndroid.show('确定要退出吗',100);
          now = new Date().getTime();
          return true;
        }
      }  
    }}>
      <Overlay>
      <Modal key='modal' hideNavBar>
        {/* <Scene key = 'login' component={Login}/> */}
        <Lightbox key='lightbox'>
          <Drawer
            key="drawer"
            contentComponent={()=><Text>drawer</Text>}
            drawerIcon={({focused})=>
            <Icon 
              name="menu"
            />}
            drawerWidth={400}
            >
          {/* Router里面只能有一个组件 */}
          <Scene key="root">
            {/* 实现Tabs */} 
            <Tabs 
              key='tabbar'
              hideNavBar
              activeTintColor='red'
              inactiveTintColor='blue'
              tabStyle={{backgroundColor:'#ccc'}}
            >
              {/* 首页*/}
              <Scene key='homePage'
                  title='首页'
                  icon={({focused})=>
                    <Icon 
                      name="home" 
                      color={focused?'red':'blue'}
                    />}
              >
                <Scene key="home" component={Myhome} hideNavBar={true}/>
              </Scene>
              {/* 商品分类 */}
              <Scene key='goodsPage'
                  title='商品分类'
                  icon={({focused})=>
                    <Icon 
                      name="home" 
                      color={focused?'red':'blue'}
                    />}
              >
                <Scene key="goods" component={Myhome1}></Scene>
              </Scene>
              {/* 用户中心 */}
              <Scene 
                key='userPage' 
                title='用户中心'
                icon={({focused})=>
                  <Icon 
                    name="user" 
                    color={focused?'red':'blue'}
                  />} 
                component={Myhome2}
              ></Scene>
              
            </Tabs>
            
            {/* 默认显示第一个Scene */}
            {/* <Scene 
              key="msg" title="消息" 
              component={Msg}
              titleStyle={{flex:1,textAlign:'center',color:'red'}}/>
            <Scene 
              key="msgdetail" title="消息详情" 
              backTitle='消息'
              backButtonImage={require('./assets/icon/user.png')}
              component={MsgDetail}
              titleStyle={{flex:1,textAlign:'center',color:'red'}}
              renderRightButton={<View></View>}/>
            <Scene 
              key="doc" 
              title="文档" 
              component={Doc}
              // 标题文本居中
              titleStyle={{flex:1,textAlign:'center'}}
              renderRightButton={<View></View>}/> */}
            </Scene>
          </Drawer>
        </Lightbox>
        {/* <Scene initial={!isLogin} key="login" component={Login}/> */}
      </Modal>
      </Overlay>
    </Router>
  )
};


export default App;
