import * as React from 'react'
import {View,Component,TouchableOpacity,Text,StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class Riddles extends React.Component{
  render(){
    return(
      <View>
         <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('NewsScreen')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text="Riddles"/>

        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>1.What has to be broken before you can use it?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>2.I’m tall when I’m young, and I’m short when I’m old. What am I?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>3.What month of the year has 28 days?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>4.What is full of holes but still holds water?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>5.What is always in front of you but can’t be seen?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>6.There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>7.What can you break, even if you never pick it up or touch it?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>8.I have branches, but no fruit, trunk or leaves. What am I?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddlePage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}