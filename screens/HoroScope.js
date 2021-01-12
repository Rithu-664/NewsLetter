import * as React from 'react';
import {View, Component, Text, TouchableOpacity, StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'
import ZodiacSign from './ZodiacSign'
import ZodiacMeaning from './ZodiacMeaning'

export default class HoroScopeScreen extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('HomeScreen')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
      <AppHeader text="Horoscope"/>
      <View>
        <TouchableOpacity style={styles.buttonStyle}><Text style={styles.buttonTextStyle} onPress={()=>{this.props.navigation.navigate('ZodiacScreen')}}>Find out your zodiac sign</Text></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonStyle}><Text style={{color:'blue',fontFamily:'cursive',fontSize:12}} onPress={()=>{this.props.navigation.navigate('ZodiacMeaning')}}>Meaning of your zodiac sign</Text></TouchableOpacity>
      </View>
      
      </View>
    )
  }
}

var styles = StyleSheet.create({
   buttonStyle: {
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 70,
    borderWidth: 4,
    marginTop: 30,
  },
  buttonTextStyle: {
    color: 'blue',
    fontFamily: 'cursive',
    fontSize: 15,
  },
})