import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WeeklyLimitSceen from "./screens/WeeklyLimitSceen";
import DebitScreen from "./screens/DebitScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, PLATFORM, SIZES } from "./styles/index";
import {SvgLogo} from "./assets/svg/svg";
import { Provider } from 'react-redux'
import { store } from "./redux/store";

export default function RootNavigation() {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    headerShown: false,
    headerTransparent: true,
    headerBackTitleVisible: false,
    tabBarActiveTintColor: COLORS.primaryGreen,
    tabBarInactiveTintColor: COLORS.lightGray,
}

  return (
    <Provider store={store}>
      <NavigationContainer tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Navigator
          initialRouteName="Debit Card"
          screenOptions={screenOptions}
        >
          <Tab.Screen
            name="Debit Card"
            component={DebitScreenNavigator}
            options={{
              tabBarIcon: ({ color }) => <SvgLogo color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const DebitScreenNavigator = () => {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
    headerTransparent: true,
    headerBackTitleVisible: false,
    tabBarActiveTintColor: COLORS.primaryGreen,
    tabBarInactiveTintColor: COLORS.lightGray,
} 
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Debit Card" component={DebitScreen} />
      <Stack.Screen name="Limit" component={WeeklyLimitSceen} />
    </Stack.Navigator>
  );
};
