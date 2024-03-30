import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Info from '../../Assets/images/information.svg';
import BackArrow from '../../Assets/images/angle-right.svg';
import PayIcon from '../../Assets/images/payment-history.svg';
import {globalData} from './globals';

const ProfileScreen = ({route}) => {
  const data = [
    {
      title: '3D Art & Illustration',
      timeSpent: '18 hours spend',
      progress: 0.5,
      backgroundColor: '#6e61e7',
      progressValue: '50%',
    },
    {
      title: 'Maths',
      timeSpent: '14 hours spend',
      progress: 0.8,
      backgroundColor: '#84E9F4',
      progressValue: '80%',
    },
    {
      title: 'UIUX',
      timeSpent: '10 hours',
      progress: 0.3,
      backgroundColor: '#fe6f99',
      progressValue: '30%',
    },
  ];

  const renderListItem = ({item}) => (
    <View style={[styles.taskCard, {backgroundColor: item.backgroundColor}]}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.time}>{item.timeSpent}</Text>
      <Text style={styles.ProgressVal}>{item.progressValue}</Text>
      <ProgressBar
        style={styles.progress}
        progress={item.progress}
        width={120}
        height={8}
        borderRadius={10}
        color={'#fff'}
        unfilledColor={'#EED3D9'}
        borderWidth={0}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.HeadSection}>
        <Image
          source={require('../../Assets/images/person.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.userName}>{globalData.userName}</Text>
        <Text style={styles.email}>user@example.com</Text>
      </View>
      <Text style={styles.CourseHead}>Course you are taking</Text>
      <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.taskList}
      />
      <View style={styles.accountSection}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.accountItem}>
          <Info />
          <Text style={styles.itemText}>Payment History</Text>
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountItem}>
          <PayIcon />
          <Text style={styles.itemText}>Payment History</Text>
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountItem}>
          <PayIcon />
          <Text style={styles.itemText}>Payment History</Text>
          <BackArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20, // Adjusted paddingTop
  },
  HeadSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginTop: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  email: {
    marginBottom: 20,
  },
  CourseHead: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    marginTop: 20,
  },
  taskList: {
    marginTop: 20,
  },
  taskCard: {
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    height: 120,
    width: 200,
    justifyContent: 'center',
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
  },
  progress: {
    position: 'relative',
    bottom: 15,
    left: 40,
  },
  ProgressVal: {
    color: '#fff',
    fontSize: 16,
  },
  accountSection: {
    marginTop: 20, // Adjusted marginTop
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    padding: 15, // Added padding
    backgroundColor: '#fff', // Added backgroundColor
    borderRadius: 10, // Added borderRadius
  },
  itemText: {
    marginLeft: 5,
    marginRight: 10,
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ProfileScreen;
