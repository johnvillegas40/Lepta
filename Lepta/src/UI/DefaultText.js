import React from "react";
import { Text, View, Platform, StyleSheet } from "react-native";

const DefaultText = props => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: Platform.select({
    ios: {},
    android: {
      fontFamily: "Roboto"
    }
  })
});

export default DefaultText;
