import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";

import CarouselCards from "./CarouselCards";

const ListIssues = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const url = `https://api.github.com/search/issues?q=state:open+label:${route.params.paramKey.labels}+language:${route.params.paramKey.language}&per_page=${route.params.paramKey.numberOfItems}`;

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(url)
      .then(
        (res) => {
          console.log(url);
          setRepositories(res.data.items);
          setIsLoading(false);
        },
        (rejection) => {
          if (rejection.response.status === 403) console.log(rejection);
        }
      )
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);
  return (
    <ScrollView>
      <ActivityIndicator />
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/background.png")}
          style={styles.background}
        >
          <CarouselCards data={repositories} navigation={navigation} />
        </ImageBackground>
      </View>

      {/* <FlatList
        data={repositories}
        keyExtractor={(item) => item.id}
        extraData={isLoading}
        renderItem={({ item }) => {
          console.log(item.title);
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.language}</Text>
            </View>
          );
        }}
      /> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  headerDate: {
    fontSize: 14,
    fontWeight: "700",
    color: "orange",
    textTransform: "uppercase",
  },
  headerTitle: {
    fontSize: 33,
    fontWeight: "bold",
  },
  headerImageNotification: {
    height: 14,
    width: 14,
    borderRadius: 6,
    position: "absolute",
    backgroundColor: "red",
    right: -4,
    top: -4,
    borderWidth: 2,
    borderColor: "white",
  },
  blogTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
  },
  blogProfilePic: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  blogUsername: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  readTime: {
    fontSize: 14,
    color: "white",
  },
});
export default ListIssues;
