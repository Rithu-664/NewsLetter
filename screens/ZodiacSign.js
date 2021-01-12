import * as React from 'react'
import {View,Component,Text,TouchableOpacity,StyleSheet} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ZodiacSign extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:'darkslateblue'}}>
      <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('HoroScope')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>
        <AppHeader text="Find out your zodiac sign"/>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Dec 22 - Jan 20, you are a Capricorn</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Jan 21 - Feb 19, you are a Aquarius</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Feb 20 - Mar 20, you are a Pisces</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Mar 21 - Apr 19, you are a Aries</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Apr 20 - May 20, you are a Taurus</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between May 21 - Jun 21, you are a Gemini</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Jun 22 - Jul 23, you are a Cancer</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Jul 24 - Aug 23, you are a Leo</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Aug 24 - Sept 22, you are a Virgo</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Sept 23 - Oct 22, you are a Libra</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Oct 23 - Nov 22, you are a Scorpio</Text>
        </View>
        <View style={{backgroundColor:'black',marginTop:20}}>
          <Text style={[styles.textStyle]}>If you were born on any dates between Nov 23 - Dec 20, you are a Sagitarius</Text>
        </View>
        
      </View>
      
    )
  }
}

var styles = StyleSheet.create({
  textStyle:{
    fontFamily:'courier',
    fontSize:18,
    color:'white',
  }
})