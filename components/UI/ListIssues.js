import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";

const ListIssues = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const url = `https://api.github.com/search/issues?q=state:open+label:${route.params.paramKey.labels}+language:${route.params.paramKey.language}&per_page=10`;

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
  },[]);
  return (
    <View>
      <Text>Hello world</Text>
      <FlatList
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
      />

    </View>
  );
};

export default ListIssues;
