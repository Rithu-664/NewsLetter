import * as React from 'react'
import {View,Component,TouchableOpacity,Text,StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class TodayNews extends React.Component{
  render(){
    return(
      <View>
         <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('NewsScreen')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
         <AppHeader text="News Headlines"/>
         <View>
           <Text style={{fontWeight:'500',fontSize:20}}>Tractor Rally By Farmers Near Delhi Today, Traffic Diversions: 10 Points</Text>
           <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
         </View>
         <View>
           <Text style={{fontWeight:'500',fontSize:20}}>Facebook, Twitter, Instagram Block Trump's Account After Capitol Breach</Text>
           <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
         </View>
         <View>
           <Text style={{fontWeight:'500',fontSize:20}}>Obama slams Trump, says violence at Capitol Hill a moment of 'great dishonour and shame' for US</Text>
           <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
         </View>
         <View>
           <Text style={{fontWeight:'500',fontSize:20}}>Simpsons May Have Predicted US Capitol Hill Violence, and There May Be 'More' to Come</Text>
           <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
         </View>
         <View>
           <Text style={{fontWeight:'500',fontSize:20}}>"Peaceful Transfer Of Power Must Continue": PM On US Capitol Violence</Text>
           <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
         </View>
         <View>
           <Text style={{fontWeight:'500',fontSize:20}}>Germany introduces tougher restrictions as coronavirus cases surge</Text>
           <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
         </View>
         <View>
           <Text style={{fontWeight:'500',fontSize:20}}>Trump rebuffed by Pence, McConnell as allies challenge his election loss</Text>
           <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
         </View>
      </View>
    )
  }
}