import React from "react";
import { Navigation } from "react-native-navigation";
import startMainApp from "./App";

Navigation.events().registerAppLaunchedListener(() => startMainApp());
