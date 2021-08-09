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
  Alert,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import * as RNFS from 'react-native-fs';

import Feather from 'react-native-vector-icons/Feather';
//import FastImage
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';

const AddPostScreen = () => {
  const [imageuri, setImageuri] = useState('');
  const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [showImages, setShowImages] = useState([]);
  const [state, setState] = useState(0);
  const [itemPressed, setitemPressed] = useState([]);
  const [isItemSelected, setisItemSelected] = useState([]);
  const [list, setList] = React.useState([]);
  //const [checkedArray, setcheckedArray] = useState([]);

  //function handleRemove(id) {
  //const newList = list.filter(item => item.id !== id);

  //setList(newList);
  //}

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
      console.log(res);
      //setShowImages(res);
      //showImages.push(id);
      let arr = res.map((item, index) => {
        item.isSelected = false;

        return {...item};
      });
      setShowImages(arr);

      console.log('arr data =>', arr);
    });
  };

  const checkedList = () => {
    let arr = showImages.map((item, index) => {
      item.isSelected = false;

      return {...item};
    });
    setShowImages(arr);

    console.log('arr data =>', arr);
  };

  const pressMe = () => {
    console.log('pressMe');
    setState(1);
    console.log('setState', state);
  };

  const typeSelected = (value, index) => {
    Alert.alert(value);
    console.log('value', value, 'index', index);
    setitemPressed(value);
    //this.setState({
    //itemPressed: value,
    //}
    //);
  };

  const selectionHandler = (ind, item) => {
    let arr = showImages.map((img, index) => {
      if (ind == index) {
        img.isSelected = !img.isSelected; //true;
      }
      return {...img};
    });

    console.log('selectionHandler-->', arr);
    setShowImages(arr);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={showImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View
              style={{
                width: (Dimensions.get('window').width - 30) / 3,
                height: (Dimensions.get('window').width - 30) / 3,
                maxWidth: Dimensions.get('window').width / 2,
                //borderColor: state == 0 ? 'green' : 'red',

                // borderWidth: 2,
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={1.0}
                activeOpacity={(1, 250)}
                key={item.name}
                style={{flex: 1}}
                //onPress={() => pressMe()}
                //onPress={() => typeSelected(item.name, index)}
                onPress={() => selectionHandler(index, item.name)}>
                <FastImage
                  style={[
                    styles.imageStyle,
                    {
                      borderWidth: 4,
                      //borderColor: state == 0 ? 'green' : 'red',
                      borderColor: item.isSelected ? '#32CD32' : 'black',
                    },
                  ]}
                  source={{
                    uri: `file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/JB001/${item.name}`,
                  }}
                />

                <View style={{position: 'absolute', top: 10, right: 10}}>
                  <Text>
                    {item.isSelected ? (
                      <Feather name="check-square" color="#36c537" size={20} />
                    ) : (
                      <Feather
                        style={{fontSize: 20, height: 20}}
                        name="x-square"
                        color="rgba(249, 53, 15, 0.9);"
                        size={20}
                        shadow={0}
                      />
                    )}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          contentContainerStyle={{margin: 2}}
          style={{borderWidth: 0}}
          horizontal={false}
          //keyExtractor={item => item.findIndex}
        />
      </View>

      {/*<View style={{flexDirection: 'row'}}>-
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
      </View>*/}
    </SafeAreaView>
  );
};
///https://avaxgfx.com/video_tutorials/109261-udemy-react-native-and-javascript-your-development-guide.html

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
