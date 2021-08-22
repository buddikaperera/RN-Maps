import React, {useState, useEffect, useMemo} from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; ////1
import {createStackNavigator} from '@react-navigation/stack'; ////2
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; //4
import {createDrawerNavigator} from '@react-navigation/drawer'; //5
import {AuthContext} from './src/context/context';
import {
  SignIn,
  CreateAccount,
  Profile,
  Home,
  Search,
  Search2,
  Details,
  Splash,
} from './src/views/Screens'; //3

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({route}) => {
        title: route.params.name;
      }}
    />
  </HomeStack.Navigator>
);

const ProfieStackScreen = () => (
  <ProfileStack.Navigator

  //headerMode="none"
  >
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const TabScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Profile" component={ProfieStackScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState('');

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asasas');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asasas');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <Drawer.Navigator initialRouteName="Profile">
            <Drawer.Screen name="Home" component={TabScreen} />
            <Drawer.Screen name="Profile" component={ProfieStackScreen} />
          </Drawer.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: 'Sign In'}}
            />
            <AuthStack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{title: 'Create Account'}}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
