import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Button,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
//import Camera from 'react-native-camera';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';
import moment from 'moment/moment';

const mkdir = async url => {
  const dirExists = await RNFS.exists(url);
  if (dirExists) {
    return new Promise(resolve => resolve(dirExists));
  }
  await RNFS.mkdir(url);
  return new Promise(resolve => resolve(url));
};
async function storageFile() {
  const date = moment().format('YYYY/MM/DD');
  const url = `${RNFS.DocumentDirectoryPath}/photo/${date}`;
  await mkdir(url);
  const files = await readPath(url);
  return files;
}

class RNCameraSn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      currentImage: null,
    };
  }

  async takePicture() {
    const options = {aspect: [1, 1], quality: 0.6};
    const {path: currentImage} = await this.camera.capture({metadata: options});
    this.setState({currentImage});
  }

  back() {
    this.setState({currentImage: null, hidden: true});
  }

  async check() {
    const [date, unixTime] = [moment().format('YYYY/MM/DD'), moment().unix()];
    const dir = `${RNFS.DocumentDirectoryPath}/photo/${date}`;
    await mkdir(dir);
    const url = `${dir}/${unixTime}.jpg`;
    await RNFS.moveFile(this.state.currentImage, url);
    console.log(await readPath(dir));
    this.setState({currentImage: null});
  }

  cancel() {
    deleteFile(this.state.currentImage);
    this.setState({currentImage: null});
  }
  ///https://www.programmersought.com/article/22664247521/
  //https://stackoverflow.com/questions/55215354/react-native-how-to-store-captured-images-other-folder-instead-of-pictures-fol

  render() {
    const {currentImage, hidden} = this.state;
    return (
      <View style={[styles.container, hidden && styles.hidden]}>
        {currentImage ? (
          <ImageBackground style={styles.photo} source={{uri: currentImage}}>
            <TouchableOpacity
              style={styles.capture}
              onPress={() => this.cancel()}>
              <Icon name="close" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.capture}
              onPress={() => this.check()}>
              <Icon name="check" size={30} />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <RNCamera
            ref={cam => {
              this.camera = cam;
            }}
            style={styles.preview}
            // aspect={RNCamera.constants.Aspect.fill}
            //captureTarget={RNCamera.constants.CaptureTarget.temp}
          >
            <TouchableOpacity
              style={styles.capture}
              onPress={() => this.back()}>
              <Icon name="expand-more" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.capture}
              onPress={() => this.takePicture()}>
              <Icon name="camera-alt" size={30} />
            </TouchableOpacity>
          </RNCamera>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  capture: {
    flex: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    margin: 20,
    marginBottom: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  photo: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  hidden: {
    display: 'none',
  },
});

export default RNCameraSn;
