import React, {Component} from 'react';
import {
  View,
  Platform,
  Text,
  Image,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import markerImg from '../assets/images/greenMarker.png';
import {API_KEY} from '../../API_KEY';

import Geocorder from 'react-native-geocoder';

const latitudeDelta = 0.025;
const longitudeDelta = 0.025;

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421 * ASPECT_RATIO;

export default class UberMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialRegion: {
        latitude: 33.7444613,
        longitude: -118.3870173,
        latitudeDelta: 0.0122,
        longitudeDelta:
          (Dimensions.get('window').width / Dimensions.get('window').height) *
          0.0122,
      },
      locationChosen: false,
      marginBottom: 1,
      currentAddress: '',
    };
  }

  getAddress = async (lat, lng) => {
    await Geocorder.fallbackToGoogle(API_KEY);

    try {
      let res = await Geocorder.geocodePosition({lat, lng});
      let addr = res[0].formattedAddress;

      /// alert(addr);
      this.setState({currentAddress: addr});
    } catch (error) {
      alert(error);
    }
  };

  onChanValue = initialRegion => {
    //alert(JSON.stringify(region));
    ToastAndroid.show(
      JSON.stringify(this.state.currentAddress),
      ToastAndroid.SHORT,
    );
    this.setState({initialRegion});
  };
  // componentDidMount() {
  // this.handleUserLocation();
  //setTimeout(() => this.setState({marginBottom: 0}), 100);
  //}

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          initialRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },
      error => console.log(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    Geolocation.getCurrentPosition(position => {
      this.setState({
        initialRegion: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      });
    });

    this.handleUserLocation();
    setTimeout(() => this.setState({marginBottom: 0}), 100);
  }

  handleUserLocation = () => {
    Geolocation.getCurrentPosition(
      pos => {
        //alert(JSON.stringify(pos));

        this.map.animateToRegion({
          ...this.state.initalRegion,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });

        this.setState({
          ...this.setState.initalRegion,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,

          locationChosen: true,
        });

        this.getAddress(pos.coords.latitude, pos.coords.longitude);
      },
      err => {
        console.log(error);

        alert('something went wrong ..! Please select the location manually');
      },
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <MapView
            style={{flex: 1, marginBottom: this.state.marginBottom}}
            showsUserLocation={true}
            showsMyLocationButton={true}
            initialRegion={this.state.initialRegion}
            onRegionChangeComplete={this.onChanValue}
            ref={ref => (this.map = ref)}
          />

          <View
            style={{
              top: '50%',
              left: '50%',
              marginLeft: -24,
              marginTop: -48,
              position: 'absolute',
            }}>
            <Image style={{height: 48, width: 48}} source={markerImg} />
          </View>
        </View>
      </View>
    );
  }
}

// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Image, View, Dimensions} from 'react-native';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// let {width, height} = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = 0.0421 * ASPECT_RATIO;

// export default class UberMarker extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       },
//     };
//   }

//   onChanValue = region => {
//     //alert(JSON.stringify(region));
//     this.setState({region});
//   };
//   componentDidMount() {
//     Geolocation.getCurrentPosition(
//       position => {
//         this.setState({
//           region: {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           },
//         });
//       },
//       error => console.log(error.message),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//     );
//     Geolocation.getCurrentPosition(position => {
//       this.setState({
//         region: {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         },
//       });
//     });
//   }
//   componentWillUnmount() {}
//   render() {
//     return (
//       <View>
//         <MapView
//           provider={PROVIDER_GOOGLE}
//           style={styles.container}
//           showsUserLocation={true}
//           region={this.state.region}
//           initialRegion={this.state.region}
//           onRegionChangeComplete={this.onChanValue}
//           /// onRegionChange={ region => this.setState({region}) }
//           //onRegionChangeComplete={ region => this.setState({region}) }
//         >
//           <MapView.Marker coordinate={this.state.region} />

//           <View
//             style={{
//               top: '50%',
//               left: '50%',
//               marginLeft: -24,
//               marginTop: -48,
//               position: 'absolute',
//             }}>
//             <Image
//               style={{height: 48, width: 48}}
//               source={require('../assets/images/greenIndicator.png')}
//             />
//           </View>
//         </MapView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//   },
// });
// AppRegistry.registerComponent('UberMarker', () => UberMarker);
