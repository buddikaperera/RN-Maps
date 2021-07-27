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
