import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
let actionArr = [
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},

]
export default class Userinfor extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View>
                <FlatList />
                {
                    actionArr.map((item,index)=>{
                        if(index==5){
                            return <View onPress={()=>{}}></View>
                        }
                        return <View>
                            <Text>{item.title}</Text>
                        </View>
                    })
                }
            </View>
        )
    }
}
