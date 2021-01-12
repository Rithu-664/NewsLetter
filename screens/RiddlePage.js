import * as React from 'react'
import {View,Component,TouchableOpacity,StyleSheet,Text} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class RiddlePage extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('Riddles')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text="More Riddles"/>
        <View style={styles.pageNumbers}>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddles')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>1</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddle2')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>2</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddle3')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>3</Text></TouchableOpacity>
        </View>
        <View style={styles.pageNumbers}>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddle4')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>4</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddle5')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>5</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddle6')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>6</Text></TouchableOpacity>
        </View>
        <View style={styles.pageNumbers}>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddle7')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>7</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddle8')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>8</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddle9')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>9</Text></TouchableOpacity>
        </View>
        <View style={[{alignItems:'center'}]}>
          <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('Riddle10')}}><Text style={{fontWeight:'bold',
    fontFamily:'cursive'}}>10</Text></TouchableOpacity>
         </View>
      </View>
    )
  }
}

var styles=StyleSheet.create({
  pageNumbers:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:'row',
    paddingBottom:5,
    justifyContent:"space-between",
    paddingLeft:30,
    paddingRight:30
  },
  pageNumber:{
    padding:15,
    marginTop:50,
  }
})