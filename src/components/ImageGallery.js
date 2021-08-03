// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   FlatList,
//   Modal,
// } from 'react-native';

// //import FastImage
// import FastImage from 'react-native-fast-image';

// const ImageGallery = () => {
//   const [imageuri, setImageuri] = useState('');
//   const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
//   const [dataSource, setDataSource] = useState([]);

//   useEffect(() => {
//     let items = Array.apply(null, Array(120)).map((v, i) => {
//       return {
//         id: i,
//         src: 'https://unsplash.it/400/400?image=' + (i + 1),
//       };
//     });
//     setDataSource(items);
//   }, []);

//   const showModalFunction = (visible, imageURL) => {
//     //handler to handle the click on image of Grid
//     //and close button on modal
//     setImageuri(imageURL);
//     setModalVisibleStatus(visible);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {modalVisibleStatus ? (
//         <Modal
//           transparent={false}
//           animationType={'fade'}
//           visible={modalVisibleStatus}
//           onRequestClose={() => {
//             showModalFunction(!modalVisibleStatus, '');
//           }}>
//           <View style={styles.modelStyle}>
//             <FastImage
//               style={styles.fullImageStyle}
//               source={{uri: imageuri}}
//               resizeMode={FastImage.resizeMode.contain}
//             />
//             <TouchableOpacity
//               activeOpacity={0.5}
//               style={styles.closeButtonStyle}
//               onPress={() => {
//                 showModalFunction(!modalVisibleStatus, '');
//               }}>
//               <FastImage
//                 source={{
//                   uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
//                 }}
//                 style={{width: 35, height: 35}}
//               />
//             </TouchableOpacity>
//           </View>
//         </Modal>
//       ) : (
//         <View style={styles.container}>
//           <FlatList
//             data={dataSource}
//             renderItem={({item}) => (
//               <View style={styles.imageContainerStyle}>
//                 <TouchableOpacity
//                   key={item.id}
//                   style={{flex: 1}}
//                   onPress={() => {
//                     showModalFunction(true, item.src);
//                   }}>
//                   <FastImage
//                     style={styles.imageStyle}
//                     source={{
//                       uri: item.src,
//                     }}
//                   />
//                 </TouchableOpacity>
//               </View>
//             )}
//             //Setting the number of column
//             numColumns={3}
//             keyExtractor={(item, index) => index.toString()}
//           />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };
// export default ImageGallery;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   titleStyle: {
//     padding: 16,
//     fontSize: 20,
//     color: 'white',
//     backgroundColor: 'green',
//   },
//   imageContainerStyle: {
//     flex: 1,
//     flexDirection: 'column',
//     margin: 1,
//   },
//   imageStyle: {
//     height: 120,
//     width: '100%',
//   },
//   fullImageStyle: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//     width: '98%',
//     resizeMode: 'contain',
//   },
//   modelStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },
//   closeButtonStyle: {
//     width: 25,
//     height: 25,
//     top: 50,
//     right: 20,
//     position: 'absolute',
//   },
// });

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
//const RNFS = require('react-native-fs');
import {RNFetchBlob} from 'rn-fetch-blob';
import * as RNFS from 'react-native-fs';
const imagePath = `${RNFS.ExternalStorageDirectoryPath}/Android/data/com.taxiapp/files/IMAGES/`;
//import images from imagePath;

const listOfImages = [];
const listImages = [];
let {width, height} = Dimensions.get('window');

//export const dirPicutures = `${dirHome}/Pictures`;
///https://medium.com/geekculture/capturing-images-with-react-native-203e24f93eb9

//https://github.com/react-native-image-picker/react-native-image-picker/blob/main/example/src/App.tsx
//https://github.com/gulsher7/SMOOTH_TRACKING/blob/main/App.js
//https://github.com/gulsher7/SMOOTH_TRACKING
///https://www.reactnativeschool.com/how-to-upload-images-from-react-native
export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listImages: [],
    };
  }

  componentWillMount() {
    ///this.displayPictures(imagePath);
    this.displayPictures();
  }
  //https://stackoverflow.com/questions/54743482/get-the-array-of-filenames-stored-in-document-directory-in-react-native
  // displayPictures = async imagePath => {
  //   try {
  //     let files = await RNFetchBlob.fs.ls(imagePath);
  //     console.log(files);
  //     console.log(files.length);
  //     console.log(files);
  //     console.log(files[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  displayPictures = async => {
    RNFS.readDir(
      `${RNFS.ExternalStorageDirectoryPath}/Android/data/com.taxiapp/files/IMAGES/JB001/`,
    ).then(res => {
      console.log(res);
      this.setState({listImages: res});
    });

    // RNFS.readDir(RNFS.imagePat)
    //   .then(result => {
    //     console.log('GOT RESULT', result);
    //     return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    //   })
    //   .then(statResult => {
    //     if (statResult[0].isFile()) {
    //       return RNFS.readFile(statResult[1], 'utf8');
    //     }
    //     return 'no file';
    //   })
    //   .then(contents => {
    //     console.log(contents);
    //   })
    //   .catch(err => {
    //     console.log(err.message, err.code);
    //   });
    //RNFS.readDir(RNFS.DocumentDirectoryPath).then(files => {

    //})
    //.catch(err => {

    //console.log(err.message, err.code);

    //});//
    // RNFS.readDir(`${RNFS.ExternalStorageDirectoryPath}/${imagePath}`).then(
    //res => {
    // console.log(res);
    //},
    //);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {/*<TouchableOpacity
            onPress={this.displayPictures}
            style={styles.button}>
            <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
         </TouchableOpacity>*/}
        </View>
        <View>
          <ScrollView>
            {this.state.listImages.map(data => {
              return <Text key={data.name}>{data.name}</Text>;
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});
