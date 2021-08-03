import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ChooseLocation from './ChooseLocation';

const EmptyScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
          <Text style={styles.txtColor}>Got to next Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyLocation')}>
          <Text style={styles.txtColor}>MyLocation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CurrentLocation')}>
          <Text style={styles.txtColor}>My Location in Google Map</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Gmap')}>
          <Text style={styles.txtColor}>Dark Google Map</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Markers')}>
          <Text style={styles.txtColor}>Markers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('M2')}>
          <Text style={styles.txtColor}>M2 Cluster</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('M3')}>
          <Text style={styles.txtColor}>M3 Cluster</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('DirectionExample')}>
          <Text style={styles.txtColor}>DirectionExample</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LEnabler')}>
          <Text style={styles.txtColor}>LEnabler</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LocationScreen')}>
          <Text style={styles.txtColor}>LocationScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('mapsDirections')}>
          <Text style={styles.txtColor}>Map Directions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
          <Text style={styles.txtColor}>CameraScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Camera2')}>
          <Text style={styles.txtColor}>Camera2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UberMarker')}>
          <Text style={styles.txtColor}>UberMarker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LocationCircule')}>
          <Text style={styles.txtColor}>LocationCircule</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PoliGonScreen')}>
          <Text style={styles.txtColor}>PoliGonScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CircleScreen')}>
          <Text style={styles.txtColor}>CircleScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CameraComponent')}>
          <Text style={styles.txtColor}>CameraComponent</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RNCamera')}>
          <Text style={styles.txtColor}>RNCamera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ImgGallery')}>
          <Text style={styles.txtColor}>ImgGallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
          <Text style={styles.txtColor}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  txtColor: {
    fontSize: 18,
    color: '#000',
  },
});

export default EmptyScreen;
