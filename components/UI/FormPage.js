import React, { useState } from "react";
import { View, StyleSheet, Button,Image } from "react-native";
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
  numberOfItems:t.Number,
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
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/mainLogo.png")}
          resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
        />
      </View>
      <Form ref={(c) => setFormRef(c)} type={IssueSearch} />
      <Button
        title="Search!"
        onPress={() => {
          const val = handleSubmit();
          props.navigation.navigate("Issues", {
            paramKey: val,
          });
        }}
      />
    </View>
  );
};

export default FormPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
    padding: 50,
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150,
    
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 75,
  },
});
