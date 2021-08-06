// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

// var colors = ['#ddd', '#efefef', 'red', '#666', 'rgba(0,0,0,.1)', '#ededed'];
// var backgroundcolors = ['green', 'black', 'orange', 'blue', 'purple', 'pink'];

// const textColored = slected => {
//   if (slected) {
//     return styles.textColored;
//   } else {
//     return styles.textNormal;
//   }
// };

// const changeStyle = props => {
//   var color = colors[Math.floor(Math.random() * colors.length)];
//   var backgroundColor =
//     backgroundcolors[Math.floor(Math.random() * backgroundcolors.length)];
//   // this.setState({
//   //   color: color,
//   //   backgroundColor: backgroundColor,
//   // });
//   setStateBgcolor('backgroundColor', props.backgroundColor);
//   setStateColor(props.color);
// };

// const Tryout3 = props => {
//   const [slected, setSlected] = useState(false);
//   const [statebgcolor, setStateBgcolor] = useState(
//     'backgroundColor',
//     'rgba(0,0,0,.1)',
//   );
//   const [stateColor, setStateColor] = useState('orange');
//   return (
//     <View>
//       <Text>Tryout3 -{slected ? styles.textSelected : styles.text}</Text>
//       <View style={styles.container}>
//         <TouchableHighlight
//           onPress={() => changeStyle(props)}
//           style={{
//             backgroundColor: statebgcolor,
//             height: 60,
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text style={{fontSize: 22, color: stateColor}}>CHANGE COLOR</Text>
//         </TouchableHighlight>

//         <TouchableHighlight
//           style={{
//             backgroundColor: 'red',
//             height: 60,
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text style={{color: 'white', fontSize: 22}}>Click Me</Text>
//         </TouchableHighlight>
//       </View>
//     </View>
//   );
// };
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 60,
//   },
// });
// export default Tryout3;
// import React from 'react';
// import {TouchableHighlight, Text, Alert, StyleSheet} from 'react-native';

// export default class Tryout3 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pressed: false,
//     };
//   }
//   render() {
//     return (
//       <TouchableHighlight
//         onPress={() => {
//           // Alert.alert(
//           //     `You clicked this button`,
//           //     'Hello World！',
//           //     [
//           //         {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
//           //         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//           //         {text: 'OK', onPress: () => console.log('OK Pressed')},
//           //     ]
//           // )
//         }}
//         style={[
//           styles.button,
//           this.state.pressed ? {backgroundColor: 'green'} : {},
//         ]}
//         //onHideUnderlay={() => {
//         // this.setState({pressed: false});
//         //}}
//         //onShowUnderlay={() => {
//         //this.setState({pressed: true});
//         //}}
//       >
//         <Text>Button</Text>
//       </TouchableHighlight>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   button: {
//     padding: 10,
//     borderColor: 'blue',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
// });

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
    // border: 'thin solid grey',
  },
});

const StatefulButton = props => {
  const {color, activeColor} = props;
  const [active, setActive] = useState(false);
  const onPress = () => setActive(!active);
  const buttonTextStyle = {
    color: active ? activeColor : color,
    fontStyle: active ? 'unset' : 'italic',
    fontWeight: active ? 'bold' : 'normal',
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={buttonTextStyle}>Press Here</Text>
    </TouchableOpacity>
  );
};

const Tryout3 = () => {
  return (
    <View style={styles.container}>
      <StatefulButton color="red" activeColor="green" />
      <StatefulButton color="magenta" activeColor="cyan" />
    </View>
  );
};

export default Tryout3;
