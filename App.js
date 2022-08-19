//@flow
import NoStory from "./NoStory";
import StoryScreen from "./StoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={NoStory}
          component={NoStory}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="StoryScreen"
          component={StoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
