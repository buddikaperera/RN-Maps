// //import React in our code
// import React, {useState} from 'react';

// //import all the components we are going to use
// import {FlatList, View, Text, SafeAreaView, StyleSheet} from 'react-native';

// const dummyArray = [
//   {id: '1', value: 'A'},
//   {id: '2', value: 'B'},
//   {id: '3', value: 'C'},
//   {id: '4', value: 'D'},
//   {id: '5', value: 'E'},
//   {id: '6', value: 'F'},
//   {id: '7', value: 'G'},
//   {id: '8', value: 'H'},
//   {id: '9', value: 'I'},
//   {id: '10', value: 'J'},
//   {id: '11', value: 'K'},
//   {id: '12', value: 'L'},
//   {id: '13', value: 'M'},
//   {id: '14', value: 'N'},
//   {id: '15', value: 'O'},
//   {id: '16', value: 'P'},
//   {id: '17', value: 'Q'},
//   {id: '18', value: 'R'},
//   {id: '19', value: 'S'},
//   {id: '20', value: 'T'},
//   {id: '21', value: 'U'},
//   {id: '22', value: 'V'},
//   {id: '23', value: 'W'},
//   {id: '24', value: 'X'},
//   {id: '25', value: 'Y'},
//   {id: '26', value: 'Z'},
// ];

// const SelectionView = () => {
//   const [listItems, setListItems] = useState(dummyArray);

//   const ItemView = ({item}) => {
//     return (
//       // FlatList Item
//       <View>
//         <Text style={styles.item} onPress={() => getItem(item)}>
//           {item.value}
//         </Text>
//       </View>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       // FlatList Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: '#C8C8C8',
//         }}
//       />
//     );
//   };

//   const getItem = item => {
//     //Function for click on an item
//     alert('Id: ' + item.id + ' Value: ' + item.value);
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <FlatList
//           data={listItems}
//           //data defined in constructor
//           ItemSeparatorComponent={ItemSeparatorView}
//           //Item Separator View
//           renderItem={ItemView}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1,
//     marginLeft: 10,
//     marginRight: 10,
//     marginBottom: 10,
//     marginTop: 30,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// export default SelectionView;

//import React in our code
//

import React, {Component} from 'react';

// //import all the components we are going to use
//

import {
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import style from '../style';

export default class SelectionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSlots: [
        {id: '1', time: '10am - 11am'},
        {id: '2', time: '11am - 12pm'},
        {id: '3', time: '12pm - 1pm'},
        {id: '4', time: '1pm - 2pm'},
        {id: '5', time: '2pm - 3pm'},
        {id: '6', time: '3pm - 4pm'},
        {id: '7', time: '4pm - 5pm'},
        {id: '8', time: '5pm - 6pm'},
      ],

      //checkBox
      checked: [false, false, false, false, false, false, false, false],
    };
  }

  checkBox(index) {
    let checkedCopy = this.state.checked;

    console.log('checkedCopy', checkedCopy);
    checkedCopy[index] = !checkedCopy[index];
    this.setState({
      checked: checkedCopy,
    });
  }

  submitData = () => {
    console.log('selected items', this.state.checked);
  };

  getAppointmentTimePage() {
    const {checked, timeSlots} = this.state;

    return (
      <View>
        <Text style={[styles.title, {marginTop: 20}]}>
          Select Appointment Time:
        </Text>
        {
          <FlatList
            data={timeSlots}
            keyExtractor={times => times.id}
            renderItem={({item, index}) => {
              return (
                <View>
                  <Text>{item.time}</Text>
                  <CheckBox
                    key={index}
                    value={checked[index]}
                    onChange={() => this.checkBox(index)}
                    clicked={() => this.checkBox(index)}
                    iconRight
                    iconType="material"
                    checkedIcon="clear"
                    uncheckedIcon="add"
                    checkedColor="red"
                    style={style.checkBoxStyle}
                  />
                </View>
              );
            }}
          />
        }
        <TouchableOpacity style={styles.addContainer}>
          <Text style={styles.addText} onPress={() => this.submitData()}>
            Add Appointment
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text>{this.getAppointmentTimePage()}</Text>
      </View>
    );
  }
}
export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  title: {
    fontSize: 22,
  },
  checkBoxStyle: {
    borderColor: 'red',
  },
});
