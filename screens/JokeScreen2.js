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

export default class JokeScreen2 extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:'darkcyan'}}>
        <AppHeader text="Jokes-2"/>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>The first thing I do when I wake up is: "Try to sleep again"</Text>
        </View>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>Crazy people don't know they are crazy. I know I'm crazy, therefore I'm not crazy. Isn't that crazy?</Text>
        </View>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>The police pulled me over and asked me 'do you know how fast you were going?'I said obviously not fast enouch cause you caught me.</Text>
        </View>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>People who wonder whether the glass is half empty or half full miss the point.The galss is refillable</Text>
        </View>
        <View style={{marginTop:15,marginBottom:20,backgroundColor:'cyan'}}>
          <Text style={styles.jokeTextStyle}>Checking your phone to see what time it is and then checking again because the first time you weren't paying attention 🙋‍♀️</Text>
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
    paddingRight:20
  },
  pageNumber:{
    padding:15,
    marginTop:15,
    marginBottom:45
  }
})