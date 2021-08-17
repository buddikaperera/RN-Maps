import React from 'react';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import Area from './Graph/Area';

import Barra from './Graph/Barra';
import Linha from './Graph/Linha';
import Pizza from './Graph/Pizza';

const Graph = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 12,
        width: '94%',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <Area />
        <Barra />
        <Linha />
        <Pizza />
      </ScrollView>
    </View>
  );
};

export default Graph;
