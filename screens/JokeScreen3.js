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


export default class JokeScreen3 extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:'darkcyan'}}>
      <AppHeader text="Jokes-3"/>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>They say 'DON'T TRY THIS AT HOME!'...So I'm going to go to my friend's house and try it</Text>
        </View>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>I wish I lived in a world where mosquitoes would suck 'FAT' instead of blood.</Text>
        </View>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>Admit it...you've pushed a door that says pull.</Text>
        </View>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>I am in one of those moods where I just want to throw a book at someone's face and be like...'I FaceBooked you.'</Text>
        </View>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>I can't decide if people that wear pajamas in public have given up on life or are living it to the fullest!</Text>
        </View>
        <View style={{marginTop:2,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>I don't care what people think of me. At least mosquitoes find me attractive</Text>
        </View>
        <View style={styles.pageNumbers}>
        <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'white'}]}onPress={()=>{this.props.navigation.navigate('JokeScreen')}}><Text>1</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'white'}]}onPress={()=>{this.props.navigation.navigate('JokeScreen2')}}><Text>2</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'white'}]}onPress={()=>{this.props.navigation.navigate('JokeScreen3')}}><Text>3</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}


var styles = StyleSheet.create({
  jokeTextStyle:{
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
    paddingRight:20,
    marginBottom:10
  },
  pageNumber:{
    padding:15
  }
});