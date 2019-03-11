import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

class LogoTitle extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => alert("Yes, oh my goodness this is a button.")}
      >
        <Image
          source={require("../img/lepta2.gif")}
          style={{ height: 50, width: 50 }}
        />
      </TouchableOpacity>
    );
  }
}

export default LogoTitle;
