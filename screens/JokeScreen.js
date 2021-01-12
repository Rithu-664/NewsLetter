import * as React from 'react';
import {
  View,
  Component,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AppHeader from '../components/AppHeader'
import HomeScreen from './HomeScreen'
import JokeScreen2 from './JokeScreen2'
import JokeScreen3 from './JokeScreen3'

export default class JokeScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'darkcyan'}}>

      <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('HomeScreen')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
      <AppHeader text="Jokes"/>
        <View style={{marginTop:20,marginBottom:20,backgroundColor:"cyan"}}>
          <Text style={styles.buttonTextStyle}>I'm not short, I'm just more down to Earth than other people</Text>
        </View>

        <View style={{marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.buttonTextStyle}>My mom said follow your dreams, so I went back to bed</Text>
        </View>
        <View style={{marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.buttonTextStyle}>H.O.M.E.W.O.R.K = Half Of My Energy Wasted On Random Knowledge</Text>
        </View>
        <View style={{marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.buttonTextStyle}>Human Logic: Cut the trees, make paper with them and write "Save The Tress!"</Text>
        </View>
        <View style={{marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.buttonTextStyle}>Why can't the house clean itself. It seems to get dirty by itself!</Text>
        </View>
        <View style={{marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.buttonTextStyle}>Whenever you feel sad, just remember that somewhere in this world there is an idiot pulling a door that says "push"</Text>
        </View>
        <View style={{marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.buttonTextStyle}>Exercising would be much more rewarding if calories screamed while you burned them 🤣</Text>
        </View>
        <View style={styles.pageNumbers}>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'white'}]}onPress={()=>{this.props.navigation.navigate('JokeScreen')}}><Text>1</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'white'}]}onPress={()=>{this.props.navigation.navigate('JokeScreen2')}}><Text>2</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'white'}]}onPress={()=>{this.props.navigation.navigate('JokeScreen3')}}><Text>3</Text></TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

var styles = StyleSheet.create({
  buttonTextStyle:{
    color:"black",
    fontFamily:'cursive',
    fontSize:20
  },
  pageNumbers:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:'row',
    paddingBottom:5,
    justifyContent:"space-between",
    paddingLeft:20,
    paddingRight:20
  },
  pageNumber:{
    padding:15,
  }
});
