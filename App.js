import * as React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Component,} from 'react-native';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import HoroScopeScreen from './screens/HoroScope'
import JokeScreen from './screens/JokeScreen'
import NewsScreen from './screens/NewsScreen'
import WeatherScreen from './screens/WeatherScreen'
import AppHeader from './components/AppHeader'
import Constants from 'expo-constants'
import JokeScreen2 from './screens/JokeScreen2'
import JokeScreen3 from './screens/JokeScreen3'
import ZodiacSign from './screens/ZodiacSign'
import ZodiacMeaning from './screens/ZodiacMeaning'
import TodayNews from './screens/TodayNews'
import Riddles from './screens/Riddles'
import Riddle2 from './screens/Riddle2'
import Riddle3 from './screens/Riddle3'
import Riddle4 from './screens/Riddle4'
import Riddle5 from './screens/Riddle5'
import Riddle6 from './screens/Riddle6'
import Riddle7 from './screens/Riddle7' 
import Riddle8 from './screens/Riddle8'
import Riddle9 from './screens/Riddle9'
import Riddle10 from './screens/Riddle10'
import RiddlesAns from './screens/RiddlesAns'
import RiddlePage from './screens/RiddlePage'
import RiddlesAnsPage from './screens/RiddlesAnsPage'
import RiddlesAns2 from './screens/RiddlesAns2'
import RiddlesAns3 from './screens/RiddlesAns3'
import RiddlesAns4 from './screens/RiddlesAns4'
import RiddlesAns5 from './screens/RiddlesAns5'
import RiddlesAns6 from './screens/RiddlesAns6'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  HoroScope:HoroScopeScreen,
  JokeScreen:JokeScreen,
  NewsScreen:NewsScreen,
  WeatherScreen:WeatherScreen,
  JokeScreen2:JokeScreen2,
  JokeScreen3:JokeScreen3,
  ZodiacScreen:ZodiacSign,
  ZodiacMeaning:ZodiacMeaning,
  TodayNews:TodayNews,
  Riddles:Riddles,
  RiddlesAns:RiddlesAns,
  RiddlePage:RiddlePage,
  Riddle2:Riddle2,
  Riddle3:Riddle3,
  Riddle4:Riddle4,
  Riddle5:Riddle5,
  Riddle6:Riddle6,
  Riddle7:Riddle7,
  Riddle8:Riddle8,
  Riddle9:Riddle9,
  Riddle10:Riddle10,
  RiddleAnsPage:RiddlesAnsPage,
  RiddlesAns2:RiddlesAns2,
  RiddlesAns3:RiddlesAns3,
  RiddlesAns4:RiddlesAns4,
  RiddlesAns5:RiddlesAns5,
  RiddlesAns6:RiddlesAns6
})

const AppContainer = createAppContainer(AppNavigator);

