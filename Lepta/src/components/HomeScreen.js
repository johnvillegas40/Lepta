import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DefaultButton from "../UI/DefaultButton";
import DefaultText from "../UI/DefaultText";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DefaultText style={styles.welcome}>Welcome to Λεπτά!</DefaultText>
        <DefaultText>"Coming Soon to a Congregation near YOU!"</DefaultText>
        <View style={styles.buttonView}>
          <DefaultButton
            title="Click to see Details"
            onPress={() => this.props.navigation.navigate("Details")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 35,
    textAlign: "center",
    margin: 10,
    fontWeight: "600"
  },
  buttonView: {
    margin: 10
  }
});
