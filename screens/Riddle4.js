import * as React from 'react'
import {View,Component,Text,StyleSheet,TouchableOpacity} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class Riddle4 extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddlePage')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Riddles-4'/>

         
         <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>26.What has words, but never speaks?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
         <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>27.What runs all around a backyard, yet never moves?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
         <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>28.What has a thumb and four fingers, but is not a hand?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
         <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>29.What has a head and a tail but no body?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
         <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>30.Where does one wall meet the other wall?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
         <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>30.What building has the most stories?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
         <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>31.What kind of coat is best put on wet?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>32.What five-letter word becomes shorter when you add two letters to it?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        
        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddlePage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}