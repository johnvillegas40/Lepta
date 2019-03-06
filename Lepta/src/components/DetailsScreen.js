import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
