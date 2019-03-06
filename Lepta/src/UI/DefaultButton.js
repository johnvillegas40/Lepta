import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Platform,
  StyleSheet
} from "react-native";

const DefaultButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: "#2196F3",
      borderRadius: 2
    }
  }),
  text: {
    textAlign: "center",
    padding: 8,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        color: "#007AFF",
        fontSize: 18
      },
      android: {
        fontFamily: "Roboto",
        color: "white",
        fontWeight: "500"
      }
    })
  },
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: "#dfdfdf"
    }
  }),
  textDisabled: Platform.select({
    ios: {
      color: "#cdcdcd"
    },
    android: {
      color: "#a1a1a1"
    }
  })
});
export default DefaultButton;
