import React, { useState } from "react";
import {
  Button,
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/Card";
import { globalStyles } from "../styles/globalStyles";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda,Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta , Catch them All(again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Not so 'final'fantasy ",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const addReview = (review) => {
    (review.key = Math.random().toString()),
      setReviews((prevState) => [review, ...prevState]);

    setOpenModal(false);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setOpenModal(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />

            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setOpenModal(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item })}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
