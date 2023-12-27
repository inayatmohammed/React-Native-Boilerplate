/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomePage from '@/screens/Home';
import Job from '@/screens/Job';
import Profile from '@/screens/Profile';
import Search from '@/screens/Search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#0C2A48',
          borderTopColor: 'transparent',
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        // tabBarIconStyle: { display: 'none' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Job}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="briefcase" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="inbox" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Home = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeStack"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Home;
