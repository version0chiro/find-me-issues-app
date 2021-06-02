import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Linking,
  Button,
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item }) => {
  let repoNameList = item.repository_url.split("/");
  const repoName = repoNameList[repoNameList.length - 1];

  return (
    <View style={styles.container} key={item.id}>
      <Image
        // source={item.imgUrl}
        source={{ uri: item.user.avatar_url }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.header}>{repoName}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <Button
        onPress={() => Linking.openURL(item.html_url)}
        title="Go to issue"
        color="#841584"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    borderRadius: 10,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    paddingTop: 10,
    marginVertical: 20,
    // marginBottom: 0,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    // paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
