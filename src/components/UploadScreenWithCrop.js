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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import FastImage
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';
import {Platform} from 'react-native';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import ProgressBar from 'react-native-progress/Bar';

const moment = require('moment');

import UploadService from './FileUploadService';
///import ImageEdit from 'react-native-imageedit';
import ImagePicker from 'react-native-image-crop-picker';
export const baseUrl =
  Platform.OS === 'android'
    ? 'http://172.22.102.95:3000/'
    : 'http://localhost:8081/';

//const URL = `${process.env.REACT_APP_API_URL}`;

//import {REACT_APP_API_URL} from 'react-native-dotenv';

const UploadScreenWithCrop = () => {
  const [showImages, setShowImages] = useState([]);
  const [state, setState] = useState(0);

  const [imageuri, setImageuri] = useState('');
  const [modalVisibleStatus, setModalVisibleStatus] = useState(false);

  const [itemPressed, setitemPressed] = useState([]);
  const [isItemSelected, setisItemSelected] = useState([]);
  const [list, setList] = useState([]);

  const [percentage, setPercentage] = useState(0);
  const [uploadProgress, setUploadProgress] = useState();

  //const [currentFile, setCurrentFile] = useState(undefined);
  //const [progress, setProgress] = useState(0);

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);

  const [message, setMessage] = useState('');
  const [fileInfos, setFileInfos] = useState([]);
  const [uploadOrDownloadCount, setUploadOrDownloadCount] = React.useState(10);

  useEffect(() => {
    showAllImages();
  }, []);

  const showModalFunction = (visible, imageURL) => {
    setImageuri(imageURL);
    setModalVisibleStatus(visible);
    console.log(visible);
  };

  //file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/JB001/blah.jpeg

  const showAllImages = () => {
    RNFS.readDir(
      `${RNFS.ExternalStorageDirectoryPath}/Android/data/com.taxiapp/files/IMAGES/JB001/`,
    ).then(res => {
      console.log(res);
      //setShowImages(res);
      //showImages.push(id);
      let arr = res.map((item, index) => {
        item.isSelected = false;
        item.isUploaded = false;

        return {...item};
      });
      setShowImages(arr);
      //console.log('arr URL =>', REACT_APP_API_URL);

      console.log('arr data =>', arr);
    });
  };

  const checkedList = () => {
    let arr = showImages.map((item, index) => {
      item.isSelected = false;
      item.isUploaded = false;

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

  const selectionImageHandler = (ind, item) => {
    console.log('ind', ind);
  };

  const selectionHandler = (ind, item) => {
    let arr = showImages.map((img, index) => {
      if (ind == index) {
        img.isSelected = !img.isSelected; //true;
        img.isProgress = 0;
      }
      return {...img};
    });

    console.log('selectionHandler-->', arr);
    setShowImages(arr);
  };

  const upload = newFile => {
    console.log('selected newFile ', newFile);
    console.log('selected count ', newFile.count);

    let count = newFile.count;

    const data = new FormData();
    data.append('file', newFile);
    data.append('upload_preset', 'employeeApp');
    data.append('cloud_name', 'buddhikap2016');

    const config = {
      onUploadProgress: progressEvent => {
        setUploadProgress(0);
        const percentCompleted = Math.round(
          (progressEvent.loaded * (count + count + 1) * 100) /
            progressEvent.total,
        );
        // setUploadProgress(percentCompleted);
        console.log(
          'selected percentCompleted ' + newFile.count,
          percentCompleted,
        );

        // for (var i = 0; i < 5; i++) {
        //   (function () {
        //     var newI = i;
        //     setTimeout(function () {
        //       console.log(newI);
        //     }, i * 100);
        //   })();
        // }

        console.log(
          `${progressEvent.loaded}kb of ${progressEvent.total}kb | ${percentCompleted}%`,
        );

        if (percentCompleted < 100) {
          setUploadProgress(percentCompleted);
        }
      },
    };

    try {
      const result = axios
        .post(
          'https://api.cloudinary.com/v1_1/buddhikap2016/image/upload',
          data,
          config,
        )

        .then(response => {
          //console.log(response);

          setUploadProgress(100);

          let arrImg = showImages.map((item, index) => {
            if (item.name.split('.')[0] == newFile.name) {
              item.isUploaded = true;
            }
            return {...item};
          });
          setShowImages(arrImg);

          //console.log('uploaded arr arrImg =>', arrImg);
        });
    } catch {
      then(error => console.error(error));
    }
  };

  const submitData = () => {
    console.log('selected showImages ', showImages);

    let newResults = showImages.filter(img => {
      return img.isSelected != false;
    });
    // setUsers(newResults);
    //console.log('Upload images', newResults);

    let uploadFiles = newResults.map((file, index) => {
      // console.log('Upload Files', file.name);
      // console.log('Upload path', file.path);
      // console.log('Upload type', file.name.split('.')[1]);

      let newFile = {
        uri: `file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/JB001/${file.name}`,
        //'file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/JB001/10-08-21-1106666.jpg', //'https://res.cloudinary.com/buddhikap2016/image/upload/v1628570359/uwqhc0iawji7uyzfxlfi.jpg',
        type: 'image/jpeg', ///file.name.split('.')[1],
        name: file.name.split('.')[0],
        count: index,
      };
      upload(newFile); ////adb reverse tcp:3000 tcp:3000
    });

    {
      /*let newFile = {
      uri: data.uri,
      type: `test/${data.uri.split('.')[1]}`,
      name: `test/${data.uri.split('.')[1]}`,
    };
    handleUpload(newFile);
*/
    }
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

  const saveImage = async (filePath, folder) => {
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
      showAllImages();
    } catch (error) {
      console.log(error);
    }
  };
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
            {/*<FastImage
              style={styles.fullImageStyle}
              source={{uri: imageuri}}
              resizeMode={FastImage.resizeMode.contain}
            />*/}
            <View
              onTouchStart={() => {
                console.log('before crash');
                console.log('ImagePicker is', ImagePicker);
                ImagePicker.openCropper({
                  width: 500, //900,
                  height: 800, //1200,
                  cropping: true,
                  path: imageuri,
                  //cropperCircleOverlay: circular,

                  sortOrder: 'none',
                  compressImageMaxWidth: 900,
                  compressImageMaxHeight: 900,
                  compressImageQuality: 1,
                  //compressVideoPreset: 'MediumQu ality',
                  includeExif: true,
                  cropperStatusBarColor: 'white',
                  cropperToolbarColor: 'white',
                  cropperActiveWidgetColor: 'white',
                  cropperToolbarWidgetColor: '#3498DB',
                })
                  .then(image => {
                    // console.log('received image', image);
                    console.log('image crop', image);
                    saveImage(image.path, 'JB001');
                  })
                  .catch(e => {
                    console.log(e);
                    Alert.alert(e.message ? e.message : e);
                  });
              }}>
              <Text style={styles.paragraph}>Touch me</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                showModalFunction(!modalVisibleStatus, '');
              }}>
              <Feather
                style={{fontSize: 35, height: 35}}
                name="x-circle"
                color="red"
                size={35}
                shadow={0}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
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
                  ///onPress={() => selectionHandler(index, item.name)}
                  onPress={() => {
                    showModalFunction(
                      true,
                      `file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/JB001/${item.name}`,
                    );
                  }}

                  //selectionImageHandler
                >
                  <FastImage
                    style={[
                      styles.imageStyle,
                      {
                        borderWidth: 4,
                        //borderColor: state == 0 ? 'green' : 'red',
                        borderColor: !item.isUploaded
                          ? item.isSelected
                            ? '#32CD32'
                            : 'black'
                          : '#006600',
                      },
                    ]}
                    source={{
                      uri: `file:///storage/emulated/0/Android/data/com.taxiapp/files/IMAGES/JB001/${item.name}`,
                    }}
                  />

                  <View style={{position: 'absolute', top: 10, right: 10}}>
                    <Text>
                      {!item.isUploaded ? (
                        item.isSelected ? (
                          <TouchableOpacity
                            activeOpacity={1.0}
                            activeOpacity={(1, 250)}
                            key={item.name}
                            style={{flex: 1}}
                            onPress={() => selectionHandler(index, item.name)}>
                            <MaterialIcons
                              name="check-circle"
                              color="#32CD32"
                              size={35}
                              shadow={0}
                            />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            activeOpacity={1.0}
                            activeOpacity={(1, 250)}
                            key={item.name}
                            style={{flex: 1}}
                            onPress={() => selectionHandler(index, item.name)}>
                            <Feather
                              style={{fontSize: 35, height: 35}}
                              name="x-circle"
                              color="red"
                              size={35}
                              shadow={0}
                            />
                          </TouchableOpacity>
                        )
                      ) : (
                        <MaterialIcons
                          name="verified"
                          color="#006600"
                          size={35}
                          shadow={2}
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
          />

          <View>
            {uploadProgress < 100 && (
              <View style={styles.containerProgressBar}>
                <View style={styles.teamWrapper}>
                  <Text>
                    <Progress.Bar
                      indeterminate={true}
                      animationType="timing"
                      width={30}
                      progress={uploadProgress}
                      height={12}
                      color="#32CD32"
                      width={320}
                    />
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View>
            <TouchableOpacity style={styles.addContainer}>
              <Text style={styles.inputStyle} onPress={() => submitData()}>
                Upload
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default UploadScreenWithCrop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
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
    marginTop: 8,
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
    width: 35,
    height: 35,
    top: 50,
    right: 0,
    position: 'absolute',
  },
  inputStyle: {
    margin: 15,
  },

  containerProgressBar: {
    backgroundColor: '#d8d8d8',
    padding: 10,
    height: 55,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 8,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // taskProgressIndicator: {marginRight: 10},
  // taskMiddleColumn: {width: '50%', marginRight: 'auto'},
  // taskTitle: {
  //   fontWeight: 'bold',
  //   marginBottom: 3,
  // },
  // taskProgressBar: {borderRadius: 7, height: 6},
  teamWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginRight: 10,
  },
  // memberPhoto: {
  //   height: 40,
  //   width: 40,
  //   borderRadius: 50,
  //   marginLeft: -10,
  // },
});
