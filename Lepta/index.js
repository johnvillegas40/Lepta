import React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import startMainApp from "./App";
import Placeholder from "./src/screens/Placeholder";
import configureStore from "./src/store/configureStore";

Navigation.events().registerAppLaunchedListener(() => startMainApp());
