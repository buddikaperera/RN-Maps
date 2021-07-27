// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import Home from './src/views/Home';
// import Search from './src/views/Search';
// import Book from './src/views/Book';
// import Places from './src/views/Places';
// import H2Screen from './src/views/H2Screen';
// import ChooseLocation from './src/views/ChooseLocation';

// const App = () => {
//   return (
//     <View style={{flex: 1}}>
//       {/*<Home /> <Search />*/}
//       <ChooseLocation />
//     </View>
//   );
// };

import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './src/views/Home';
import Search from './src/views/Search';
import Book from './src/views/Book';
import Places from './src/views/Places';
import EmptyScreen from './src/views/EmptyScreen';
import ChooseLocation from './src/views/ChooseLocation';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './src/views/MapScreen';
import MyLocation from './src/components/MyLocation';
import CurrentLocation from './src/components/CurrentLocation';
import Gmap from './src/components/Gmap';
import Markers from './src/components/Markers';
import M2 from './src/components/M2';
import M3 from './src/components/M3';
import DirectionExample from './src/components/DirectionExample';
import LEnabler from './src/components/LEnabler';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
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
