import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Λεπτά!</Text>
        <Text>"Coming Soon to a Congregation near YOU!"</Text>
        <View style={styles.buttonView}>
          <Button
            title="Click to see Details"
            onPress={() => this.props.navigation.navigate("Details")}
          />
          <TextInput
            style={{
              height: 40,
              color: "blue",
              borderColor: "black",
              borderWidth: 1
            }}
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
