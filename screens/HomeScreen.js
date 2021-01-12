import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import JokeScreen from './JokeScreen';
import HoroScopeScreen from './HoroScope';
import NewsScreen from './NewsScreen';
import WeatherScreen from './WeatherScreen';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {

  constructor(){
    super();
    this.state={
      like:0,
      dislike:0
    }
  }

  likeCount=()=>{
    this.setState({like:this.state.like+1})
  }
  dislikeCount=()=>{
    this.setState({dislike:this.state.dislike+1})
  }

  render() {
    return (
      <View>
        <AppHeader text="News Letter" />
        <View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 70,
              borderWidth: 4,
              marginTop: 100,
            }}
            onPress={() => {
              this.props.navigation.navigate('JokeScreen');
            }}>
            <Text style={styles.buttonTextStyle}>Wanna Hear a Joke?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.buttonStyle]}
            onPress={() => {
              this.props.navigation.navigate('HoroScope');
            }}>
            <Text style={styles.buttonTextStyle}>Horoscope</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.buttonStyle]}
            onPress={() => {
              this.props.navigation.navigate('NewsScreen');
            }}>
            <Text style={styles.buttonTextStyle}>News</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.buttonStyle]}
            onPress={() => {
              this.props.navigation.navigate('WeatherScreen');
            }}>
            <Text style={styles.buttonTextStyle}>Weather</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textAlign: 'center',
            margin: 5,
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'cursive',
            marginTop: 20,
          }}>
          Rate us
        </Text>
        <View style={styles.ratingContainer}>
        <View>
        <Text style={{fontSize:20, fontFamily:'cursive', marginLeft:92, marginBottom:10}}>{this.state.like}</Text>
          <TouchableOpacity onPress={this.likeCount}>
            <View>
              <Image
              style={{ width: 50, height: 50, marginLeft: 75 }}
              source={require('../assets/thumbsup.png')}
            />
            </View>
            
          </TouchableOpacity>
        </View>
          

          <View>
          <Text style={{fontSize:20, fontFamily:'cursive', marginLeft:92, marginBottom:10}}>{this.state.dislike}</Text>
            <TouchableOpacity onPress={this.dislikeCount}>
          <View>
            <Image
              style={{ width: 50, height: 50, marginLeft: 75 }}
              source={require('../assets/thumbsdown.png')}
            />
          </View>
            
          </TouchableOpacity>
          </View>
          
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 70,
    borderWidth: 4,
    marginTop: 30,
  },
  buttonTextStyle: {
    color: 'blue',
    fontFamily: 'cursive',
    fontSize: 18,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
