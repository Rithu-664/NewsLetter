import * as React from 'react';
import {View, Component, Text, TouchableOpacity,StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class WeatherScreen extends React.Component{
  render(){
    return(
      <View>
      <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('HomeScreen')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
      <AppHeader text='Weather'/>
        <View style={[styles.flexColumn,{alignItems:"center"}]}>
          <Text style={{fontFamily:'cursive',fontSize:20,fontWeight:"bold"}}>Morning</Text>
          <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:500}}>24°C</Text>
          <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:500}}>Chance of rain:20%</Text>
        </View>
        <View style={[styles.flexColumn,{alignItems:"center"}]}>
          <Text style={{fontFamily:'cursive',fontSize:20,fontWeight:"bold"}}>Afternoon</Text>
          <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:500}}>29°C</Text>
          <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:500}}>Chance of rain:40%</Text>
        </View>
        <View style={[styles.flexColumn,{alignItems:"center"}]}>
          <Text style={{fontFamily:'cursive',fontSize:20,fontWeight:"bold"}}>Evening</Text>
          <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:500}}>29°C</Text>
          <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:500}}>Chance of rain:55%</Text>
        </View>
        <View style={[styles.flexColumn,{alignItems:"center"}]}>
          <Text style={{fontFamily:'cursive',fontSize:20,fontWeight:"bold"}}>Night</Text>
          <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:500}}>26°C</Text>
          <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:500}}>Chance of rain:20%</Text>
        </View>
      </View>
    )
  }
}

var styles=StyleSheet.create({
  flexColumn:{
    display:"flex",
    flexDirection:"column",
    marginBottom:40
  }
})