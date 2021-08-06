import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';
import * as RNFS from 'react-native-fs';
import FastImage from 'react-native-fast-image';
const Tryout = () => {
  const [images, setImages] = useState([]);
  const [selectImages, setSelectImages] = useState([]);

  useEffect(() => {
    showAllImages();
  }, []);

  const showAllImages = () => {
    RNFS.readDir(
      `${RNFS.ExternalStorageDirectoryPath}/Android/data/com.taxiapp/files/IMAGES/JB001/`,
    ).then(res => {
      console.log(res);
      setImages(res);
    });
  };
  ///https://thebhwgroup.com/blog/accessing-iphone-camera-roll-images-react-native
  //https://codeburst.io/react-image-upload-with-kittens-cc96430eaece
  const selectImage = uri => {
    NativeModules.ReadImageData.readImage(uri, image => {
      setSelectImages(image);
      console.log(image);
    });
  };

  return (
    <View>
      <View style={styles.imageGrid}>
        <ScrollView>
          {images.map(data => {
            return <Text key={data.name}>{data.name}</Text>;
          })}

          <View>
            {images.map(data => {
              return (
                <TouchableHighlight onPress={() => selectImage.bind(data.path)}>
                  <FastImage
                    style={styles.imageStyle}
                    source={{
                      uri: `file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/JB001/${data.name}`,
                    }}
                    style={{width: 35, height: 35}}
                  />
                </TouchableHighlight>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Tryout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageStyle: {
    width: (Dimensions.get('window').width - (30 + 2 * 3)) / 3,
    height: (Dimensions.get('window').width - (30 + 2 * 3)) / 3,
    justifyContent: 'center',
  },
  imageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
