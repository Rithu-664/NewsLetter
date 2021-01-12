import * as React from 'react'
import {View,Component,StyleSheet,Text,TouchableOpacity} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class RiddlesAns4 extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddlesAns')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Answers-4'/>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>37.The letter 'r'</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>38.Chicago</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>39.Few</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>40.A sponge</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>41.A towel</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>42.He was bald</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>43.An echo</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>44.Your breath</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>45.Yarn</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>46.Second place</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>47.A needle</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>48.A potato</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddleAnsPage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}