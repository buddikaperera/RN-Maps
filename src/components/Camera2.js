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

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class Camera2 extends React.Component {
  takePicture = async () => {
    if (cameraRef.current) {
      // const options = {quality: 0.5, base64: true, skipProcessing: true};
      // const data = await cameraRef.current.takePictureAsync(options);
      // const source = data.uri;
      // if (source) {
      //   await cameraRef.current.pausePreview();
      //   setIsPreview(true);
      //   console.log('picture source', source);
      // }

      if (Platform.OS === 'android') {
        await this.checkAndroidPermission();
      }
      const options = {quality: 1};
      const data = await this.camera.takePictureAsync(options);
      //save photo
      // CameraRoll.save(data.uri, 'photo')
      //   .then(onfulfilled => {
      //     ToastAndroid.show(
      //       `VidApp Photos: ${onfulfilled}`,
      //       ToastAndroid.SHORT,
      //     );
      //   })
      //   .catch(error => {
      //     ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT);
      //   });

      CameraRoll.save(data.uri, {type: 'photo', album: 'CustomFolder'});
    }
  };

  state = {};
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{width: '100%', height: '100%', position: 'absolute'}}
          type={RNCamera.Constants.Type.back}
        />
        <Image
          style={{width: 100, height: 100}}
          source={{uri: this.state.imageUri}}
        />
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            borderRadius: 100,
          }}
          onPress={async () => {
            // take picture
            //const result = await this.camera.takePictureAsync();
            await this.camera.takePicture();
            //this.setState({imageUri: result.uri});
          }}
        />
      </View>
    );
  }
}
