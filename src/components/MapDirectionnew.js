// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import Polyline from '@mapbox/polyline';
// import {GOOGLE_MAPS_APIKEY} from '../constants/googleMapKey';
// const origin = {latitude: 23.05315, longitude: 72.5171};
// const destination = {latitude: 23.053177, longitude: 72.517365};
// export default class MapDirectionnew extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       coords: [],
//     };
//   }

//   componentDidMount() {
//     // find your origin and destination point coordinates and pass it to our method.
//     // I am using Bursa,TR -> Istanbul,TR for this example
//     this.getDirections('40.1884979, 29.061018', '41.0082,28.9784');
//   }

//   async getDirections(startLoc, destinationLoc) {
//     try {
//       let resp = await fetch(
//         `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=AIzaSyBVsA`,
//       );
//       let respJson = await resp.json();
//       let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
//       let coords = points.map((point, index) => {
//         return {
//           latitude: point[0],
//           longitude: point[1],
//         };
//       });
//       this.setState({coords: coords});
//       return coords;
//     } catch (error) {
//       alert(error);
//       return error;
//     }
//   }

//   render() {
//     return (
//       <View>
//         <MapView
//           style={styles.map}
//           provider={PROVIDER_GOOGLE}
//           initialRegion={{
//             latitude: 41.0082,
//             longitude: 28.9784,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}>
//           <MapViewDirections
//             origin={origin}
//             destination={destination}
//             apikey={GOOGLE_MAPS_APIKEY}
//             strokeWidth={3}
//             strokeColor="rgb(0,139,241)"
//           />
//         </MapView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

// AppRegistry.registerComponent('MapDirectionnew', () => MapDirectionnew);

import React, {useState, useEffect} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Polyline from '@mapbox/polyline';

const MapDirectionnew = () => {
  const [coords, setCoords] = useState([]);

  const [coordinates] = useState([
    {
      latitude: 40.1884979,
      longitude: 29.061018,
    },
    {
      latitude: 41.0082,
      longitude: 28.9784,
    },
  ]);

  useEffect(() => {
    getDirections('40.1884979, 29.061018', '41.0082,28.9784');
  }, []);

  const getDirections = async (startLoc, destinationLoc) => {
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=AIzaSyBVsA-WWYwb1dESG0sAk7I-4p9XTqFqUGw`,
      );
      let respJson = await resp.json();
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);

      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });

      setCoords(coords);
      return coords;
    } catch (error) {
      alert(error);
      return error;
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        <MapView.Polyline
          coordinates={coords}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColor="red"
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default MapDirectionnew;
///https://github.com/nathvarun/React-Native-Layout-Tutorial-Series/tree/master/Project%20Files/01.%20Instagram%20Clone
///https://github.com/nathvarun/React-Native-Firebase-Tutorials
///https://www.instamobile.io/app-templates/react-native-finance-app/
//https://www.instamobile.io/app-templates/react-native-dashboard-template/
//https://www.instamobile.io/app-templates/react-native-starter-kit-firebase/
////https://www.instamobile.io/react-native-tutorials/react-native-draw-directions-map/
///https://alioguzhan.medium.com/react-native-maps-with-google-directions-api-bc716ed7a366
////https://medium.com/@princessjanf/react-native-maps-with-direction-from-current-location-ab1a371732c2
