/* eslint-disable react-native/no-inline-styles */

import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Animated,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";

function StoryScreen({ navigation }) {
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, [progress, navigation]);

  const [progress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ["0%", "100%"],
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ImageBackground
        resizeMode="stretch"
        style={styles.image}
        source={require("./article.jpg")}
      >
        <View>
          <View
            style={{
              height: 5,
              width: "100%",
              borderWidth: 1,
              backgroundColor: "black",
              position: "absolute",
              top: 18,
              zIndex: 1,
            }}
          >
            <Animated.View
              style={{
                height: "100%",
                backgroundColor: "grey",
                width: progressAnimation,
              }}
            />
          </View>
        </View>

        <View style={styles.textcontainer}>
          <Text style={styles.text}>This is bad guys!!!</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
export default StoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  textcontainer: {
    flex: 1,
    textAlign: "center",
    marginTop: 20,
  },
});
