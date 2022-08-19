/* eslint-disable react-native/no-inline-styles */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
const DEFAULT_IMAGE = "https://reactnative.dev/img/tiny_logo.png";
function NoStory({ navigation }) {
  const [variable, setVariable] = useState(2);
  const [background, setBackground] = useState([]);
  const [modalvisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(
    "https://reactnative.dev/img/tiny_logo.png"
  );

  const pickingImage = () => {
    setModalVisible(true);
  };
  const deleteImage = () => {
    setImage(DEFAULT_IMAGE);
    setModalVisible(false);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }

    setModalVisible(false);
  };
  const pickFromCamera = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }

    setModalVisible(false);
  };
  const storyHandler = () => {
    navigation.navigate("StoryScreen");
    setVariable(1);
    if (variable === 1) {
      setBackground([styles.imageContainer2]);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.container}>
        {variable === 1 ? (
          <View>
            <TouchableOpacity onLongPress={pickingImage} onPress={storyHandler}>
              <View style={[styles.imageContainer1, background]}>
                <Image
                  style={[styles.image, styles.imageContainer1, background]}
                  source={{ uri: image }}
                />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={styles.imagecontainer}>
              <TouchableOpacity onLongPress={pickingImage}>
                <Image style={styles.image} source={{ uri: image }} />
              </TouchableOpacity>
            </View>

            <Button onPress={storyHandler} title="AddStory" />
          </View>
        )}

        <View style={styles.textbox}>
          <Text style={styles.text}>Varsha</Text>
          <Text style={styles.text}> IIT Hyderabad</Text>
        </View>
      </View>
      <Modal visible={modalvisible}>
        <View style={styles.modalButton}>
          <Button
            title="Gallery"
            style={styles.icon}
            onPress={pickFromCamera.bind()}
          />
          <Button title="Camera" onPress={pickImage} style={styles.icon} />
          <Button title="Delete" onPress={deleteImage} style={styles.icon} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
export default NoStory;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    backgroundColor: "purple",
    margin: 20,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 3,
  },
  imagecontainer: {
    padding: 12,
    borderRadius: 32,
  },
  imageContainer1: {
    padding: 12,

    borderColor: "green",
  },
  imageContainer2: {
    padding: 12,

    borderColor: "grey",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  textbox: {
    padding: 30,
    margin: 30,
  },

  modalButton: {
    marginTop: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "space-between",
  },
  icon: {
    margin: 12,
  },
});
