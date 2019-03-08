import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/components/HomeScreen";
import DetailsScreen from "./src/components/DetailsScreen";
import LogoTitle from "./src/components/LogoTitle";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#eee"
      },
      headerTintColor: "blue",
      headerTitleStyle: {
        fontWeight: "200"
      },
      headerRight: <LogoTitle />
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
