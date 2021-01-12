import * as React from 'react'
import {View,Component,TouchableOpacity,Text,StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class RiddlesAns5 extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddlesAns')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Answers-5'/>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>49.Your legs</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>50.Seven</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>51.Nine</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>52.one,two and three</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>53.Five in total : Each daughter has the same brother</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>54.Neither: Both of them weigh a ton</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>55.A garbage truck</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>56.They are a grandfather, father and son</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>57.Three</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>58.Three: A blonde, a brunette and a redhead</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>59.Two</Text> <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text> </View>

        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddleAnsPage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}