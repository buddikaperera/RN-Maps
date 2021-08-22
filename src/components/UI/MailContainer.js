// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import ImageEdit from 'react-native-imageedit';
// ////https://github.com/kaddyadriano/react-native-imageedit
// const MailContainer = () => {
//   return (
//     <View>
//       <Text>MailContainer</Text>
//       <ImageEdit
//         width={3400}
//         height={300}
//         showSaveButtons={true}
//         scaled={true} //To enable pre scaling and positioning
//         image={{
//           uri: 'https://source.unsplash.com/daily',
//           width: 1200, //initial width
//           height: 700, //initial height
//           x: -100, //initial x
//           y: -230, //initial y
//         }}
//       />

//       <ImageEdit
//         width={400} //Crop area width
//         height={300} //Crop area height
//         showEditButton={true}
//         showSaveButtons={true}
//         image={{
//           uri: 'https://source.unsplash.com/daily',
//           width: 1200,
//           height: 700,
//         }}
//         onSave={info => console.log(info)}
//       />
//     </View>
//   );
// };

// export default MailContainer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     padding: 16,
//     paddingBottom: 180,
//   },
//   screenTitle: {
//     textTransform: 'uppercase',
//     opacity: 0.5,
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   flatList: {
//     paddingBottom: 120,
//   },
//   composeButton: {
//     position: 'absolute',
//     bottom: 100,
//     right: 25,
//     zIndex: 2,
//     shadowRadius: 2,
//     shadowOffset: {
//       width: 0,
//       height: -3,
//     },
//     shadowColor: '#000000',
//     elevation: 4,
//     backgroundColor: '#fff',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   composeButtonRound: {
//     borderRadius: 50,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//   },
//   composeButtonCurved: {
//     borderRadius: 25,
//     width: 150,
//     height: 50,
//     paddingHorizontal: 16,
//     justifyContent: 'space-between',
//   },
//   composeText: {
//     fontSize: 17,
//     color: '#D93025',
//     fontWeight: '600',
//   },
//   emptyListContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     height: '100%',
//     alignItems: 'center',
//     paddingBottom: 100,
//   },
//   emptyListText: {
//     textAlign: 'center',
//     fontSize: 19,
//     opacity: 0.6,
//     marginTop: 20,
//   },
// });

import React, {Component} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default class MailContainer extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      images: null,
    };
  }

  pickSingleWithCamera(cropping, mediaType = 'photo') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => alert(e));
  }

  pickSingleBase64(cropit) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true,
      includeExif: true,
    })
      .then(image => {
        console.log('received base64 image');
        this.setState({
          image: {
            uri: `data:${image.mime};base64,` + image.data,
            width: image.width,
            height: image.height,
          },
          images: null,
        });
      })
      .catch(e => alert(e));
  }

  cleanupImages() {
    ImagePicker.clean()
      .then(() => {
        console.log('removed tmp images from tmp directory');
      })
      .catch(e => {
        alert(e);
      });
  }

  cleanupSingleImage() {
    let image =
      this.state.image ||
      (this.state.images && this.state.images.length
        ? this.state.images[0]
        : null);
    console.log('will cleanup image', image);

    ImagePicker.cleanSingle(image ? image.uri : null)
      .then(() => {
        console.log(`removed tmp image ${image.uri} from tmp directory`);
      })
      .catch(e => {
        alert(e);
      });
  }

  cropLast() {
    if (!this.state.image) {
      return Alert.alert(
        'No image',
        'Before open cropping only, please select image',
      );
    }

    ImagePicker.openCropper({
      path: this.state.image.uri,
      width: 200,
      height: 200,
    })
      .then(image => {
        console.log('received cropped image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  pickSingle(cropit, circular = false, mediaType) {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
    })
      .then(images => {
        this.setState({
          image: null,
          images: images.map(i => {
            console.log('received image', i);
            return {
              uri: i.path,
              width: i.width,
              height: i.height,
              mime: i.mime,
            };
          }),
        });
      })
      .catch(e => alert(e));
  }

  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  renderVideo(video) {
    console.log('rendering video');
    return (
      <View style={{height: 300, width: 300}}>
        <Video
          source={{uri: video.uri, type: video.mime}}
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          rate={1}
          paused={false}
          volume={1}
          muted={false}
          resizeMode={'cover'}
          onError={e => console.log(e)}
          onLoad={load => console.log(load)}
          repeat={true}
        />
      </View>
    );
  }

  renderImage(image) {
    return (
      <Image
        style={{width: 300, height: 300, resizeMode: 'contain'}}
        source={image}
      />
    );
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.image ? this.renderAsset(this.state.image) : null}
          {this.state.images
            ? this.state.images.map(i => (
                <View key={i.uri}>{this.renderAsset(i)}</View>
              ))
            : null}
        </ScrollView>

        <TouchableOpacity
          onPress={() => this.pickSingleWithCamera(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single Image With Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.pickSingleWithCamera(false, (mediaType = 'video'))
          }
          style={styles.button}>
          <Text style={styles.text}>Select Single Video With Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingleWithCamera(true)}
          style={styles.button}>
          <Text style={styles.text}>
            Select Single With Camera With Cropping
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingle(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.cropLast()} style={styles.button}>
          <Text style={styles.text}>Crop Last Selected Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingleBase64(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single Returning Base64</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingle(true)}
          style={styles.button}>
          <Text style={styles.text}>Select Single With Cropping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingle(true, true)}
          style={styles.button}>
          <Text style={styles.text}>Select Single With Circular Cropping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.pickMultiple.bind(this)}
          style={styles.button}>
          <Text style={styles.text}>Select Multiple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.cleanupImages.bind(this)}
          style={styles.button}>
          <Text style={styles.text}>Cleanup All Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.cleanupSingleImage.bind(this)}
          style={styles.button}>
          <Text style={styles.text}>Cleanup Single Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
