import * as React from 'react'
import {View,Component,TouchableOpacity,Text,StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class RiddlesAns3 extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddleAnsPage')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Answers-3'/>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>25.A comb</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>26.A book</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>27.A fence</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>28.A glove</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>29.A coin</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>30.A library</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>31.A coat of paint</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>32.Short</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>33.An envelope</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>34.Dozens</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>35.The letter 'o'</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>36.The letter 'e'</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddleAnsPage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}