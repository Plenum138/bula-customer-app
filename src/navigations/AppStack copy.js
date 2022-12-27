import React from 'react';
import { Easing, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute, useIsFocused } from '@react-navigation/native';
import colors from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
//apppr
import HomeScreen from '../screens/app/HomeScreen';
import ProductListScreen from '../screens/app/ProductListScreen'
import ProfileScreen from '../screens/app/ProfileScreen';
import NotificationsListScreen from '../screens/app/NotificationsListScreen';
import CartScreen from '../screens/app/CartScreen';
import OrderScreen from '../screens/app/OrderScreen'
import OrderDetailScreen from '../screens/app/OrderDetailScreen'
//profile





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const titleBarHeader = title => {
  return {
    title: title,
    headerStyle: { backgroundColor: secondaryColor },
    headerTintColor: '#fff',
    headerShadowVisible: false,
    headerShadowVisible: false,
  };
};

function HomeStack({ navigation, route }) {

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    const withoutBootomBar = ["CreateProfileScreen", "CreateUserProfileScreen", "BusinessPokerRun", "BusinessInvitePleyer", "BusinessEventDetails", "UserEventDetailScreen", "UserBookingConfirmScreen", 'UserTermsCondtionScreen'];





    if (withoutBootomBar.includes(routeName)) {
      navigation.setOptions({

        tabBarStyle: {
          display: "none",
        },

      });
    } else {

      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          borderTopWidth: 0, backgroundColor: "black",
          height: Platform.OS === 'ios' ? 90 : 60
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>


      <Stack.Screen
        options={{
          title: 'HomeScreen',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.header_color,
            // color:"white",
          },
          headerTitleStyle: {
            color: colors.header_text_color,
          },
          headerTintColor: colors.header_text_color,
          headerShadowVisible: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: 'ProductListScreen',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.header_color,
            // color:"white",
          },
          headerTitleStyle: {
            color: colors.header_text_color,
          },
          headerTintColor: colors.header_text_color,
          headerShadowVisible: false,
        }}
        name="ProductListScreen"
        component={ProductListScreen}
      />


    </Stack.Navigator>
  );
}

function CustomerStack({ navigation, route }) {


  React.useLayoutEffect(() => {

    const routeName = getFocusedRouteNameFromRoute(route);
    const withoutBootomBar = [];

    if (withoutBootomBar.includes(routeName)) {
      navigation.setOptions({

        tabBarStyle: {
          display: "none",
        },

      });
    } else {

      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          borderTopWidth: 0, backgroundColor: "black",
          height: Platform.OS === 'ios' ? 90 : 60
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>


      <Stack.Screen
        options={{
          title: 'CartScreen',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.header_color,
            // color:"white",
          },
          headerTitleStyle: {
            color: colors.header_text_color,
          },
          headerTintColor: colors.header_text_color,
          headerShadowVisible: false,
        }}
        name="CartScreen"
        component={CartScreen}
      />

    </Stack.Navigator>
  );
}

function NotificationStack({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    // name="UserTermsCondtionScreen"
    // name="UserTermsCondtionScreen"
    // name="UserTermsCondtionScreen"
    const withoutBootomBar = ["UserEditProfile", "BusinessEditProfile", "BusinessChangePassword", "BusinessTransactionHistory", "BusinessPaymentMethods", "AddNewCardScreen", "BusinessSettings", "BusinessPrivacyPolicy", 'BusinessTermsCondtions', 'BusinessAboutUs', "UserTransactionHistoryScreen", 'UserPaymentmethodScreen', 'UserSettingScreen', 'UserTermsCondtionScreen', 'UserPrivacyPolicyScreen', 'UserAboutUsScreen, EventDetail'];

    if (withoutBootomBar.includes(routeName)) {
      navigation.setOptions({

        tabBarStyle: {
          display: "none",
        },

      });
    } else {

      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          borderTopWidth: 0, backgroundColor: "black",
          height: Platform.OS === 'ios' ? 90 : 60
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>


      <Stack.Screen
        options={{
          title: 'Notification',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.header_color,
            // color:"white",
          },
          headerTitleStyle: {
            color: colors.header_text_color,
          },
          headerTintColor: colors.header_text_color,
          headerShadowVisible: true,
        }}
        name="NotificationsListScreen"
        component={NotificationsListScreen}
      /></Stack.Navigator>
  );
}

function ProfileStack({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    // name="UserTermsCondtionScreen"
    // name="UserTermsCondtionScreen"
    // name="UserTermsCondtionScreen"
    const withoutBootomBar = [];

    if (withoutBootomBar.includes(routeName)) {
      navigation.setOptions({

        tabBarStyle: {
          display: "none",
        },

      });
    } else {

      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          borderTopWidth: 0, backgroundColor: "black",
          height: Platform.OS === 'ios' ? 90 : 60
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>


      <Stack.Screen
        options={{
          title: 'Profile',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.header_color,
            // color:"white",
          },
          headerTitleStyle: {
            color: colors.header_text_color,
          },
          headerTintColor: colors.header_text_color,
          headerShadowVisible: false,
        }}
        name="ProfileScreen"
        component={ProfileScreen}

      />
      <Stack.Screen
        options={{
          title: 'Order History',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.header_color,
            // color:"white",
          },
          headerTitleStyle: {
            color: colors.header_text_color,
          },
          headerTintColor: colors.header_text_color,
          headerShadowVisible: false,
        }}
        name="OrderScreen"
        component={OrderScreen}

      />
      <Stack.Screen
        options={{
          title: 'Order Details',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.header_color,
            // color:"white",
          },
          headerTitleStyle: {
            color: colors.header_text_color,
          },
          headerTintColor: colors.header_text_color,
          headerShadowVisible: false,
        }}
        name="OrderDetailScreen"
        component={OrderDetailScreen}

      />

    </Stack.Navigator>
  );
}



const AppStack = ({ navigation }) => {
  const isFocused = useIsFocused();

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        //  tabBarShowLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === "home") {
            iconName = focused ? 'home' : "home-outline"
          }
          else if (rn === "cart") {
            iconName = focused ? 'cart' : "cart-outline"
          }
          else if (rn === "notification") {
            iconName = focused ? "notifications-sharp" : 'ios-notifications-outline'
          }
          else if (rn === "profile") {
            iconName = focused ? "person" : 'person-outline'
          }

          return (
            <Ionicons name={iconName} size={size} color={'white'} />
          )
        },
        //   tabBarHideOnKeyboard: true,
        tabBarStyle: { height: 300 },

        // activeBackgroundColor: 'black',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: "grey",
        //  headerShown: true, // For Hide Tab Navigator Heading
        // tabBarShowLabel: false

      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="home" component={HomeStack} />
      <Tab.Screen options={{ headerShown: false }} name="cart" component={CustomerStack} />
      <Tab.Screen options={{ headerShown: false }} name="notification" component={NotificationStack} />
      <Tab.Screen options={{ headerShown: false }} name="profile" component={ProfileStack} />
    </Tab.Navigator>

  );


}

export default AppStack;