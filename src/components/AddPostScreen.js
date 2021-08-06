// import React, {useState, useEffect} from 'react';
// import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import * as RNFS from 'react-native-fs';
// //https://www.programmersought.com/article/95435704153/
// //https://www.programmersought.com/article/6927146153/
// //
// const AddPostScreen = () => {
//   const [images, setImages] = useState([]);
//   //const [showImages, setShowImages] = useState([]);

//   useEffect(() => {
//     showAllImages();
//   }, []);

//   const showAllImages = () => {
//     RNFS.readDir(
//       `${RNFS.ExternalStorageDirectoryPath}/Android/data/com.taxiapp/files/IMAGES/JB001/`,
//     ).then(res => {
//       // console.log(res);
//       setImages(res);
//     });
//   };

//   const openImagePicker = () => {
//     let imageList = [];

//     ImagePicker.openPicker({
//       multiple: true,
//       waitAnimationEnd: false,

//       includeExif: true,
//       forceJpg: true,
//       compressImageQuality: 0.8,
//       sortOrder: 'desc',
//       maxFiles: 10,
//       mediaType: 'any',
//       includeBase64: true,
//     })
//       .then(response => {
//         console.log('Response :', response);
//         response.map(image => {
//           imageList.push({
//             fileName: image.name,
//             path: image.path,
//             data: image.data,
//           });
//         });
//         setImages(imageList);
//       })
//       .catch(e => console.log('Error :', e.message));
//   };

//   return (
//     <View>
//       <Text>AddPostScreen</Text>
//       <View>
//         <Text>
//           <TouchableOpacity
//             onPress={() => openImagePicker()}
//             style={[
//               STYLES.selectButtonContainer,
//               {backgroundColor: COLORS.primaryLight},
//             ]}>
//             <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
//           </TouchableOpacity>
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default AddPostScreen;
// export const STYLES = StyleSheet.create({
//   flex: {
//     flex: 1,
//   },
//   centerContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 22,
//   },
//   // add below
//   selectButtonContainer: {
//     margin: 20,
//     borderRadius: 5,
//   },
//   selectButtonTitle: {
//     padding: 10,
//     fontSize: 18,
//   },
// });
// export const COLORS = {
//   primaryDark: '#22212c',
//   primaryLight: '#f8f8f2',
//   primaryRed: '#ff5555',
//   primaryPink: '#ff80bf',
//   primaryYellow: '#ffff80',
//   primaryOrange: '#ff9580',
// };

// import React from 'react';
// import {View, Text} from 'react-native';

// const AddPostScreen = () => {
//   return (
//     <View>
//       <Text>AddPostScreen</Text>
//     </View>
//   );
// };

// export default AddPostScreen;

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import * as RNFS from 'react-native-fs';
//import FastImage
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';

const AddPostScreen = () => {
  const [imageuri, setImageuri] = useState('');
  const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [showImages, setShowImages] = useState([]);

  useEffect(() => {
    showAllImages();
  }, []);

  const showModalFunction = (visible, imageURL) => {
    setImageuri(imageURL);
    setModalVisibleStatus(visible);
  };

  const showAllImages = () => {
    RNFS.readDir(
      `${RNFS.ExternalStorageDirectoryPath}/Android/data/com.taxiapp/files/IMAGES/JB001/`,
    ).then(res => {
      // console.log(res);
      setShowImages(res);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {modalVisibleStatus ? (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={modalVisibleStatus}
          onRequestClose={() => {
            showModalFunction(!modalVisibleStatus, '');
          }}>
          <View style={styles.modelStyle}>
            <FastImage
              style={styles.fullImageStyle}
              source={{uri: imageuri}}
              resizeMode={FastImage.resizeMode.contain}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                showModalFunction(!modalVisibleStatus, '');
              }}>
              <FastImage
                source={{
                  uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                }}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={showImages}
            renderItem={({item}) => (
              <View
                style={{
                  width: (Dimensions.get('window').width - 32) / 3,
                  height: (Dimensions.get('window').width - 32) / 3,
                  maxWidth: Dimensions.get('window').width / 2,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  key={item.name}
                  style={{flex: 1}}
                  onPress={() => {
                    showModalFunction(
                      true,
                      `file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/JB001/${item.name}`,
                    );
                  }}>
                  <FastImage
                    style={styles.imageStyle}
                    source={{
                      uri: `file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/JB001/${item.name}`,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            contentContainerStyle={{margin: 2}}
            style={{borderWidth: 0}}
            horizontal={false}
            keyExtractor={item => item.findIndex}
            //keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
          <Text>asdasdasd</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    height: 125,
    width: 125,
  },
  imageStyle: {
    width: (Dimensions.get('window').width - (30 + 2 * 3)) / 3,
    height: (Dimensions.get('window').width - (30 + 2 * 3)) / 3,
    justifyContent: 'center',
  },
  listItem: {
    maxWidth: Dimensions.get('window').width / 2,
    flex: 0.5,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 4,
    marginTop: 18,
    marginBottom: 18,
    marginRight: 18,
    marginLeft: 18,
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute',
  },
});
