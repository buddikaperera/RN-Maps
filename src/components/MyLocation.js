



// import React from 'react';

// import { View, Text, StyleSheet, Image } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// export default class MyLocation extends React.Component {
//   state = {
//     currentLongitude: '',
//     currentLatitude: '',
//   };
//   componentDidMount = () => {
    
//    Geolocation.getCurrentPosition(

//       position => {
//         const currentLongitude = JSON.stringify(position.coords.longitude);

//         const currentLatitude = JSON.stringify(position.coords.latitude);

//         this.setState({ currentLongitude: currentLongitude });

//         this.setState({ currentLatitude: currentLatitude });

//       },
//       error => alert(error.message),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
  


    
    
//   };
//   componentWillUnmount = () => {
    
//     Geolocation.getCurrentPosition(position => { console.log(position); 
//     const currentLongitude = JSON.stringify(position.coords.longitude);

//       const currentLatitude = JSON.stringify(position.coords.latitude);

//       this.setState({ currentLongitude: currentLongitude });

//       this.setState({ currentLatitude: currentLatitude });

//     });

    
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png' }}
//           style={{ width: 100, height: 100 }}
//         />
//         <Text style={styles.boldText}>Current Location </Text>
//         <Text
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: 16,
//           }}>
//           Your Longitude: {this.state.currentLongitude}
//         </Text>
//         <Text
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: 16,
//           }}>
//           Your Latitude: {this.state.currentLatitude}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 50,
//     padding: 16,
//     backgroundColor:'#fff'
//   },
//   boldText: {
//     fontSize: 30,
//     color: 'red',
//   },
// });


// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';

//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';

const MyLocation = () => {
  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
            }}
            style={{width: 100, height: 100}}
          />
          <Text style={styles.boldText}>
            {locationStatus}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Longitude: {currentLongitude}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Latitude: {currentLatitude}
          </Text>
          <View style={{marginTop: 20}}>
            <Button
              title="Button"
              onPress={getOneTimeLocation}
            />
          </View>
        </View>
        
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
  },
});

export default MyLocation;