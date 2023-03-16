import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WeeklyLimitSceen from "./screens/WeeklyLimitSceen";
import DebitScreen from "./screens/DebitScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, PLATFORM, SIZES } from "./styles/index";
import { SvgLogo, SvgAccount, SvgCredit, SvgCard , SvgPayment} from "./assets/svg/svg";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { navigationRef } from "./utils/NavigationService";
import { Alert } from "react-native";
import StaticScreen from "./screens/StaticScreen";

export default function RootNavigation() {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    headerShown: false,
    headerTransparent: true,
    headerBackTitleVisible: false,
    tabBarActiveTintColor: COLORS.primaryGreen,
    tabBarInactiveTintColor: COLORS.lightGray,
  };

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Navigator
          initialRouteName="Debit Card"
          screenOptions={screenOptions}
        >
          <Tab.Screen
            name="Home"
            component={StaticScreen}
            options={{
              tabBarIcon: ({ color }) => <SvgLogo color={color} />,
            }}
          />
          <Tab.Screen
            name="Debit Card"
            component={DebitScreenNavigator}
            options={{
              tabBarIcon: ({ color }) => <SvgCard color={color} />,
            }}
          />
         <Tab.Screen
            name="Payments"
            component={StaticScreen}
            options={{
              tabBarIcon: ({ color }) => <SvgPayment color={color} />,
            }}
          />
          <Tab.Screen
            name="Credit"
            component={StaticScreen}
            options={{
              tabBarIcon: ({ color }) => <SvgCredit color={color} />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={StaticScreen}
            options={{
              tabBarIcon: ({ color }) => <SvgAccount color={color} />,
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
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Debit Card" component={DebitScreen} />
      <Stack.Screen name="Limit" component={WeeklyLimitSceen} />
    </Stack.Navigator>
  );
};
