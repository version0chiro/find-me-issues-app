import "react-native-gesture-handler";

import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FormPage from "../UI/FormPage";
import ListIssues from "../UI/ListIssues";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <View>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Form">
            <Stack.Screen
              name="Form"
              component={FormPage}
              options={{
                title: "First Page", //Set Header Title
                headerStyle: {
                  backgroundColor: "#f4511e", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                  fontWeight: "bold", //Set Header text style
                },
              }}
            />
            <Stack.Screen name="List" component={ListIssues} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <Text> Hello</Text> */}
      </View>
    );
  }
}
