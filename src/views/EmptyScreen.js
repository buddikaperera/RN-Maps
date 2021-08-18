import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ChooseLocation from './ChooseLocation';

const EmptyScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('LocationScreen')}>
            <Text style={styles.txtColor}>LocationScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('mapsDirections')}>
            <Text style={styles.txtColor}>Map Directions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MapDirectNew')}>
            <Text style={styles.txtColor2}>Map Directions New</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MapDistance')}>
            <Text style={styles.txtColor2}>MapDistance SL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AnimMap')}>
            <Text style={styles.txtColor2}>AnimMap</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GioCircule')}>
            <Text style={styles.txtColor4}>GioCircule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectionView')}>
            <Text style={styles.txtColor6}>SelectionView</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ImageCroper')}>
            <Text style={styles.txtColor4}>Image Croper</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PercentageCircle')}>
            <Text style={styles.txtColor5}>PercentageCircle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PopUp')}>
            <Text style={styles.txtColor5}>PopUp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyUi')}>
            <Text style={styles.txtColor5}>UI</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyLogin')}>
            <Text style={styles.txtColor5}>MyLogin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.txtColor5}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Members')}>
            <Text style={styles.txtColor5}>Members</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.txtColor5}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
            <Text style={styles.txtColor5}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('BeautifulStateView')}>
            <Text style={styles.txtColor6}>BeautifulStateView</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SlideM')}>
            <Text style={styles.txtColor6}>SlideM</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Graph')}>
            <Text style={styles.txtColor6}>Graph</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MailContainer')}>
            <Text style={styles.txtColor6}>Image Crop working</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Geolocation')}>
            <Text style={styles.txtColor3}>Geolocation</Text>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('PoliGonScreen')}>
            <Text style={styles.txtColor}>PoliGonScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MapPline')}>
            <Text style={styles.txtColor}>Polyline</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('UploadImages')}>
            <Text style={styles.txtColor}>Upload Images</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UploadScreen')}>
            <Text style={styles.txtColor}>Upload Images with Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UploadScreenWithCrop')}>
            <Text style={styles.txtColor}>UploadScreenWithCrop</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyModal')}>
            <Text style={styles.txtColor}>MyModal</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.txtColor}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Try')}>
            <Text style={styles.txtColor}>Try</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tryout')}>
            <Text style={styles.txtColor}>Tryout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tryout3')}>
            <Text style={styles.txtColor}>Tryout3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ImagePress')}>
            <Text style={styles.txtColor}>ImagePress</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CheckB')}>
            <Text style={styles.txtColor}>CheckB</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  txtColor2: {
    color: 'red',
    fontSize: 20,
  },
  txtColor3: {
    color: 'blue',
    fontSize: 20,
  },
  txtColor4: {
    color: 'green',
    fontSize: 20,
  },
  txtColor5: {
    color: 'brown',
    fontSize: 20,
  },
  txtColor6: {
    color: 'orange',
    fontSize: 20,
  },
});

export default EmptyScreen;
