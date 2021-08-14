import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import appTheme from '../../constants/appColors';
import chatsState from '../../constants/chatsState';
import userState from '../../constants/userState';

const Profile = ({navigation}) => {
  const {user} = userState;

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  return (
    <View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.profileDetailsSection}>
              <View style={styles.profileInfoSection}>
                <View style={styles.statisticsContainer}>
                  <Text style={styles.statisticsText}>135</Text>
                  <Text style={styles.statisticsTitle}>Completed Tasks</Text>
                </View>
                <Image
                  style={styles.profilePhoto}
                  source={{
                    uri: user?.photo,
                  }}
                />
                <View style={styles.statisticsContainer}>
                  <Text style={styles.statisticsText}>20</Text>
                  <Text style={styles.statisticsTitle}>Ongoing Tasks</Text>
                </View>
              </View>
              <View style={styles.profileCenterSection}>
                <Text style={styles.nameText}>{user?.name}</Text>
                <Text style={styles.designationText}>{user?.designation}</Text>
                <TouchableOpacity style={styles.editProfileWrapper}>
                  <Text style={styles.editProfileText}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.exploreSection}>
              <Text style={styles.exploreHeader}>Explore</Text>
              <View style={styles.exploreContent}>
                <TouchableOpacity style={styles.singleExplore}>
                  <Ionicons name="people" size={22} color={appTheme.COLOR1} />
                  <Text style={styles.exploreText}>Members</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleExplore}>
                  <MaterialCommunityIcons
                    name="crown"
                    size={22}
                    color={appTheme.COLOR1}
                  />
                  <Text style={styles.exploreText}>Go Pro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleExplore}>
                  <Fontisto
                    name="pie-chart-1"
                    size={22}
                    color={appTheme.COLOR1}
                  />
                  <Text style={styles.exploreText}>Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singleExplore}>
                  <SimpleLineIcons
                    name="settings"
                    size={22}
                    color={appTheme.COLOR1}
                  />
                  <Text style={styles.exploreText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.singleExplore,
                    {marginRight: 'auto', marginLeft: '7%'},
                  ]}
                  onPress={() => handleNavigation('Onboarding')}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={22}
                    color={appTheme.COLOR1}
                  />
                  <Text style={styles.exploreText}>Log out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  leftHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  profileDetailsSection: {
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  profileInfoSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profilePhoto: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  statisticsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  statisticsText: {
    color: appTheme.PRIMARY_COLOR,
    fontSize: 13,
    fontWeight: 'bold',
  },
  statisticsTitle: {
    fontSize: 13,
    color: appTheme.INACTIVE_COLOR,
  },
  profileCenterSection: {
    display: 'flex',
    alignItems: 'center',
  },
  nameText: {fontWeight: 'bold', fontSize: 16, marginBottom: 5},
  designationText: {
    fontSize: 12,
    color: appTheme.INACTIVE_COLOR,
    marginBottom: 20,
  },
  editProfileWrapper: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    paddingHorizontal: 25,
    borderRadius: 5,
    paddingVertical: 10,
  },
  editProfileText: {
    color: '#fff',
  },
  exploreSection: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  exploreHeader: {
    fontWeight: 'bold',
    marginBottom: 30,
    fontSize: 14,
  },
  exploreContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  singleExplore: {
    height: 80,
    width: '28%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: '#fff',
    margin: 1,
    marginBottom: 20,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  exploreText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: appTheme.PRIMARY_COLOR,
  },
});
