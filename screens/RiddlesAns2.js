import * as React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Component} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class RiddlesAnsPage2 extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddleAnsPage')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Answers-2'/>
        
        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>13.A chalkboard</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>14.A hole</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>15.A dictionary</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>16.A window</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>17.A secret</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>18.It's lid</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>19.A staircase</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>20.A Christmas tree</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>21.A clock</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>22.A cold</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>23.A rubber band</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>24.A table</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddleAnsPage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
       
      </View>
    ) 
  }
}