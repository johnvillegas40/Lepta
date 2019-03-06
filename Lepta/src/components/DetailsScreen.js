import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class DetailsScreen extends Component {
  render() {
    let details =
      "This app is your one stop shop to manage your field service. You will be able to track everything, and submit.";
    return (
      <View style={styles.container}>
        <Text style={styles.details}>{details}</Text>

        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push("Details")}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  details: {
    fontSize: 35,
    textAlign: "center",
    margin: 10,
    fontWeight: "600"
  },
  buttonContainer: {
    margin: 10
  }
});
