import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WeeklyLimitSceen from "./screens/WeeklyLimitSceen";
import DebitScreen from "./screens/DebitScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "./styles/index";
import { SvgLogo, SvgAccount, SvgCredit, SvgCard , SvgPayment} from "./assets/svg/svg";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { navigationRef } from "./utils/NavigationService";
import { PROFILE_SCREEN, HOME_SCREEN,TABS,PAYMENTS_SCREEN,CREDIT_SCREEN,DEBIT_CARD_SCREEN, WEEKLY_SPENDING_LIMIT_SCREEN, SPLASH_SCREEN } from "./constants/ScreenNames";
import StaticScreen from "./screens/StaticScreen";
import SplashScreen from "./screens/SplashScreen";

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
          initialRouteName={TABS}
          screenOptions={screenOptions}
        >
          <Tab.Screen
            name={HOME_SCREEN}
            component={StaticScreen}
            options={{
              tabBarIcon: ({ color }) => <SvgLogo color={color} />,
            }}
          />
          <Tab.Screen
            name={TABS}
            component={DebitScreenNavigator}
            options={{
              tabBarIcon: ({ color }) => <SvgCard color={color} />,
            }}
          />
         <Tab.Screen
            name={PAYMENTS_SCREEN}
            component={StaticScreen}
            options={{
              tabBarIcon: ({ color }) => <SvgPayment color={color} />,
            }}
          />
          <Tab.Screen
            name={CREDIT_SCREEN}
            component={StaticScreen}
            options={{
              tabBarIcon: ({ color }) => <SvgCredit color={color} />,
            }}
          />
          <Tab.Screen
            name={PROFILE_SCREEN}
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
    <Stack.Navigator initialRouteName={SPLASH_SCREEN} screenOptions={screenOptions}>
      <Stack.Screen name={DEBIT_CARD_SCREEN} component={DebitScreen} />
      <Stack.Screen name={WEEKLY_SPENDING_LIMIT_SCREEN} component={WeeklyLimitSceen} />
      <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
    </Stack.Navigator>
  );
};
