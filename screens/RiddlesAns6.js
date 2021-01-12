import * as React from 'react'
import {View,Component,TouchableOpacity,Text,StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class RiddlesAns6 extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddlesAns')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Answers-6'/>

          <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>60.Four sisters and Three brothers</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>61.NOON</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>62.The word 'not'</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>63.The letter 'g'</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>64.Queue</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>65.When there are two beats (beets) to the measure</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>66.Isle (add “a” to make “aisle”)</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>67.A mongoose</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>68.Nothing</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>69.A map</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>70.A stapler</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

          <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>71.The man's son</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddleAnsPage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
