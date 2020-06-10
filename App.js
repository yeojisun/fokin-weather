import React from "react";
import Loading from "./Loader";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

//import { StyleSheet, Text, View } from 'react-native';

const API_KEY = "321246c0795e8a10b679a0fdf64909db";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    ); // 변수열을 문자에 포함시킬때 `(벡틱)을 쓴다
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      //console.log(response);
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("can't find you.", "so sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
