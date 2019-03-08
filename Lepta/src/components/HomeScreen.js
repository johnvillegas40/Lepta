import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import LogoTitle from "./LogoTitle";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Lepta"
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../img/lepta2.gif")}
          style={{ height: 130, width: 130 }}
        />
        <Text style={styles.welcome}>Welcome to Lepta!</Text>
        <Text>"Coming Soon to a Congregation near YOU!"</Text>
        <View style={styles.buttonView}>
          <Button
            title="Click to see Details"
            onPress={() =>
              this.props.navigation.navigate("Details", {
                itemId: Math.floor(Math.random() * 100),
                password: Math.floor(Math.random() * 10000000),
                header: "This is a Nested Details screen"
              })
            }
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
