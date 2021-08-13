import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
//import {Popup} from 'popup-ui';

import Root from './basic/Root/index';

import Popup from './basic/Popup/index';

class PopUp extends Component {
  render() {
    return (
      <Root>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3498db',
          }}>
          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Success',
                title: 'Upload complete',
                button: false,
                textBody: 'Congrats! Your upload successfully done',
                buttontext: 'Ok',
                autoClose: true,
              })
            }>
            <Text>Popup Success</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Warning',
                title: 'Upload attention',
                textBody:
                  'Your file is over 3MB, this may harm your application',
                buttontext: 'Continue',
                callback: () => Popup.hide(),
              })
            }>
            <Text>Popup Warning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Danger',
                title: 'Upload failed',
                textBody:
                  'Sorry! Your upload failed, please try again Sorry! Your upload failed, please try again',
                buttontext: 'Try again',
                callback: () => Popup.hide(),
              })
            }>
            <Text>Popup Danger</Text>
          </TouchableOpacity>
        </View>
      </Root>
    );
  }
}

export default PopUp;
