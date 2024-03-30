import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/components/screens/Login';
import OtpScreen from './src/components/screens/OtpScreen';
import Signup from './src/components/screens/Signup';
import Detail from './src/components/screens/Detail';
import PasswordScreen from './src/components/screens/Password';
import Home from './src/components/screens/Home';
import Status from './src/components/screens/Status';
import Profile from './src/components/screens/Profile';
import Lectures from './src/components/screens/Lectures';
import OngoingScreen from './src/components/screens/OngoingScreen';
import CompletedScreen from './src/components/screens/CompletedScreen';
import Lesson from './src/components/screens/Lesson';
import HomeG from './src/Assets/images/Home g.svg';
import HomeB from './src/Assets/images/Home b.svg';
import ClassD from './src/Assets/images/class-dark';
import ClassL from './src/Assets/images/class-light';
import ProfileIcon from './src/Assets/images/profile.svg';
import ProfileIconD from './src/Assets/images/profileD.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const StatusStack = createNativeStackNavigator();

const StatusStackScreen = () => (
  <StatusStack.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#6e61e7',
    }}>
    <StatusStack.Screen name="Status" component={Status} />
    <StatusStack.Screen name="Lectures" component={Lectures} />
    <StatusStack.Screen name="OngoingScreen" component={OngoingScreen} />
    <StatusStack.Screen name="CompletedScreen" component={CompletedScreen} />
    <Stack.Screen name="Lesson" component={Lesson} />
  </StatusStack.Navigator>
);

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 50,
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 10,
        },
        tabBarLabel: '',
        tabBarIcon: ({focused}) => {
          let Icon;
          if (route.name === 'Home') {
            Icon = focused ? <HomeB /> : <HomeG />;
          } else if (route.name === 'StatusScreen') {
            Icon = focused ? <ClassD /> : <ClassL />;
          } else {
            Icon = focused ? <ProfileIconD /> : <ProfileIcon />;
          }
          return Icon;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="StatusScreen" component={StatusStackScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OtpScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
