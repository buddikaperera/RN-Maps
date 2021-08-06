import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [],
      dataCategories: [],
      selectCatg: 0,
    };
  }

  componentDidMount() {
    const url = 'http://tutofox.com/foodapp/api.json';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataBanner: responseJson.banner,
          dataCategories: responseJson.categories,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  _renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.divCategorie, {backgroundColor: item.color}]}
        onPress={() => this.setState({selectCatg: item.id})}>
        <Image
          style={{width: 100, height: 80}}
          resizeMode="contain"
          source={{uri: item.image}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
          {/*  <View style={{width: width, alignItems: 'center'}}>
            <Swiper
              style={{height: width / 2}}
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={2}>
              {this.state.dataBanner.map(itembann => {
                return (
                  <Image
                    style={styles.imageBanner}
                    resizeMode="contain"
                    source={{uri: itembann}}
                  />
                );
              })}
            </Swiper>
            <View style={{height: 20}} />
          </View>
            */}
          <View
            style={{
              width: width,
              borderRadius: 20,
              paddingVertical: 20,
              backgroundColor: 'white',
            }}>
            <Text style={styles.titleCatg}>
              Categories {this.state.selectCatg}
            </Text>
            <FlatList
              horizontal={true}
              data={this.state.dataCategories}
              renderItem={({item}) => this._renderItem(item)}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={{height: 20}} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Categories;
const styles = StyleSheet.create({
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  divCategorie: {
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
// onPress={this.GetItem.bind(this, item.flower_name)}

// 2
// 3
// 4
// 5
// GetItem (flower_name) {

//  Alert.alert(flower_name);

// }
// class ImageUpload extends React.Component {
//   state = {
//     files: [],
//   };

//   fileSelectedHandler = e => {
//     this.setState({files: [...this.state.files, ...e.target.files]});
//   };

//   render() {
//     return (
//       <form>
//         <div>
//           <h2>Upload images</h2>
//         </div>
//         <h3>Images</h3>
//         <input type="file" multiple onChange={this.fileSelectedHandler} />
//       </form>
//     );
//   }
//}http://5.9.10.113/67648624/react-native-firebase-multiple-image-upload-problem

///should wors
///https://medium.com/@alphaq1205/how-to-upload-multiple-images-in-react-native-with-base-64-c096cabcaf49

///https://lifesaver.codes/answer/send-file-object-to-parse-for-upload
////https://medium.com/zero-equals-false/uploading-image-to-node-from-react-native-d197285f678a
///https://www.javaer101.com/en/article/49354480.html
