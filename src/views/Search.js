import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import data2 from '../../data2';
import data3 from '../../data3';

export default function Search({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.card}>
          <View style={styles.drop}>
            <Text style={styles.dropTxt}>Drop Locations</Text>
            <TouchableOpacity>
              <Feather name="x" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <View style={styles.inputWrapper}>
              <View style={styles.pinkDot} />
              <TextInput
                placeholderTextColor="#afb1b6"
                placeholder="Where are you going ?"
              />
            </View>

            <View>
              <Feather name="heart" size={20} />
            </View>
          </View>

          <View style={styles.bottomCard}>
            <View style={styles.bottomCardPin}>
              <Fontisto
                name="map-marker-alt"
                size={24}
                style={styles.bottomCardIcon}
              />
              <Text style={styles.bottomCardText}>
                Tap to select from the map
              </Text>
            </View>
            <TouchableOpacity style={styles.buttonCircle}>
              <Feather name="arrow-right" size={22} style={{color: '#fff'}} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.contentWrapper}>
        <Text style={styles.bigTitle}>Favorite Places</Text>
        <View style={{marginBottom: 5}}>
          {data2.map(data => {
            return (
              <View key={data.id} style={styles.favoriteWrapper}>
                <View style={styles.favoriteWrapper2}>
                  <Fontisto
                    name="heart"
                    size={18}
                    style={{color: '#04dca0', marginRight: 10, paddingTop: 6}}
                  />

                  <View>
                    <Text style={styles.favoriteTitle}>{data.title}</Text>
                    <Text style={styles.favoriteSubTitle}>{data.subtitle}</Text>
                  </View>
                </View>

                <View>
                  <Feather
                    name="minus-circle"
                    size={24}
                    style={{color: '#ff909a', paddingBottom: 22}}
                  />
                </View>
              </View>
            );
          })}
        </View>

        <Text style={styles.bigTitle}>Recently visited Places</Text>
        {data3.map(data => {
          return (
            <View key={data.id} style={styles.recentWrapper}>
              <MaterialCommunityIcons
                name="clock-time-five"
                size={24}
                style={{color: '#80828b', marginRight: 10}}
              />
              <Text style={styles.recentText}>{data.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  card: {
    padding: 20,
    marginHorizontal: 10,
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
  },

  drop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropTxt: {
    fontWeight: 'bold',
    color: '#ff5563',
  },
  search: {
    marginVertical: 15,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#efeff0',
    borderWidth: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  pinkDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#ff4858',
    marginRight: 10,
  },

  bottomCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  bottomCardPin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomCardText: {
    color: '#92939b',
    fontWeight: '500',
    fontSize: 15,
  },

  bottomCardIcon: {
    color: '#ff4858',
    marginRight: 10,
  },

  buttonCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  contentWrapper: {paddingHorizontal: 20, marginTop: 40},

  bigTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#404151',
    marginBottom: 20,
  },

  favoriteWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  favoriteWrapper2: {
    flexDirection: 'row',
  },

  favoriteTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#555664',
    marginBottom: 5,
  },
  favoriteSubTitle: {
    color: '#a9abb0',
  },
  recentWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  recentText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#80828b',
  },
});
