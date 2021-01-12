import * as React from 'react'
import {View,Component,Text,StyleSheet,TouchableOpacity} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class Riddle7 extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddlePage')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Riddles-7'/>

        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>48.What has lots of eyes, but can’t see?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>49.What has a bottom at the top?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>50.I am an odd number. Take away a letter and I become even. What number am I?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>51.If two’s company, and three’s a crowd, what are four and five?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>52.What three numbers, none of which is zero, give the same result whether they’re added or multiplied?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>53.Mary has four daughters, and each of her daughters has a brother. How many children does Mary have?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>54.Which is heavier: a ton of bricks or a ton of feathers?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>55.What has four wheels and flies?</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddlePage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}