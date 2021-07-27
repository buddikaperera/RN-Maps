import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AddressPickUp from '../components/AddressPickUp';
import CustomBtn from '../components/CustomBtn';
import {useNavigation} from '@react-navigation/native';
{
  /**npm i react-native-google-places-autocomplete */
  //https://www.npmjs.com/package/react-native-google-places-autocomplete
}

const ChooseLocation = props => {
  const navigation = useNavigation();

  const onDone = () => {
    const isValid = checkValid();
    if (isValid) {
      props.route.params.getCordinates({
        destinationCords,
      });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: 'white', flex: 1, padding: 35}}>
        <AddressPickUp placeHolderTxt="Enter Pickup location" />
        <View style={{marginBottom: 16}} />
        <AddressPickUp placeHolderTxt="Enter Drop off  location" />
        <CustomBtn btnText="Done" onPress={onDone} btnStyle={{marginTop: 24}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ChooseLocation;
