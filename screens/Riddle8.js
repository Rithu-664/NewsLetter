import * as React from 'react'
import {View,Component,Text,StyleSheet,TouchableOpacity} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class Riddle8 extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddlePage')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Riddles-8'/>

        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>56.Two fathers and two sons are in a car, yet there are only three people in the car. How?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>57.A little girl goes to the store and buys one dozen eggs. As she is going home, all but three break. How many eggs are left unbroken?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>58.A man describes his daughters, saying, “They are all blonde, but two; all brunette but two; and all redheaded but two.” How many daughters does he have?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>59.If there are three apples and you take away two, how many apples do you have?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>60.A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many brothers and sisters are there in the family?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddlePage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}