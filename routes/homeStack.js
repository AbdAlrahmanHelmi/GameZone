import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNavigationContainerRef } from "@react-navigation/native";
import Home from "../screens/Home";
import ReviewDetails from "./../screens/ReviewDetails";

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};
const HomeStack = createNativeStackNavigator(screens);

export default createNavigationContainerRef(HomeStack);
