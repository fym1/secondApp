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
import SplashScreen from 'react-native-splash-screen'
import Work from './src/home/Work';
import First from './src/goods/First';
import Car from './src/cart/Car';
import My from './src/userinfor/My';
import Title from './src/userinfor/Title';
import SwperPage from './src/common/SwperPage';
import Login from './src/common/Login';
import Register from './src/common/Register';
console.disableYellowBox = true;
const App = () => {
  let [isLogin,setLogin] = useState(false);
  let [isInstall,setInstall] = useState(true);
  let now = 0;
  let init=()=>{
    AsyncStorage.getItem('isInstall')
      .then(res=>{
        if(res){
          // console.log("isInstall"+res);
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
    <Router style={{backgroundColor:'#ccc'}}
      backAndroidHandler={()=>{
        if(Actions.currentScene == 'login'){
          if(new Date().getTime()-now<2000){
            BackHandler.exitApp();
          }else{
            ToastAndroid.show('确定要退出吗',100);
            now = new Date().getTime();
            return true;
          }
        }
        else if(Actions.currentScene != 'home'){
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
          {/* <Drawer
            key="drawer"
            contentComponent={()=><Text>drawer</Text>}
            drawerIcon={({focused})=>
            <Icon 
              name="menu"
            />}
            drawerWidth={400}
            > */}
            <Scene key="root" hideNavBar>
              <Tabs
                key='tabbar'
                activeTintColor='red'
                inactiveTintColor='#949494'
                tabStyle={{backgroundColor:'#fff'}}
              >
                {/* 首页*/}
                <Scene key='rocket'
                    hideNavBar
                    title='首页'
                    icon={({focused})=>
                      <Icon 
                        name="home" 
                        color={focused?'red':'#949494'}
                      />}
                >
                  <Scene key="home" component={Work} hideNavBar={true}/>
                </Scene>
                <Scene key='classify'
                    hideNavBar
                    title='商品分类'
                    icon={({focused})=>
                      <Icon 
                        name="appstore" 
                        color={focused?'red':'#949494'}
                      />}
                      component={First}
                />
                <Scene key='personal'
                    title='个人中心'
                    icon={({focused})=>
                      <Icon 
                        name="user" 
                        color={focused?'red':'#949494'}
                      />}
                >
                  <Scene key="my" component={My} hideNavBar/>
                  <Scene 
                    title='我的发布'
                    key="tit" 
                    component={Title} 
                    hideTabBar
                    navigationBarStyle={{backgroundColor:'#f23030'}}
                    backButtonImage={require('./assets/return.png')}
                    renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    titleStyle={{flex:1,textAlign:'center',color:'white'}}
                  />
                </Scene>
              </Tabs>
            </Scene>
          {/* </Drawer> */}
        </Lightbox>
        <Scene initial={!isLogin} key="login" component={Login}/>
        <Scene key="register" component={Register}/>  
      </Modal>
      </Overlay>
    </Router>
  )
};


export default App;
