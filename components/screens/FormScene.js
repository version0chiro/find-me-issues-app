import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import t from "tcomb-form-native";

const Form = t.form.Form;

var Stars = t.enums({
  O: "1 Star",
  T: "2 Stars",
  Th: "3 Stars",
  F: "4 Stars",
  Fi: "5 Stars",
});

const IssueSearch = t.struct({
  repositry_name: t.maybe(t.String),
  owner_name: t.maybe(t.String),
  stars: Stars,
  terms: t.Boolean,
});

export default class App extends React.Component {
  handleSubmit = () => {
    const val = this._form.getValue();
    console.log("value:", val);
  };
  render() {
    return (
      <View style={styles.container}>
        <Form ref={(c) => (this._form = c)} type={IssueSearch} />
        <Button title="Search!" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff",
  },
});
