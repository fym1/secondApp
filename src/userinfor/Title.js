import React, { Component } from 'react'
import { View, Text, ToastAndroid, FlatList,Dimensions } from 'react-native';
import { Button } from '@ant-design/react-native';
var titif = [
    {huifu:'',color:''},
    {huifu:'',color:''},
    {huifu:'',color:''},
    {huifu:'',color:''},
    {huifu:'',color:''},
    {huifu:'',color:''},
    {huifu:'',color:''},
    {huifu:'',color:''},
    {huifu:'',color:''},
    {huifu:'',color:''}

];
const {width,scale} = Dimensions.get('window');
const s = width/640;
export default class Title extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1
        }
    }
    num=()=>{
        for(var i = 0;i<10;i++){
            var num = Math.random()*10;
            if(num <= 5){
                titif[i].huifu = '已回复';
                titif[i].color = 'black'
            }else{
                titif[i].huifu = '待回复';
                titif[i].color = 'red'
            }
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=10&&page='+this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })      
                console.log(typeof(res.data));     
                console.log(res.data[0])   
            })
            this.num()
    }
    lastpage=()=>{
        if(this.state.page>1){
            this.setState({
                page:this.state.page-1
            })
            this.num()
        }else{
            ToastAndroid.show("已经是第一页", ToastAndroid.SHORT);
        }    
    }
    nextpage=()=>{
        this.setState({
            page:this.state.page+1
        })
        this.num()
    }
    // 更新完毕之后执行
    componentDidUpdate(prevProps,prevState){
        // console.log(typeof(this.state.data));
        // console.log(this.state.page);
        fetch('https://cnodejs.org/api/v1/topics?limit=10&&page='+this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })                
            })
    }
    render() {
        return (
            <View style={{backgroundColor:'#eee'}}>
                <View style={{
                    width:'100%',
                    flexDirection:'row',
                }}>
                    <View style={{width:'85%'}}> 
                        {
                            this.state.data.map((item)=>(
                                <View style={{
                                    height:40,
                                    backgroundColor:'#fff',
                                    width:'100%',
                                    marginTop:2,
                                    flexDirection:'row',
                                    fontSize:12,
                                    paddingTop:10,
                                    paddingLeft:'5%'
                                }}>
                                    <Text style={{width:230*s}} numberOfLines={1}>{item.title}.slice(0,15)</Text>
                                    <Text style={{marginLeft:50*s}}>{item.create_at.slice(0,10)}</Text>
                                    <Text>{item.txt}</Text>
                                </View>
                                
                            ))
                        }
                    </View>
                    <View style={{width:'15%'}}>
                        <FlatList
                            data={titif}
                            numColumns={1}
                            style={{width:'100%'}}
                            renderItem={({item}) =><View>
                                <Text style={{
                                    color:item.color,
                                    height:40,
                                    marginTop:2,
                                    backgroundColor:'#fff',
                                    paddingTop:10
                                }}>{item.huifu}</Text>
                                </View>}
                        /> 
                    </View>
                    
                </View>
                
                <View style={{
                    width:'100%',
                    height:100,
                    flexDirection:'row',
                    paddingTop:50,
                    backgroundColor:'#fff',
                    paddingBottom:10
                }}>
                    <Button onPress={()=>this.lastpage()} style={{width:'35%',height:'100%',borderRadius:5,backgroundColor:'#f23030',marginLeft:'7%'}}>
                        <Text style={{color:'#fff'}}>上一页</Text>
                    </Button>
                    <Text style={{marginTop:10,marginLeft:'5%'}}>第{this.state.page}页</Text>
                    <Button onPress={()=>this.nextpage()} style={{width:'35%',height:'100%',borderRadius:5,backgroundColor:'#f23030',marginLeft:'5%'}}>
                        <Text style={{color:'#fff'}}>下一页</Text>
                    </Button >
                </View>
                 
            </View>
        )
    }
}
