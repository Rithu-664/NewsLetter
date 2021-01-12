import * as React from 'react';
import {View, Component, Text, TouchableOpacity,StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class NewsScreen extends React.Component{
  render(){
    return(
      <View>
       <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('HomeScreen')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
      <AppHeader text="News"/>
        <View>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('TodayNews')}}><Text style={styles.buttonTextStyle}>News Headlines</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('Riddles')}}><Text style={styles.buttonTextStyle}>Riddles</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('RiddlesAns')}}><Text style={styles.buttonTextStyle}>Answers</Text></TouchableOpacity>
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
    fontSize: 18,
  },
});