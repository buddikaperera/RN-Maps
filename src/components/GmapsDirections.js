import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Marker} from 'react-native-maps';

export default class Markers extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          region={{
            latitude: 52.5,
            longitude: 19.2,
            latitudeDelta: 8.5,
            longitudeDelta: 8.5,
          }}
          style={{width: 400, height: 800}}>
          <Marker coordinate={{latitude: 52.0, longitude: 18.2}} />
          <Marker coordinate={{latitude: 52.4, longitude: 18.7}} />
          <Marker coordinate={{latitude: 52.1, longitude: 18.4}} />
          <Marker coordinate={{latitude: 52.6, longitude: 18.3}} />
          <Marker coordinate={{latitude: 51.6, longitude: 18.0}} />
          <Marker coordinate={{latitude: 53.1, longitude: 18.8}} />
          <Marker coordinate={{latitude: 52.9, longitude: 19.4}} />
          <Marker coordinate={{latitude: 52.2, longitude: 21}} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
///https://stackoverflow.com/questions/47012408/how-to-render-checkbox-on-the-image-react-native
///https://stackoverflow.com/questions/40688723/how-to-implement-selected-checkbox-onto-photo-in-react-native
//https://stackoverflow.com/questions/56767967/react-native-how-to-show-one-specific-image-from-camera-roll-using-touchablehi
///https://reactscript.com/react-native-mapping-integration/
///https://reactscript.com/lottie-animation-view-react/
///https://reactscript.com/react-native-passcode-auth/

///https://reactscript.com/react-native-document-scanner/

///https://reactscript.com/react-native-touch-visualizer/
//https://reactscript.com/react-native-tabbed-view-pager/

// ///https://reactscript.com/modern-image-loading-experience-blurhash/

// //https://reactscript.com/react-native-mobile-starter-kit-kitten-tricks/
// https://reactscript.com/react-native-ultimate-listview-component/
// //https://reactscript.com/cool-react-native-image-gallery/
// ///https://reactscript.com/performant-react-native-image-component/
// ///https://reactscript.com/stylish-multi-select-component/
// ///https://reactscript.com/react-native-image-picker/
// https://reactscript.com/material-design-dialogs-react-native/
// ///https://reactscript.com/multiple-image-picker/
// https://reactscript.com/react-native-google-places-suggest/
// https://reactscript.com/react-native-percentage-circle-component/
// https://reactscript.com/react-native-mapview-component/
// //https://reactscript.com/react-native-search-box/
// https://reactscript.com/react-native-busy-indicator-2/
// https://reactscript.com/react-native-progressive-input/
// https://reactscript.com/react-native-card-modal-component/
// https://reactscript.com/react-native-grid-component/
// https://reactscript.com/react-native-multiple-choice-component/
// https://reactscript.com/react-native-pathjs-charts/
// https://reactscript.com/react-native-platform-independent-tabs/
// https://reactscript.com/progress-indicators-spinners-react-native/
// https://reactscript.com/react-native-busy-indicator/
// https://reactscript.com/react-native-map-components-ios-android/
// https://reactscript.com/fullscreen-lightbox-comoponent-react-native/
// https://reactscript.com/react-native-loader-collection/
// https://reactscript.com/react-native-google-places-autocomplete/
// https://reactscript.com/react-native-camera-component/
// https://reactscript.com/sleek-loading-indicator-react-native/
// https://reactscript.com/animated-progress-bar-react-native/
// https://reactscript.com/react-native-google-place-picker/
// https://reactscript.com/3000-customizable-icons-react-native/
// ///https://reactscript.com/awesome-gallery-component/
// ///https://reactscript.com/cross-platform-actionsheet/
// ///https://github.com/tableflip/react-native-select-multiple

// ///https://reactscript.com/one-time-passcode-component-for-react-native/

// ///https://reactscript.com/react-native-timeline-listview/
// ///https://reactscript.com/trixie-ui-kit-react-native/

// //https://reactscript.com/sticky-parallax-header/

// ///https://reactscript.com/dynamic-search-bar-for-react-native/
// //https://reactscript.com/animated-multi-step-form-for-react-native/

// ///https://reactscript.com/painlessly-add-react-native-maps-react-native-app/
// //https://github.com/hicay/react-native-text-avatar/blob/master/index.js

// //https://reactscript.com/smooth-animated-tab-bar/

// //https://reactscript.com/simple-react-native-tab-navigation/

// //https://reactscript.com/looped-carousel-react-native-2/

// //https://reactscript.com/touch-id-module-android/

// ///https://reactscript.com/react-native-circle-menu-component/

// ///https://reactscript.com/react-native-google-place-picker-2/

// //https://reactscript.com/react-native-photo-upload-component/

// ///https://reactscript.com/react-native-image-placeholder/

// ///https://reactscript.com/minimal-react-native-pie-chart-component/

// //https://reactscript.com/react-native-chart-kit/

// ///https://reactscript.com/media-picker-react-native/

// ///https://reactscript.com/easy-grid-view-react-native/

// ///https://reactscript.com/react-native-multibar-component/
