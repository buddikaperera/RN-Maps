import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; ////1
import {createStackNavigator} from '@react-navigation/stack'; ////2
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; //4

import {SignIn, CreateAccount, Profile, Home} from './src/views/Screens'; //3

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);
const ProfieStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);
//import {createDrawerNavigator} from '@react-navigation/drawer';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Home from './src/views/Home';
// import Search from './src/views/Search';
// import Book from './src/views/Book';
// import Places from './src/views/Places';
// import EmptyScreen from './src/views/EmptyScreen';
// import ChooseLocation from './src/views/ChooseLocation';

// import MapScreen from './src/views/MapScreen';
// import MyLocation from './src/components/MyLocation';
// import CurrentLocation from './src/components/CurrentLocation';
// import Gmap from './src/components/Gmap';
// import Markers from './src/components/Markers';
// import M2 from './src/components/M2';
// import M3 from './src/components/M3';
// import DirectionExample from './src/components/DirectionExample';
// import LEnabler from './src/components/LEnabler';
// import SelectLocationScreen from './src/components/SelectLocationScreen';
// import GmapsDirections from './src/components/GmapsDirections';
// import CameraScreen from './src/components/CameraScreen';
// import Camera2 from './src/components/Camera2';
// import UberMarker from './src/components/UberMarker';
// import LocationCircule from './src/components/LocationCircule';
// import PoliGonScreen from './src/components/PoliGonScreen';
// import CircleScreen from './src/components/CircleScreen';
// import CameraComponent from './src/components/CameraComponent';
// import RNCamera from './src/components/RNCamera';
// import ImageGallery from './src/components/ImageGallery';
// import Gallery from './src/components/Gallery';
// import AddPostScreen from './src/components/AddPostScreen';
// import Categories from './src/components/Categories';
// import Try from './src/components/Try';
// import Tryout from './src/components/Tryout';
// import Tryout3 from './src/components/Tryout3';
// import ImagePress from './src/components/ImagePress';
// import CheckB from './src/components/CheckB';
// import MapDirectionnew from './src/components/MapDirectionnew';
// import MapPline from './src/components/MapPline';
// import MapDistance from './src/components/MapDistance';
// import AnimateMap from './src/components/AnimateMap';
// import Glocation from './src/components/Glocation';
// import GioCircule from './src/components/GioCircule';
// import SelectionView from './src/components/SelectionView';
// import ImageCroper from './src/components/ImageCroper';
// import PercentageCircle from './src/components/UI/PercentageCircle';
// import PopUp from './src/components/UI/PopUp';
// import UploadScreen from './src/components/UploadScreen';
// import UploadScreenWithCrop from './src/components/UploadScreenWithCrop';

// import MyUi from './src/components/UI/MyUi';
// import Login from './src/components/UI/Login';
// import Dashboard from './src/components/UI/Dashboard';
// import Members from './src/components/UI/Members';
// import Chat from './src/components/UI/Chat';
// import Profile from './src/components/UI/Profile';
// import Projects from './src/components/UI/Projects';
// import {Project} from './src/components/UI/Project';
// import BeautifulStateView from './src/components/UI/BeautifulStateView';
// import SlideM from './src/components/UI/SlideM';
// import Graph from './src/components/UI/Graph';
// import MailContainer from './src/components/UI/MailContainer';
// import MyModal from './src/components/MyModal';
// import ClickImage from './src/components/UI/ClickImage';
// import Level from './src/components/UI/Level';

//const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

// const MyTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Expolre"
//       tabBarOptions={{
//         activeTintColor: '#414757',
//       }}>
//       <Tab.Screen name="Expolre" component={Scr} />
//     </Tab.Navigator>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Profile" component={ProfieStackScreen} />
      </Tabs.Navigator>
      {/*<AuthStack.Navigator>
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
      </AuthStack.Navigator>*/}
      {/* <Stack.Navigator>
        <Stack.Screen name="EmptyScreen" component={EmptyScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Places" component={Places} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="MyLocation" component={MyLocation} />
        <Stack.Screen name="CurrentLocation" component={CurrentLocation} />
        <Stack.Screen name="Gmap" component={Gmap} />
        <Stack.Screen name="Markers" component={Markers} />
        <Stack.Screen name="M2" component={M2} />
        <Stack.Screen name="M3" component={M3} />
        <Stack.Screen name="DirectionExample" component={DirectionExample} />
        <Stack.Screen name="LEnabler" component={LEnabler} />
        <Stack.Screen name="LocationScreen" component={SelectLocationScreen} />
        <Stack.Screen name="mapsDirections" component={GmapsDirections} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="Camera2" component={Camera2} />
        <Stack.Screen name="UberMarker" component={UberMarker} />
        <Stack.Screen name="LocationCircule" component={LocationCircule} />
        <Stack.Screen name="PoliGonScreen" component={PoliGonScreen} />
        <Stack.Screen name="CircleScreen" component={CircleScreen} />
        <Stack.Screen name="CameraComponent" component={CameraComponent} />
        <Stack.Screen name="RNCamera" component={RNCamera} />
        <Stack.Screen name="ImgGallery" component={ImageGallery} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="UploadImages" component={AddPostScreen} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Try" component={Try} />
        <Stack.Screen name="Tryout" component={Tryout} />
        <Stack.Screen name="Tryout3" component={Tryout3} />
        <Stack.Screen name="ImagePress" component={ImagePress} />
        <Stack.Screen name="CheckB" component={CheckB} />
        <Stack.Screen name="MapDirectNew" component={MapDirectionnew} />
        <Stack.Screen name="MapPline" component={MapPline} />
        <Stack.Screen name="MapDistance" component={MapDistance} />
        <Stack.Screen name="AnimMap" component={AnimateMap} />
        <Stack.Screen name="Geolocation" component={Glocation} />
        <Stack.Screen name="GioCircule" component={GioCircule} />
        <Stack.Screen name="SelectionView" component={SelectionView} />
        <Stack.Screen name="ImageCroper" component={ImageCroper} />
        <Stack.Screen name="PercentageCircle" component={PercentageCircle} />
        <Stack.Screen name="PopUp" component={PopUp} />
        <Stack.Screen name="UploadScreen" component={UploadScreen} />
        <Stack.Screen name="MyUi" component={MyUi} />
        <Stack.Screen name="MyLogin" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="Project" component={Project} />
        <Stack.Screen name="SlideM" component={SlideM} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="MailContainer" component={MailContainer} />
        <Stack.Screen
          name="UploadScreenWithCrop"
          component={UploadScreenWithCrop}
        />
        <Stack.Screen
          name="BeautifulStateView"
          component={BeautifulStateView}
        />
        <Stack.Screen name="MyModal" component={MyModal} />
        <Stack.Screen name="Level" component={Level} />

        <Stack.Screen name="ClickImage" component={ClickImage} />
     </Stack.Navigator> */}
    </NavigationContainer>
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

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
