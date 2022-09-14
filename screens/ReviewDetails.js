import React from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import Card from "../shared/Card";
import { globalStyles, images } from "../styles/globalStyles";

export default function ReviewDetails({ navigation, route }) {
  const { item } = route.params;
  console.log(item);

  const handlePress = () => {
    navigation.navigate("About");
  };
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating </Text>
          <Image source={images.ratings[item.rating]} />
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({

  rating: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderWidth: 1,
    borderTopColor: "#eee",
  },
});
