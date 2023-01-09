import React from 'react';
import {Easing, Text} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HomeScreen,
  CartScreen,
  NotificationsListScreen,
  ProfileScreen,
  OrderScreen,
  OrderDetailScreen,
  ProductListScreen,
} from '../screens/app/index';
import DashboardScreen from '../screens/app/DashboardScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const titleBarHeader = title => {
  return {
    title: title,
    headerStyle: {backgroundColor: 'grey'},
    headerTintColor: '#fff',
    headerShadowVisible: false,
  };
};

const slideConfig = {
  animation: 'timing',
  config: {
    duration: 350,
    easing: Easing.linear,
  },
};

function AppStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: true,
        gestureEnabled: true,
        transitionSpec: {
          open: slideConfig,
          close: slideConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}

      // options={{
      //   headerBackTitleVisible: false,

      //   headerStyle: {
      //     backgroundColor: colors.body_color,
      //     // color:"white"
      //   },
      //   headerTitle: (
      //     props, // App Logo
      //   ) => (
      //     <View style={styles.dashboardHeaderBox}>
      //       <Image
      //         style={styles.image}
      //         source={{
      //           uri: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      //         }}
      //       />
      //       <Text style={styles.welcomeText}>Welcome, Grocery Shop</Text>
      //     </View>
      //   ),
      //   headerTitleAlign: 'left',
      //   headerTitleStyle: {
      //     color: 'white',
      //   },
      //   headerTintColor: 'white',
      //   headerShadowVisible: false,
      // }}
    >
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomNavigation"
        component={BottomNavigation}
      />

      <Stack.Screen
        options={titleBarHeader('Orders')}
        name="OrderScreen"
        component={OrderScreen}
      />
      <Stack.Screen
        options={titleBarHeader('Order Detail')}
        name="OrderDetailScreen"
        component={OrderDetailScreen}
      />
      <Stack.Screen
        options={titleBarHeader('Product List')}
        name="ProductListScreen"
        component={ProductListScreen}
      />
    </Stack.Navigator>
  );
}

const BottomNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (rn === 'Notification') {
            iconName = focused
              ? 'notifications-sharp'
              : 'ios-notifications-outline';
          } else if (rn === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={'#161515'} />;
        },

        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 60,
          borderTopColor: 'black',
        },
        activeBackgroundColor: 'black',
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10,
          fontWeight: 'bold',
        },

        // tabBarItemStyle: {
        //   borderRightWidth: 0.5,
        //   borderRightColor: "black"
        // },

        tabBarActiveTintColor: '#161515',
        tabBarInactiveTintColor: 'grey',
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Notification"
        component={DashboardScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
