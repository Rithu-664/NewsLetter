import * as React from 'react'
import {View,Component,TouchableOpacity,StyleSheet,Text} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class RiddlesAnsPage extends React.Component{
  render(){
    return(
      <View>
          <View><TouchableOpacity style={{backgroundColor:'whitesmoke',alignItems:'center'}}onPress={()=>{this.props.navigation.navigate('RiddlesAns')}}><Text style={{fontFamily:'cursive'}}>BACK</Text></TouchableOpacity></View>

          <View style={styles.pageNumbers}>
            <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('RiddlesAns')}}><Text style={{fontFamily:'cursive',fontWeight:"bold"}}>1</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('RiddlesAns2')}}><Text style={{fontFamily:'cursive',fontWeight:"bold"}}>2</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('RiddlesAns3')}}><Text style={{fontFamily:'cursive',fontWeight:"bold"}}>3</Text></TouchableOpacity>
          </View>
          <View style={styles.pageNumbers}>
            <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('RiddlesAns4')}}><Text style={{fontFamily:'cursive',fontWeight:"bold"}}>4</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('RiddlesAns5')}}><Text style={{fontFamily:'cursive',fontWeight:"bold"}}>5</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.pageNumber,{backgroundColor:'gray'}]} onPress={()=>{this.props.navigation.navigate('RiddlesAns6')}}><Text style={{fontFamily:'cursive',fontWeight:"bold"}}>6</Text></TouchableOpacity>
          </View>

           <View style={{alignItems:"center",paddingTop:20}}> <Text style={{fontFamily:'cursive',fontWeight:'600',fontSize:18,}}>72.Doing backflips</Text></View>
      </View>
    )
  }
}

var styles=StyleSheet.create({
  pageNumbers:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:'row',
    paddingBottom:5,
    justifyContent:"space-between",
    paddingLeft:30,
    paddingRight:30
  },
  pageNumber:{
    padding:15,
    marginTop:50,
  }
})