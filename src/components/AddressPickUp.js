import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_KEY} from '../constants/googleMapKey';

const AddressPickup = ({placheholderText, fetchAddress}) => {
  const onPressAddress = (data, details) => {
    console.log('details==>>>>', details);
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={placheholderText}
        onPress={onPressAddress}
        fetchDetails={true}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.containerStyle,
          textInput: styles.textInputStyle,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: 'white',
  },
  textInputStyle: {
    height: 48,
    color: 'black',
    fontSize: 16,
    backgroundColor: '#f3f3f3',
  },
});

export default AddressPickup;
