import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const Status = ({navigation}) => {
  const lectureData = [
    {
      id: 1,
      subject: 'Maths',
      progress: 0.8,
      backgroundColor: '#6e61e7',
      image: require('../../Assets/images/maths.png'),
      text: 'Running...',
    },
    {
      id: 2,
      subject: 'UIUX',
      progress: 0.5,
      backgroundColor: '#84E9F4',
      image: require('../../Assets/images/ui-ux.png'),
      text: 'Running...',
    },
    {
      id: 3,
      subject: '3D ART',
      progress: 1,
      backgroundColor: '#63b0e8',
      image: require('../../Assets/images/3d-art-illution.png'),
      text: 'Running...',
    },
    {
      id: 4,
      subject: 'History',
      progress: 0.4,
      backgroundColor: '#fe6f99',
      image: require('../../Assets/images/history.png'),
      text: 'Running...',
    },
    {
      id: 5,
      subject: 'Python',
      progress: 1,
      backgroundColor: '#84E9F4',
      image: require('../../Assets/images/derivation.png'),
      text: 'Running...',
    },
    {
      id: 6,
      subject: 'Biology',
      progress: 0.2,
      backgroundColor: '#63b0e8',
      image: require('../../Assets/images/biology.png'),
      text: 'Running...',
    },
    {
      id: 7,
      subject: 'Editing',
      progress: 1,
      backgroundColor: '#fe6f99',
      image: require('../../Assets/images/photoshop.png'),
      text: 'Running...',
    },
  ];

  // Function to handle card press
  const handleCardPress = id => {
    navigation.navigate('Lesson', {lessonId: id});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.lectureCard}
      onPress={() => handleCardPress(item.id)}>
      <View style={styles.lectureIconContainer}>
        <View
          style={[styles.lectureIcon, {backgroundColor: item.backgroundColor}]}>
          <Image source={item.image} style={styles.lectureImage} />
        </View>
      </View>
      <View style={styles.lectureContent}>
        <View>
          <Text style={styles.lectureSubject}>{item.subject}</Text>
          {item.progress === 1 ? (
            <Text
              style={[
                styles.lectureSubtitle,
                {position: 'absolute', top: 30, color: 'green'},
              ]}>
              Finished
            </Text>
          ) : (
            <Text style={styles.lectureSubtitle}>{item.text}</Text>
          )}
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar
            progress={item.progress}
            width={150}
            height={8}
            borderRadius={10}
            color={item.progress === 1 ? 'green' : '#6e61e7'}
            unfilledColor={'#d9e5fc'}
            borderWidth={0}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Lectures')}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Lectures</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OngoingScreen')}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CompletedScreen')}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Completed</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={lectureData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Status;

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  lectureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  lectureIconContainer: {
    marginRight: 15,
  },
  lectureIcon: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lectureImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  lectureContent: {
    flex: 1,
    flexDirection: 'row',
  },
  progressBarContainer: {
    position: 'absolute',
    top: 25,
    left: 100,
  },
  lectureSubject: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lectureSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
};
