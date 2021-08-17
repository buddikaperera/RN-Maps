import React from 'react';
import {StatusBar, SafeAreaView, View, Text} from 'react-native';
import BeautifulStateView from 'react-native-beautiful-state-view';

const BeautifulView = () => {
  return (
    <View>
      <SafeAreaView>
        <BeautifulStateView
          resizeMode="contain"
          image={require('../../assets/images/marketing_.png')}
        />
      </SafeAreaView>
    </View>
  );
};

export default BeautifulView;
