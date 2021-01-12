import * as React from 'react'
import {View,Component,Text,TouchableOpacity,StyleSheet} from 'react-native'

export default class ZodiacMeaning extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:'hotpink'}}>
      <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('HoroScope')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <View style={{backgroundColor:'black',color:'white',marginTop:10}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Aries people have the qualities of being impulsive, leaders, very impatient. They also are natural-born entrepreneurs.</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Taurus people are patient yet can be stubborn.Once they make up their mind it's hard to chage their decision</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Gemini people that's the son of the twins. They're always changing their mind.The qualities of Gemini are that they are very curious, social and friendly</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Cancer people are sensitive and they are very loving and sweet people</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Leo people are very loyal, generous and honorable</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Virgo people are very compulsive. They could be either very neat or very sloppy</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Libra's are all about beauty, grace etc..</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Scorpio people are very intense. They don't take anything light-heartedly</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Sagittarius people are light-hearted.</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Capricorn people are highly ambitious. They are also really organized</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Aquarius people love to be around groups of people and they often make great doctors.</Text>
        </View>
        <View style={{backgroundColor:'black',color:'white',marginTop:30,marginBottom:20}}>
          <Text style={{color:'white',fontFamily:'cursive'}}>Pisces people are also very sensitive. They are also highly sympathetic.</Text>
        </View>
      </View>
    )
  }
}