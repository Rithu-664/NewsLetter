import * as React from 'react'
import {View,Component,Text,TouchableOpacity,StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class RiddlesAns extends React.Component{
  render(){
    return(
      <View>
        <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('NewsScreen')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text='Answers'/>

        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>1.An egg</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>2.A candle</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>3.All of them</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>4.A sponge</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>5.The future</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>6.There aren’t any—it’s a one-story house.</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>7.A promise</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>8.A bank</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>9.Darkness</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>10.David</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>11.A piano</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        <View>
          <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18}}>12.Your right elbow</Text>
          <Text style={{fontWeight:'bold',fontSize:20}}>-----------------------------------------</Text>
        </View>
        
        <View>
          <TouchableOpacity style={{backgroundColor:'black', alignItems:"center"}} onPress={()=>{this.props.navigation.navigate('RiddleAnsPage')}}><Text style={{fontFamily:'cursive',fontWeight:'bold',fontSize:17,color:'white', marginTop:30,marginBottom:20}}>MORE...</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}