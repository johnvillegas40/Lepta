import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/components/HomeScreen";
import DetailsScreen from "./src/components/DetailsScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
