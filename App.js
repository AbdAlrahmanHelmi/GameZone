import { Text, View, ActivityIndicator } from "react-native";
import About from "./screens/About";
import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";
import { useFonts } from "expo-font";
// import Navigator from "./routes/homeStack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./shared/Header";
import ReviewForm from "./screens/ReviewForm";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerTitle: () => <Header title="GameZone" />,
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Details"
            component={ReviewDetails}
            options={{
              title: "Review Details",
              headerStyle: { backgroundColor: "#eee" },
              headerTitleStyle: { fontWeight: "bold" },
              headerTintColor: "#444",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            options={{
              headerTitle: () => <Header title="About GameZone" />,
              headerStyle: { backgroundColor: "#eee" },
              headerTitleStyle: { fontWeight: "bold" },
              headerTintColor: "#444",
              headerTitleAlign: "center",
            }}
            name="About"
            component={About}
          />
        </Stack.Navigator>
         
      </NavigationContainer>
    );
  }
}
