import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import t from "tcomb-form-native";

const Form = t.form.Form;

var Stars = t.enums({
  one: "1 Star",
  two: "2 Stars",
  three: "3 Stars",
  four: "4 Stars",
  five: "5 Stars",
});

var Label = t.enums({
  enhance: "Enhancement",
  helpWanted: "Help Wanted",
  bug: "Bug",
  documentation: "Documentation",
  goodFirstIssue: "Good Issue",
});

const Language = t.enums({
  shell: "shell",
  html: "html",
  javascript: "javascript",
  cpp: "C++",
  c: "C",
  java: "Java",
  python: "python",
});

const IssueSearch = t.struct({
  repositry_name: t.maybe(t.String),
  owner_name: t.maybe(t.String),
  stars: Stars,
  labels: Label,
  language: Language,
});

const FormPage = (props) => {
  const [formRef, setFormRef] = useState(null);
  const handleSubmit = () => {
    const val = formRef.getValue();
    console.log("value:", val);
    return val;
  };
  return (
    <View style={styles.container}>
      <Form ref={(c) => setFormRef(c)} type={IssueSearch} />
      <Button
        title="Search!"
        onPress={() => {
          const val = handleSubmit();
          props.navigation.navigate("Issues", {
            paramKey: val.labels,
          });
        }}
      />
    </View>
  );
};

export default FormPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 50,
    backgroundColor: "#ffffff",
  },
});
