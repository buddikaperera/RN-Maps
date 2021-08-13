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

import UploadService from './FileUploadService';

export const baseUrl =
  Platform.OS === 'android'
    ? 'http://172.22.102.95:3000/'
    : 'http://localhost:8081/';

//const URL = `${process.env.REACT_APP_API_URL}`;

//import {REACT_APP_API_URL} from 'react-native-dotenv';

const UploadScreen = () => {
  const [showImages, setShowImages] = useState([]);
  const [state, setState] = useState(0);
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

  //const [uploadProgress, setUploadProgress] = useState(0);

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
  ///https://github.com/bezkoder/react-hooks-file-upload/blob/master/src/components/FileUpload.js
  // const uploadProgress = progressEvent => {
  //   var Percentage = Math.round(
  //     (progressEvent.loaded / progressEvent.total) * 100,
  //   );
  //   setPercentage(Percentage);
  //   console.log(progressEvent.loaded, progressEvent.total);
  //   console.log(
  //     'Upload progress: ' +
  //       Math.round((progressEvent.loaded / progressEvent.total) * 100) +
  //       '%',
  //   );
  // };
  ////https://www.bigbinary.com/react-best-practices/prefer-axios-over-fetch

  // const handleProces = event => {
  //   setUploadProgress(Math.floor((event.loaded * 100) / event.total));
  // };

  // const onUploadProgress = event => {
  //   const percentCompleted = Math.floor((event.loaded * 100) / event.total);

  //   const percent = Math.floor((event.loaded * 100) / event.total);

  //   console.log(`${event.loaded}kb of ${event.total}kb | ${percent}%`); // just to see whats happening in the console

  //   if (percent <= 100) {
  //     setPercentage(percent); // hook to set the value of current level that needs to be passed to the progressbar
  //   }

  //   // console.log(event.loaded, event.total);
  //   console.log(
  //     'Upload progress: ' +
  //       Math.round((event.loaded / event.total) * 100) +
  //       '%',
  //   );
  // };

  // const myUpload = image => {
  //   var data = new FormData();
  //   data.append('file', image);
  //   data.append('upload_preset', 'employeeApp');
  //   data.append('cloud_name', 'buddhikap2016');

  //   const config = {
  //     onUploadProgress: function (progressEvent) {
  //       var percentCompleted = Math.round(
  //         (progressEvent.loaded * 100) / progressEvent.total,
  //       );
  //       console.log('percentCompleted=>', percentCompleted);
  //       console.log(
  //         `${progressEvent.loaded}kb of ${progressEvent.total}kb | ${percentCompleted}%`,
  //       );
  //     },
  //   };
  //   axios
  //     .put(
  //       'https://api.cloudinary.com/v1_1/buddhikap2016/image/upload',
  //       data,
  //       config,
  //     )
  //     .then(function (res) {
  //       let arrImg = showImages.map((item, index) => {
  //         // console.log('item.name=>', item.name.split('.')[0]);
  //         // console.log('image=>', image.name);

  //         if (item.name.split('.')[0] == image.name) {
  //           item.isUploaded = true;
  //         }
  //         return {...item};
  //       });
  //       setShowImages(arrImg);
  //     })
  //     .catch(function (err) {
  //       // output.className = 'container text-danger';
  //       //output.innerHTML = err.message;
  //     });
  // };

  // ///https://gist.github.com/virolea/e1af9359fe071f24de3da3500ff0f429

  // const upload = image => {
  //   console.log(image);

  //   let data = new FormData();

  //   data.append('file', image);
  //   ///data.append('type', 'image/jpgeg');
  //   data.append('upload_preset', 'employeeApp');
  //   data.append('cloud_name', 'buddhikap2016');
  //   setSelectedFiles(image);

  //   setProgress(0);
  //   setCurrentFile(image);

  //   const options = {
  //     onUploadProgress: progressEvent => {
  //       const {loaded, total} = progressEvent;
  //       let percent = Math.floor((loaded * 100) / total);
  //       console.log(`${loaded}kb of ${total}kb | ${percent}%`);

  //       if (percent < 100) {
  //         setUploadProgress(percent);
  //       }
  //     },
  //   };

  //   //for (const [index, file] of files.entries()) {
  //   // data.append(index, file); // append all files
  //   //}

  //   // axios.post(api_url, formData, {
  //   //     onUploadProgress: progressEvent => {
  //   //         let {loaded, total} = progressEvent;
  //   //         console.log((loaded / total) * 100)
  //   //     },
  //   //     headers: {
  //   //         'Authorization: Bearer <authorization token>',
  //   //         'Content-Type': 'multipart/form-data'
  //   //     }
  //   // });

  //   axios
  //     .post(
  //       'https://api.cloudinary.com/v1_1/buddhikap2016/image/upload',
  //       data,
  //       options,
  //     )
  //     .then(res => {
  //       console.log(res);
  //       setUploadProgress(100);
  //       setTimeout(() => {
  //         setUploadProgress(0);
  //       }, 1000);
  //     });

  //   //setUploadProgress(1);
  //   // setTimeout(() => {
  //   //  setUploadProgress(100);
  //   // }, 1000);

  //   // console.log('result is', result); // result is server's response
  //   //} catch (error) {
  //   // console.error(error);
  //   // } finally {
  //   //console.log('Upload complete');
  //   //}
  // };

  // //   const upload = (file, onUploadProgress) => {
  // //   let formData = new FormData();

  // //   formData.append("file", file);

  // //   return http.post("/upload", formData, {
  // //     headers: {
  // //       "Content-Type": "multipart/form-data",
  // //     },
  // //     onUploadProgress,
  // //   });
  // // };

  // const handleUpload = (image, uploadProgress) => {
  //   const data = new FormData();
  //   data.append('file', image);
  //   data.append('upload_preset', 'employeeApp');
  //   data.append('cloud_name', 'buddhikap2016');

  //   try {
  //     fetch('https://api.cloudinary.com/v1_1/buddhikap2016/image/upload', {
  //       method: 'post',
  //       body: data,
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       uploadProgress,
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         // setPicture(data.url);
  //         // setModal(false);
  //         // showImages;

  //         let arrImg = showImages.map((item, index) => {
  //           // console.log('item.name=>', item.name.split('.')[0]);
  //           // console.log('image=>', image.name);

  //           if (item.name.split('.')[0] == image.name) {
  //             item.isUploaded = true;
  //           }
  //           return {...item};
  //         });
  //         setShowImages(arrImg);

  //         //console.log('uploaded arr arrImg =>', arrImg);
  //       });
  //   } catch {
  //     then(error => console.error(error));
  //   }
  // };

  // Provide only response json part
  // => Chuk other metadata provided by axios

  const upload = newFile => {
    console.log('selected newFile ', newFile);

    const data = new FormData();
    data.append('file', newFile);
    data.append('upload_preset', 'employeeApp');
    data.append('cloud_name', 'buddhikap2016');

    const config = {
      onUploadProgress: progressEvent => {
        setUploadProgress(0);
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total,
        );
        // setUploadProgress(percentCompleted);
        console.log('selected percentCompleted ', percentCompleted);

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
                        <MaterialIcons
                          name="check-circle"
                          color="#32CD32"
                          size={18}
                          shadow={0}
                        />
                      ) : (
                        <Feather
                          style={{fontSize: 20, height: 20}}
                          name="x-circle"
                          color="red"
                          size={18}
                          shadow={0}
                        />
                      )
                    ) : (
                      <MaterialIcons
                        name="verified"
                        color="#006600"
                        size={18}
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
          //keyExtractor={item => item.findIndex}
          ///https://www.npmjs.com/package/react-native-percentage-ring?activeTab=readme
        />
      </View>

      <View>
        <Text>
          {/* Per{' '}
          {uploadProgress < 100 && (
            <Progress.Pie
              indeterminate={true}
              indeterminateAnimationDuration={1000}
              color={'rgba(0, 122, 255, 1)'}
              progress={uploadProgress}
              strokeCap=""
              size={40}
            />
          )}{' '}*/}
        </Text>
      </View>
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
                  animationConfig="{ bounciness: 0 }"
                  width={320}
                />
              </Text>
            </View>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.addContainer}>
        <Text style={styles.inputStyle} onPress={() => submitData()}>
          Upload
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
///https://avaxgfx.com/video_tutorials/109261-udemy-react-native-and-javascript-your-development-guide.html
///https://feathericons.com/
////https://www.npmjs.com/package/react-native-endless-background-service-without-notification

export default UploadScreen;

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
