// import React, {Component} from 'react';
// import {
//   Text,
//   StyleSheet,
//   View,
//   Modal,
//   TouchableHighlight,
//   Image,
// } from 'react-native';

// export default class App extends Component {
//   state = {
//     modalVisible: false,
//   };

//   toggleModal(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Modal
//           animationType={'slide'}
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             console.log('Modal has been closed.');
//           }}>
//           <View style={styles.modal}>
//             <Image
//               style={{width: '100%', height: 200, resizeMode: 'stretch'}}
//               source={{
//                 uri: 'https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg',
//               }}
//             />
//             <Text style={styles.text}> Javascript Tutorial With Example</Text>

//             <TouchableHighlight
//               style={styles.touchableButton}
//               onPress={() => {
//                 this.toggleModal(!this.state.modalVisible);
//               }}>
//               <Text style={styles.text}>Close Modal</Text>
//             </TouchableHighlight>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           style={styles.touchableButton}
//           onPress={() => {
//             this.toggleModal(true);
//           }}>
//           <Text style={styles.text}>Open Modal</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//   },
//   modal: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#2196f3',
//     justifyContent: 'center',
//     padding: 10,
//   },
//   text: {
//     color: '#fff',
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   touchableButton: {
//     width: '70%',
//     padding: 10,
//     backgroundColor: '#f06292',
//     marginBottom: 10,
//     marginTop: 30,
//   },
// });
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ImageView from 'react-native-image-viewing';

const images = [
  {
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
];

const MyModal = () => {
  const [visible, setIsVisible] = useState(false);
  return (
    <View>
      <Text>MyModal</Text>
    </View>
  );
};

export default MyModal;
