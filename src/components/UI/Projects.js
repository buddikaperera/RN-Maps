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
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import appTheme from '../../constants/appColors';
import projectsState from '../../constants/projectsState';
import ProgressCircle from 'react-native-progress-circle';
import shortid from 'shortid';
import DropDownPicker from 'react-native-dropdown-picker';
import ProjectCard from '../ProjectCard';

const combineData = (data, params) => {
  const obj = {};
  for (const property in params) {
    obj[property] = params[property];
  }
  return {...data, ...obj};
};

const Projects = ({navigation}) => {
  const tabs = ['All', 'Ongoing', 'Completed'];

  //const {state, dispatch} = useContext(AuthContext);
  const {projects} = projectsState;

  const [data, setData] = useState({activeTab: 'All'});

  const toggleTab = tab => {
    setData(combineData(data, {activeTab: tab}));
  };

  const isActiveTab = tab => {
    const value = data?.activeTab === tab;
    return value;
  };

  const getProjects = () => {
    let {activeTab} = data;
    let projectsToRender = [];
    if (activeTab === 'All') {
      projectsToRender = projects;
    } else {
      projectsToRender =
        projects?.filter(
          project => project.status === activeTab?.toLowerCase(),
        ) || [];
    }

    return projectsToRender;
  };

  const renderProjectInfo = ({item}) => {
    return <ProjectCard project={item} key={item.id} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <Text style={styles.headerTitle}>Projects</Text>}
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
      />
      <View style={styles.projectsBody}>
        <View style={styles.projectsTabs}>
          {tabs?.map(tab => (
            <TouchableOpacity
              style={[
                styles.projectTab,
                isActiveTab(tab) ? styles.activeProjectTab : null,
              ]}
              onPress={() => toggleTab(tab)}
              key={shortid.generate()}>
              <Text
                style={[
                  styles.projectTabText,
                  isActiveTab(tab)
                    ? styles.activeProjectTabText
                    : styles.inActiveProjectTabText,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {projects?.length > 0 ? (
          <FlatList
            data={getProjects()}
            keyExtractor={(item, index) => item.id}
            renderItem={renderProjectInfo}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          ''
        )}
      </View>
    </SafeAreaView>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  projectsBody: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  projectsTabs: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    borderRadius: 7,
    marginBottom: 30,
  },
  projectTab: {
    width: '30%',
    borderRadius: 7,
  },
  activeProjectTab: {
    backgroundColor: appTheme.PRIMARY_COLOR,
  },
  projectTabText: {fontSize: 16, paddingVertical: 7, textAlign: 'center'},
  activeProjectTabText: {
    color: '#fff',
  },
  inActiveProjectTabText: {
    color: appTheme.PRIMARY_COLOR,
  },
});

export function TabScreenHeader({
  leftComponent,
  isSearchBtnVisible,
  isMoreBtnVisible,
}) {
  const [data, setData] = useState({isSearchFieldVisible: false});

  const toggleSearchField = () => {
    let {isSearchFieldVisible} = data;
    isSearchFieldVisible = !isSearchFieldVisible;
    setData(combineData(data, {isSearchFieldVisible}));
  };

  return (
    <View style={styless.headerContainer}>
      {leftComponent()}
      <View style={styless.headerRightContainer}>
        {isSearchBtnVisible ? (
          <View style={styles.searchContainer}>
            {data?.isSearchFieldVisible ? (
              <View style={styless.searchInputWrapper}>
                <TextInput
                  placeholder="Search"
                  style={styless.searchInputField}
                  placeholderTextColor={appTheme.INACTIVE_COLOR}
                />
                <TouchableOpacity onPress={() => toggleSearchField()}>
                  <MaterialIcons
                    name="close"
                    size={20}
                    color={appTheme.INACTIVE_COLOR}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={() => toggleSearchField()}>
                <Feather name="search" size={22} color="#000" />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styless = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    marginRight: 15,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuOptionText: {
    fontSize: 16,
    paddingLeft: 7,
    paddingVertical: 3,
  },
  searchInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 170,
    paddingHorizontal: 7,
    height: 35,
  },
  searchInputField: {
    fontSize: 15,
    height: 40,
  },
});
