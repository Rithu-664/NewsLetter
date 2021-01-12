import * as React from 'react'
import {View,Component,Text,StyleSheet,TouchableOpacity} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class Riddle6 extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddlePage')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Riddles-6'/>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>40.What is full of holes but still holds water?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>41.What gets wet while drying?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>42.A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>43.What can’t talk but will reply when spoken to?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>44.I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>45.I’m found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>46.If you’re running in a race and you pass the person in second place, what place are you in?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>47.What has one eye, but can’t see?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddlePage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}