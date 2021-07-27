// // import React, {useState, useRef} from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   SafeAreaView,
// //   TouchableOpacity,
// // } from 'react-native';
// // import {RNCamera} from 'react-native-camera';

// // const Camera = ({navigation}) => {
// //   let cameraRef = useRef(null);

// //   const [camType, setcamType] = useState(RNCamera.Constants.Type.back);
// //   //   const [flashEanble, setflashEanble] = useState(
// //   //     RNCamera.Constants.flashMode.off,
// //   //   );

// //   const takePicture = async () => {
// //     if (cameraRef) {
// //       const options = {quality: 0.5, base64: true};
// //       const data = await cameraRef.current.takePictureAsync(options);
// //       console.log(data.uri);
// //     }
// //   };

// //   const flipCamera = () => {
// //     if (camType === RNCamera.Constants.Type.back) {
// //       setcamType(RNCamera.Constants.Type.front);
// //     } else {
// //       setcamType(RNCamera.Constants.Type.back);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <RNCamera
// //         ref={cameraRef}
// //         style={styles.preview}
// //         type={camType}
// //         androidCameraPermissionOptions={{
// //           title: 'Permission to use Camera',
// //           message: 'Required your permission to use camera',
// //           buttonPositive: 'Ok',
// //           buttonNegative: 'Cancel',
// //         }}
// //         androidRecordAudioPermissionOptions={{
// //           title: 'Permission to use audio recording',
// //           message: 'Required your permission to use your audio',
// //           buttonPositive: 'Ok',
// //           buttonNegative: 'Cancel',
// //         }}>
// //         <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
// //           <TouchableOpacity
// //             onPress={() => takePicture()}
// //             style={styles.capture}>
// //             <Text style={{fontSize: 14}}> SNAP</Text>
// //           </TouchableOpacity>
// //         </View>
// //         );
// //       </RNCamera>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     //flexDirection: 'column',
// //     // backgroundColor: 'black',
// //   },
// //   preview: {
// //     flex: 1,
// //     justifyContent: 'flex-end',
// //     alignItems: 'center',
// //   },
// //   capture: {
// //     flex: 0,
// //     backgroundColor: '#fff',
// //     borderRadius: 5,
// //     padding: 15,
// //     paddingHorizontal: 20,
// //     alignSelf: 'center',
// //     margin: 20,
// //   },
// // });

// import React, {useState, useRef} from 'react';
// import {RNCamera} from 'react-native-camera';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// const CameraScreen = ({navigation}) => {
//   let cameraRef = useRef(null);
//   //const locallyStoredPhoneNumber = await getStoredPhoneNumber();

//   const [camType, setcamType] = useState(RNCamera.Constants.Type.back);
//   ////const [flashEanble, setflashEanble] = useState(
//   // RNCamera.Constants.flashMode.off,
//   //);

//   const takePicture = async () => {
//     if (cameraRef) {
//       const options = {quality: 0.5, base64: true};
//       const data = await cameraRef.current.takePictureAsync(options);
//       console.log(data.uri);
//     }
//   };

//   return (
//     <View>
//       <RNCamera
//         ref={cameraRef}
//         style={styles.preview}
//         type={camType}
//         //flashMode={RNCamera.Constants.FlashMode.on}
//         permissionDialogTitle={'Permission to use camera'}
//         permissionDialogMessage={
//           'We need your permission to use your camera phone'
//         }
//       />
//       <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
//         <TouchableOpacity
//           onPress={() => takePicture()}
//           //style={styles.capture}
//         >
//           <Text> SNAP </Text>
//         </TouchableOpacity>
//       </View>
//       {/*<View style={{height: 150, width: 150}}>
//           <Image
//             style={{height: 100, width: 100}}
//             source={{uri: this.state.uri}}
//           />
//         </View>*/}
//     </View>
//   );
// };

// export default CameraScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });

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
/*
export default class CameraScreen extends React.Component {
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
            const result = await this.camera.takePictureAsync();
            this.setState({imageUri: result.uri});
          }}
        />
      </View>
    );
  }
}
*/

export default class CameraScreen extends React.Component {
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
            const result = await this.camera.takePictureAsync();
            this.setState({imageUri: result.uri});
          }}
        />
      </View>
    );
  }
}
