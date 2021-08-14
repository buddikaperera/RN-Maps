import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import appTheme from '../../constants/appColors';
import chatsState from '../../constants/chatsState';

const Chat = ({route}) => {
  const selectedMember = route.params.itemId;
  console.log('selectedMember' + selectedMember);

  const {messages} = chatsState;

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatWrapper}>
        <View style={styles.messagesSection} key={selectedMember}>
          {messages.map(message => (
            <View
              key={message.id}
              style={[
                styles.singleMessage,
                message.sender === 'me'
                  ? styles.singleMessageRight
                  : styles.singleMessageLeft,
              ]}>
              {message?.text ? (
                <Text
                  style={[
                    styles.singleMessageText,
                    message.sender === 'me'
                      ? styles.singleMessageTextRight
                      : styles.singleMessageTextLeft,
                  ]}>
                  {message.text}
                </Text>
              ) : null}
              {message?.image ? (
                <Image
                  style={styles.singleMessageImage}
                  source={{
                    uri: message.image,
                  }}
                />
              ) : null}
            </View>
          ))}
        </View>
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.attachmentIconWrapper}>
            <Entypo name="attachment" size={17} color="gray" />
          </TouchableOpacity>
          <TextInput
            placeholder="Type message"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.sendIconWrapper}>
            <Feather name="send" size={17} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  chatHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  backButton: {
    marginRight: 10,
  },
  selectedMemberPhoto: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 10,
  },
  selectedMemberInfo: {
    width: 120,
  },
  selectedMemberName: {fontWeight: 'bold'},
  selectedMemberLastSeen: {
    color: appTheme.INACTIVE_COLOR,
  },
  chatWrapper: {
    flex: 1,
    position: 'relative',
  },
  messagesSection: {flex: 1, padding: 16, paddingBottom: 60},
  singleMessage: {
    maxWidth: '80%',
    marginBottom: 20,
    display: 'flex',
  },
  singleMessageLeft: {
    marginRight: 'auto',
  },
  singleMessageRight: {
    marginLeft: 'auto',
  },
  singleMessageText: {
    padding: 10,
    marginBottom: 5,
  },
  singleMessageTextLeft: {
    backgroundColor: '#D8DADFaa',
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 22,
  },
  singleMessageTextRight: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    color: '#fff',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 22,
  },
  singleMessageImage: {
    height: 120,
    maxWidth: 180,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 10,
    left: '5%',
    height: 50,
    width: '90%',
    backgroundColor: '#F1F3F8',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: '#000000',
    elevation: 2,
    marginTop: 1,
  },
  attachmentIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: '#E4E8EC',
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 15,
    fontSize: 15,
  },
  sendIconWrapper: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    height: 35,
    width: 35,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
