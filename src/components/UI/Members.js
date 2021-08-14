import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
///import shortid from 'shortid';
import appTheme from '../../constants/appColors';
import membersState from '../../constants/membersState';

//props.navigation.navigate('YourScreenName', {
//your_key: any_value,
//});

const Members = ({navigation}) => {
  const handleNavigation = (route, anyValue) => {
    ///alert(route);
    navigation.navigate(route, {itemId: anyValue});
  };

  const {members} = membersState;
  return (
    <View>
      {/*<TabScreenHeader
          leftComponent={() => <Text style={styles.headerTitle}>Members</Text>}
          isSearchBtnVisible={false}
          isMoreBtnVisible={true}
        />*/}

      <View>
        {members?.length ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.membersWrapper}>
              {members.map(member => (
                <TouchableOpacity
                  style={styles.singleMember}
                  onPress={() => handleNavigation('Chat', member.id)}
                  key={member.id}>
                  <Image
                    style={styles.singleMemberPhoto}
                    source={{
                      uri: member?.photo,
                    }}
                  />
                  <View style={styles.singleMemberInfo}>
                    <Text
                      style={styles.selectedMemberName}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {member?.name}
                    </Text>
                    <Text style={styles.selectedMemberLastSeen}>
                      {member?.designation}
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="message"
                    size={17}
                    color={appTheme.PRIMARY_COLOR}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        ) : (
          'dddd'
        )}
      </View>
    </View>
  );
};

export default Members;

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
  membersWrapper: {flex: 1, padding: 16},
  singleMember: {
    backgroundColor: '#fff',
    padding: 10,
    height: 70,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 1,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleMemberPhoto: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  singleMemberInfo: {
    width: '65%',
    marginRight: 'auto',
  },
  chatWrapper: {
    flex: 1,
    position: 'relative',
  },
});
