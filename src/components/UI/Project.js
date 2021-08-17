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
import tasksState from '../../constants/tasksState';
import ProgressCircle from 'react-native-progress-circle';
import shortid from 'shortid';
import DropDownPicker from 'react-native-dropdown-picker';
import ProjectCard from '../ProjectCard';

export function Project({navigation, route}) {
  const project = route.params;
  // const {state, dispatch} = useContext(AuthContext);
  const {tasks} = tasksState;

  const tabs = ['Task List', 'File', 'Comments'];

  const [data, setData] = useState({
    activeTab: 'Task List',
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All Tasks', value: 'All Tasks'},
    {label: 'Ongoing', value: 'Ongoing'},
    {label: 'Completed', value: 'Completed'},
  ]);

  const getTasks = () => {
    let tasksToRender = [];
    if (!value || value === 'All Tasks') {
      tasksToRender = tasks;
    } else if (value === 'Ongoing') {
      tasksToRender = tasks.filter(task => task.progress < 100) || [];
    } else if (value === 'Completed') {
      tasksToRender = tasks.filter(task => task.progress === 100) || [];
    }

    return tasksToRender;
  };

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const toggleTab = tab => {
    setData(combineData(data, {activeTab: tab}));
  };

  const isActiveTab = tab => {
    const value = data?.activeTab === tab;
    return value;
  };

  const handleCreateTask = () => {
    dispatch({
      type: 'toggleBottomModal',
      payload: {bottomModal: 'CreateTask'},
    });
  };

  const handleChangeTaskStatus = value => {};

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => (
          <TouchableOpacity
            onPress={() => handleBackButton()}
            style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={25} color="#000" />
          </TouchableOpacity>
        )}
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
      />
      <View>
        <View style={styles.projectDetailsSection}>
          <View style={styles.projectTitleWrapper}>
            <Text style={styles.projectTitle}>{project?.title}</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.projectDescription}>{project?.description}</Text>
          <View style={styles.projectTeamAndProgress}>
            <View style={styles.projectProgressWrapper}>
              <ProgressCircle
                percent={project?.progress}
                radius={50}
                borderWidth={10}
                color="#6AC67E"
                shadowColor="#f4f4f4"
                bgColor="#fff">
                <Text style={styles.projectProgress}>{project?.progress}%</Text>
              </ProgressCircle>
            </View>
            <View>
              <Text style={styles.projectTeamTitle}>Team</Text>
              <View style={styles.projectTeamWrapper}>
                {project?.team?.map(member => (
                  <Image
                    key={shortid.generate()}
                    style={styles.projectMemberPhoto}
                    source={{uri: member?.photo}}
                  />
                ))}
                <TouchableOpacity style={styles.plusBtnContainer}>
                  <MaterialCommunityIcons name="plus" size={22} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.projectStatus}>{project?.status}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectDetailsSection: {
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
    marginBottom: 15,
  },
  projectTitleWrapper: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
  },
  projectTeamAndProgress: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  projectTeamTitle: {fontWeight: 'bold', marginBottom: 5},
  projectDescription: {
    color: appTheme.INACTIVE_COLOR,
    marginBottom: 30,
  },
  projectProgressWrapper: {marginRight: 30},
  projectProgress: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  projectTeamWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  projectMemberPhoto: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: -10,
  },
  plusBtnContainer: {
    backgroundColor: appTheme.COLOR1,
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: -10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectStatus: {
    marginLeft: 'auto',
    borderRadius: 20,
    textAlign: 'center',
    borderColor: appTheme.INACTIVE_COLOR,
    borderWidth: 1,
    textTransform: 'capitalize',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: appTheme.INACTIVE_COLOR,
  },
  projectBody: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  projectTabs: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    borderRadius: 7,
    marginBottom: 5,
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
  bottomContainer: {
    height: '65%',
  },
  bottomContent: {
    paddingBottom: 200,
  },
  tasksHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  tasksRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tasksLeftText: {
    marginRight: 7,
    fontWeight: 'bold',
    fontSize: 15,
  },
  plusBtnContainer2: {
    backgroundColor: appTheme.COLOR1,
    height: 30,
    width: 30,
    borderRadius: 50,
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
