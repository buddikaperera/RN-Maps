// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import NetInfo from '@react-native-community/netinfo';

// export default class Level extends Component {
//   constructor() {
//     super();
//     this.state = {
//       connection_Status: '',
//     };
//   }

//   componentDidMount() {
//     NetInfo.isConnected.addEventListener(
//       'connectionChange',
//       this.handleConnectivityChange,
//     );

//     NetInfo.isConnected.fetch().done(isConnected => {
//       if (isConnected == true) {
//         this.setState({connection_Status: 'Online'});
//       } else {
//         this.setState({connection_Status: 'Offline'});
//       }
//     });
//   }

//   componentWillUnmount() {
//     NetInfo.isConnected.removeEventListener(
//       'connectionChange',
//       this.handleConnectivityChange,
//     );
//   }

//   handleConnectivityChange = isConnected => {
//     if (isConnected == true) {
//       this.setState({connection_Status: 'Online'});
//     } else {
//       this.setState({connection_Status: 'Offline'});
//     }
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}> Device Current Status : </Text>
//         <Text style={styles.text}>
//           {' '}
//           You are {this.state.connection_Status}{' '}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     color: 'black',
//   },
// });

// React Native NetInfo
// https://aboutreact.com/react-native-netinfo/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

import NetInfo from '@react-native-community/netinfo';

const Level = () => {
  const [netInfo, setNetInfo] = useState('');
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`,
      );
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then(state => {
      alert(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`,
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Native NetInfo
          {'\n'}
          To Get NetInfo information
        </Text>
        <Text style={styles.textStyle}>
          {/*Here is NetInfo to get device type*/}
          {netInfo}
        </Text>
        <Button title="Get more detailed NetInfo" onPress={getNetInfo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
});

export default Level;
