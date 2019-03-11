import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import LogoTitle from "./LogoTitle";

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <LogoTitle />,
      title: navigation.getParam("header", "Details")
    };
  };
  render() {
    const { button, buttonContainer } = styles;
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const password = navigation.getParam("password", "NO PASSWORD");
    let details =
      "This app is your one stop shop to manage your field service. You will be able to track everything, and submit.";
    return (
      <View style={styles.container}>
        <Text style={styles.details}>{details}</Text>
        <Text>itemId: {itemId}</Text>
        <Text>password: {password}</Text>

        <View style={buttonContainer}>
          <View style={button}>
            <Button
              title="Go to Details... again"
              onPress={() =>
                this.props.navigation.push("Details", {
                  itemId: Math.floor(Math.random() * 100),
                  password: Math.floor(Math.random() * 10000000)
                })
              }
            />
          </View>
          <View style={button}>
            <Button
              title="Go to Home"
              onPress={() => this.props.navigation.navigate("Home")}
            />
          </View>
          <View style={button}>
            <Button
              title="Go back"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          <View style={button}>
            <Button
              title="Update the Title"
              onPress={() =>
                this.props.navigation.setParams({ header: "NEW HEADER!" })
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  details: {
    fontSize: 35,
    textAlign: "center",
    margin: 10,
    fontWeight: "600"
  },
  buttonContainer: {},
  button: {
    padding: 10
  }
});
