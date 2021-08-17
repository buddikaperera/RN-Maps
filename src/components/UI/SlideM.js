import React, {useState} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {SlideModal} from 'react-native-slide-modal';

const SlideM = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SlideModal
      modalType="iOS Form Sheet"
      // modalType="iOS Bottom Sheet"
      modalVisible={modalVisible}
      screenContainer={
        <View>
          <Button
            title="Show Modal"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      }
      modalContainer={
        <View>
          <Text>Modal Content</Text>
        </View>
      }
      modalHeaderTitle="Header Title"
      pressDone={() => setModalVisible(!modalVisible)}
      pressCancel={() => setModalVisible(!modalVisible)}
      darkMode={false}
      doneDisabled={false}
    />
  );
};

export default SlideM;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  closeButton: {
    height: 7,
    width: 80,
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  setModalDimensions: (height, width) => ({
    height,
    width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 10,
    display: 'flex',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }),
});
