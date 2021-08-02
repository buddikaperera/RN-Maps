// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, Dimensions, View} from 'react-native';

// import {RNCamera} from 'react-native-camera';

// const PicturePath = '';

// export default class Camera2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cameraType: 'back',
//       mirrorMode: false,
//     };
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={cam => {
//             this.camera = cam;
//           }}
//           style={styles.preview}
//           aspect={Camera.constants.Aspect.fill}
//           captureTarget={Camera.constants.CaptureTarget.disk}
//           type={this.state.cameraType}
//           mirrorImage={this.state.mirrorMode}>
//           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
//             [CAPTURE]
//           </Text>
//           <Text style={styles.capture} onPress={this.storePicture.bind(this)}>
//             [UPLOAD]
//           </Text>
//           <Text
//             style={styles.capture}
//             onPress={this.changeCameraType.bind(this)}>
//             [SWITCH O ROONEY]
//           </Text>
//         </RNCamera>
//       </View>
//     );
//   }

//   changeCameraType() {
//     if (this.state.cameraType === 'back') {
//       this.setState({
//         cameraType: 'front',
//         mirrorMode: true,
//       });
//     } else {
//       this.setState({
//         cameraType: 'back',
//         mirrorMode: false,
//       });
//     }
//   }

//   storePicture() {
//     if (PicturePath) {
//       // Create the form data object
//       var data = new FormData();
//       data.append('picture', {
//         uri: PicturePath,
//         name: 'selfie.jpg',
//         type: 'image/jpg',
//       });

//       // Create the config object for the POST
//       // You typically have an OAuth2 token that you use for authentication
//       const config = {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'multipart/form-data;',
//           Authorization: 'Bearer ' + 'SECRET_OAUTH2_TOKEN_IF_AUTH',
//         },
//         body: data,
//       };

//       fetch('https://postman-echo.com/post', config)
//         .then(responseData => {
//           // Log the response form the server
//           // Here we get what we sent to Postman back
//           console.log(responseData);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   }

//   takePicture() {
//     this.camera
//       .capture()
//       .then(data => {
//         console.log(data);
//         PicturePath = data.path;
//       })
//       .catch(err => console.error(err));
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     height: Dimensions.get('window').height,
//     width: Dimensions.get('window').width,
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     color: '#000',
//     padding: 10,
//     margin: 40,
//   },
// });

// AppRegistry.registerComponent('Camera2', () => Camera2);

// import React, {useState} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   PermissionsAndroid,
//   Alert,
//   Platform,
//   TouchableHighlight,
// } from 'react-native';

// // import CameraKitCameraScreen
// import {CameraKitCameraScreen} from 'react-native-camera-kit';

// const CameraScreen = () => {
//   const [isPermitted, setIsPermitted] = useState(false);
//   const [captureImages, setCaptureImages] = useState([]);

//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'App needs camera permission',
//         },
//       );
//       // If CAMERA Permission is granted
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   const requestExternalWritePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'External Storage Write Permission',
//           message: 'App needs write permission',
//         },
//       );
//       // If WRITE_EXTERNAL_STORAGE Permission is granted
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       alert('Write permission err', err);
//     }
//     return false;
//   };

//   const requestExternalReadPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         {
//           title: 'Read Storage Permission',
//           message: 'App needs Read Storage Permission',
//         },
//       );
//       // If READ_EXTERNAL_STORAGE Permission is granted
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       alert('Read permission err', err);
//     }
//     return false;
//   };

//   const openCamera = async () => {
//     if (Platform.OS === 'android') {
//       if (await requestCameraPermission()) {
//         if (await requestExternalWritePermission()) {
//           if (await requestExternalReadPermission()) {
//             setIsPermitted(true);
//           } else alert('READ_EXTERNAL_STORAGE permission denied');
//         } else alert('WRITE_EXTERNAL_STORAGE permission denied');
//       } else alert('CAMERA permission denied');
//     } else {
//       setIsPermitted(true);
//     }
//   };

//   const onBottomButtonPressed = event => {
//     const images = JSON.stringify(event.captureImages);
//     if (event.type === 'left') {
//       setIsPermitted(false);
//     } else if (event.type === 'right') {
//       setIsPermitted(false);
//       setCaptureImages(images);
//     } else {
//       Alert.alert(
//         event.type,
//         images,
//         [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//         {cancelable: false},
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {isPermitted ? (
//         <View style={{flex: 1}}>
//           <CameraKitCameraScreen
//             // Buttons to perform action done and cancel
//             actions={{
//               rightButtonText: 'Done',
//               leftButtonText: 'Cancel',
//             }}
//             onBottomButtonPressed={event => onBottomButtonPressed(event)}
//             flashImages={{
//               // Flash button images
//               on: require('./assets/flashon.png'),
//               off: require('./assets/flashoff.png'),
//               auto: require('./assets/flashauto.png'),
//             }}
//             cameraFlipImage={require('./assets/flip.png')}
//             captureButtonImage={require('./assets/capture.png')}
//           />
//         </View>
//       ) : (
//         <View style={styles.container}>
//           <Text style={styles.titleText}>React Native Camera</Text>
//           <Text style={styles.textStyle}>{captureImages}</Text>
//           <TouchableHighlight onPress={openCamera} style={styles.buttonStyle}>
//             <Text style={styles.buttonTextStyle}>Open Camera</Text>
//           </TouchableHighlight>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default CameraScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   textStyle: {
//     color: 'black',
//     fontSize: 16,
//     textAlign: 'center',
//     padding: 10,
//     marginTop: 16,
//   },
//   buttonStyle: {
//     fontSize: 16,
//     color: 'white',
//     backgroundColor: 'green',
//     padding: 5,
//     marginTop: 32,
//     minWidth: 250,
//   },
//   buttonTextStyle: {
//     padding: 5,
//     color: 'white',
//     textAlign: 'center',
//   },
// });

import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {RNFetchBlob} from 'rn-fetch-blob';
const RNFS = require('react-native-fs');

export const dirHome = Platform.select({
  /// ios: `${RNFS.DocumentDirectoryPath}/myAppName`,
  android: `${RNFS.ExternalStorageDirectoryPath}/myAppName`,
});
///https://dev-yakuza.posstree.com/en/react-native/react-native-fs/
// file:///data/user/0/com.taxiapp/cache/Camera/50dadffb-9251-4efd-8b21-f49936838886.jpg
export const dirPicutures = `${dirHome}/Pictures`;
export const dirAudio = `${dirHome}/Audio`;
const pathToWrite =
  'file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/';
const moveAttachment = async (filePath, newFilepath) => {
  return new Promise((resolve, reject) => {
    RNFS.mkdir(dirPicutures)
      .then(() => {
        RNFS.moveFile(filePath, newFilepath)
          .then(() => resolve(true))
          .catch(error => reject(error));
      })
      .catch(err => reject(err));
  });
};

const moveAttachmentToFolder = async (filePath, newFilepath, folder) => {
  return new Promise((resolve, reject) => {
    RNFS.mkdir(`${pathToWrite}/${folder}`) //folder
      .then(() => {
        RNFS.moveFile(filePath, newFilepath)
          .then(() => resolve(true))
          .catch(error => reject(error));
      })
      .catch(err => reject(err));
  });
};

export const deleteFile = targetName => {
  RNFS.unlink(`${ExternalDirectoryPath}/${targetName}`).then(result => {
    console.log(result, 'successfully deleted!!');
  });
};

export const downloadFile = (formUrl, targetName) => {
  // Get the local save path of the download file
  const toLoadPath = `${ExternalDirectoryPath}/${targetName}`;
  RNFS.downloadFile({
    fromUrl: formUrl,
    toFile: toLoadPath,
    progressDivider: 5,
    begin: res => {
      console.log('begin', res);
    },
    progress: res => {
      console.log('progress', res);
    },
  })
    .promise.then(res => {
      console.log(res, 'download successful!!');
    })
    .catch(err => {
      console.log(err, 'download failed!!');
    });
};

export const writeFile = (content, unicode = 'utf8', targetName) => {
  const path = `${ExternalDirectoryPath}/${targetName}`;
  RNFS.writeFile(path, content, unicode).then(result => {
    console.log(result, 'Write local file successfully!!');
  });
};

export const readFile = (fileName, callback) => {
  RNFS.readFile(`${ExternalDirectoryPath}/${fileName}`).then(result => {
    callback(result);
  });
};
async function checkAndroidPermission() {
  try {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    await PermissionsAndroid.request(permission);
    Promise.resolve();
  } catch (error) {
    Promise.reject(error);
  }
}

///https://medium.com/geekculture/capturing-images-with-react-native-203e24f93eb9
const moment = require('moment');

export default class CameraComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}></RNCamera>

        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}>SNAP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // ************************** Captur and Save Image *************************
  saveImage = async (filePath, folder) => {
    try {
      // set new image name and filepath
      const newImageName = `${moment().format('DD-MM-YY-HHmmSSS')}.jpg`;
      console.log('******newImageName**********', newImageName);
      //  const newFilepath = `${dirPicutures}/${newImageName}`;
      const newFilepath = `${pathToWrite}${folder}/${newImageName}`;
      // move and save image to new filepath
      //const imageMoved = await moveAttachment(filePath, newFilepath);
      const imageMoved = await moveAttachmentToFolder(
        filePath,
        newFilepath,
        folder,
      );

      console.log('image moved------>', imageMoved);
      console.log('filePath', filePath);
      console.log('newFilepath', newFilepath);
    } catch (error) {
      console.log(error);
    }
  };

  takePicture = async folder => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true}; //, skipProcessing: true};
      const data = await this.camera.takePictureAsync(options);

      console.log('data', data.base64);
      //checkAndroidPermission();

      // const path = `${RNFetchBlob.fs.dirs.CacheDir}/test.png`;
      //console.log('path', path);
      console.log('data path >>>>', data.uri);

      this.saveImage(data.uri, 'JB001');

      // try {
      //   RNFetchBlob.fs.writeFile(path, data.base64, 'base64');
      // } catch (error) {
      //   console.log(error.message);
      // }
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
