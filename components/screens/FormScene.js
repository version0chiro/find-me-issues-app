import "react-native-gesture-handler";

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FormPage from "../UI/FormPage";
import ListIssues from "../UI/ListIssues";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Form">
            <Stack.Screen name="Form" component={FormPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
