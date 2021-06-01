import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const ListIssues = ({route}) => {
  return (
    <View>
      <Text>Hello world</Text>
      <Text>Value returned is {route.params.paramKey}</Text>
    </View>
  );
};

export default ListIssues;
