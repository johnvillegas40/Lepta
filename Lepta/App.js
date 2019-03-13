import React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import Placeholder from "./src/screens/Placeholder";

const store = configureStore();

// Register Screens

Navigation.registerComponent(
  `lepta.Placeholder`,
  () => props => (
    <Provider store={store}>
      <Placeholder {...props} />
    </Provider>
  ),
  () => Placeholder
);

// Start Application
const startMainApp = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: "lepta.Placeholder"
      }
    }
  });
};

export default startMainApp;
